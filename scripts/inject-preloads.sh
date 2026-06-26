#!/usr/bin/env bash
# Postbuild: inject preload links for JS chunks into every HTML file.
# Only preloads chunks that appear as <script> tags on that page PLUS the
# Three.js chunk (largest dynamic import, needed above-fold for background).
# Static exports don't emit dynamic-import preloads, so this forces early
# download of critical chunks while avoiding "preload not used" warnings.
set -euo pipefail

OUT_DIR="${1:-out}"

if [ ! -d "$OUT_DIR" ]; then
  echo "❌ Output directory not found: $OUT_DIR" >&2
  exit 1
fi

CHUNKS_DIR="$OUT_DIR/_next/static/chunks"

if [ ! -d "$CHUNKS_DIR" ]; then
  echo "❌ Chunks directory not found: $CHUNKS_DIR" >&2
  exit 1
fi

# Find the Three.js chunk (largest file, ~872KB, always needed for background)
THREE_CHUNK=$(ls -S "$CHUNKS_DIR"/*.js 2>/dev/null | head -1 | xargs basename)

HTML_COUNT=0
TOTAL_PRELOADS=0

# Process each HTML file
while IFS= read -r -d '' html; do
  # Extract chunk filenames that appear in <script src="..."> tags on this page
  SCRIPT_CHUNKS=$(grep -oP 'src="/_next/static/chunks/\K[a-z0-9_-]+\.js' "$html" | sort -u)

  PRELOADS=""
  for chunk in $SCRIPT_CHUNKS; do
    PRELOADS+="<link rel=\"preload\" as=\"script\" href=\"/_next/static/chunks/$chunk\"/>
"
  done

  # Always preload the Three.js chunk (dynamic import, but needed above-fold)
  if [ -n "$THREE_CHUNK" ] && ! echo "$SCRIPT_CHUNKS" | grep -qF "$THREE_CHUNK"; then
    PRELOADS+="<link rel=\"preload\" as=\"script\" href=\"/_next/static/chunks/$THREE_CHUNK\"/>
"
  fi

  COUNT=$(echo "$PRELOADS" | grep -c "preload" || true)
  TOTAL_PRELOADS=$((TOTAL_PRELOADS + COUNT))

  awk -v preloads="$PRELOADS" '{gsub(/<\/head>/, preloads "</head>"); print}' "$html" > "$html.tmp"
  mv "$html.tmp" "$html"
  HTML_COUNT=$((HTML_COUNT + 1))
done < <(find "$OUT_DIR" -name "*.html" -print0)

echo "✅ Injected ~$((TOTAL_PRELOADS / HTML_COUNT)) preloads/page into $HTML_COUNT HTML files ($THREE_CHUNK)"
