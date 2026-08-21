mkdir -p src/assets/optimized

find src/assets \
  -type f \
  \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) \
  ! -path "src/assets/optimized/*" \
  -print0 |
while IFS= read -r -d '' file; do
  relative="${file#src/assets/}"
  output="src/assets/optimized/${relative%.*}.jpg"

  mkdir -p "$(dirname "$output")"

  width=$(sips -g pixelWidth "$file" 2>/dev/null | awk '/pixelWidth:/ {print $2}')

  if [[ -z "$width" ]]; then
    echo "Impossible de lire : $file"
    continue
  fi

  if (( width > 10000 )); then
    target_width=3600
  elif (( width > 5000 )); then
    target_width=3000
  elif (( width > 3000 )); then
    target_width=2400
  else
    target_width=1800
  fi

  echo "→ $relative | ${width}px → ${target_width}px"

  sips \
    --resampleWidth "$target_width" \
    -s format jpeg \
    -s formatOptions 82 \
    "$file" \
    --out "$output" >/dev/null
done

echo "✅ Optimisation terminée."