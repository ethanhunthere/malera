#!/usr/bin/env bash
# Postbuild: inject preload links for critical JS chunks into every HTML file.
#
# Strategy: only preload small chunks (< 40 KB) that are needed for first paint.
# Large chunks (Three.js, lazy components) are loaded via async <script> tags -
# the browser discovers them naturally without blocking rendering.
# This avoids saturating slow mobile connections with non-critical JS.
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

# Max size in KB to preload (small hydration-critical chunks only)
MAX_SIZE_KB=40

HTML_COUNT=0
TOTAL_PRELOADS=0
SKIPPED_LARGE=0

# Process each HTML file
while IFS= read -r -d '' html; do
  # Extract chunk filenames from <script> tags on this page
  SCRIPT_CHUNKS=$(grep -oP 'src="/_next/static/chunks/\K[a-z0-9_-]+\.js' "$html" | sort -u)

  PRELOADS=""
  for chunk in $SCRIPT_CHUNKS; do
    chunk_path="$CHUNKS_DIR/$chunk"
    # Only preload small chunks - large ones are lazy/dynamic imports
    if [ -f "$chunk_path" ]; then
      size_kb=$(du -k "$chunk_path" | cut -f1)
      if [ "$size_kb" -le "$MAX_SIZE_KB" ]; then
        PRELOADS+="<link rel=\"preload\" as=\"script\" href=\"/_next/static/chunks/$chunk\"/>
"
      else
        SKIPPED_LARGE=$((SKIPPED_LARGE + 1))
      fi
    fi
  done

  COUNT=$(echo "$PRELOADS" | grep -c "preload" || true)
  TOTAL_PRELOADS=$((TOTAL_PRELOADS + COUNT))

  awk -v preloads="$PRELOADS" '{gsub(/<\/head>/, preloads "</head>"); print}' "$html" > "$html.tmp"
  mv "$html.tmp" "$html"
  HTML_COUNT=$((HTML_COUNT + 1))
done < <(find "$OUT_DIR" -name "*.html" -print0)

echo "✅ Injected ~$((TOTAL_PRELOADS / HTML_COUNT)) preloads/page into $HTML_COUNT HTML files"
echo "   Skipped $SKIPPED_LARGE large chunk(s) (will load via async <script>)"
