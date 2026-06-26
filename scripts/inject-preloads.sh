#!/usr/bin/env bash
# Postbuild: inject preload links for ALL JS chunks into every HTML file.
# Static exports don't emit dynamic-import preloads, so the browser
# waits for JS execution before downloading chunks  causing 2-3s black screen.
# This forces immediate download of everything.
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

# Build preload tags
PRELOADS=""
for chunk in "$CHUNKS_DIR"/*.js; do
  filename=$(basename "$chunk")
  PRELOADS+="<link rel=\"preload\" as=\"script\" href=\"/_next/static/chunks/$filename\"/>
"
done

CHUNK_COUNT=$(ls "$CHUNKS_DIR"/*.js 2>/dev/null | wc -l)
HTML_COUNT=0

# Inject before </head> in every HTML file
while IFS= read -r -d '' html; do
  # Insert preloads before </head>
  awk -v preloads="$PRELOADS" '{gsub(/<\/head>/, preloads "</head>"); print}' "$html" > "$html.tmp"
  mv "$html.tmp" "$html"
  HTML_COUNT=$((HTML_COUNT + 1))
done < <(find "$OUT_DIR" -name "*.html" -print0)

echo "✅ Injected $CHUNK_COUNT chunk preloads into $HTML_COUNT HTML files"
