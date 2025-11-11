#!/bin/bash

# Get absolute path to the current directory
BASE_DIR="$(pwd)"

# List of files to print (hard-coded)
FILES=(
  "$BASE_DIR/eslint.config.js"
  "$BASE_DIR/index.html"
  "$BASE_DIR/package.json"
  "$BASE_DIR/postcss.config.js"
  "$BASE_DIR/public/vite.svg"
  "$BASE_DIR/README.md"
  "$BASE_DIR/src/App.css"
  "$BASE_DIR/src/App.jsx"
  "$BASE_DIR/src/assets/hutao1.png"
  "$BASE_DIR/src/assets/hutao2.png"
  "$BASE_DIR/src/assets/hutao3.png"
  "$BASE_DIR/src/assets/react.svg"
  "$BASE_DIR/src/index.css"
  "$BASE_DIR/src/main.jsx"
  "$BASE_DIR/tailwind.config.js"
  "$BASE_DIR/vite.config.js"
)

# Loop through each file and print the path + contents
for FILE in "${FILES[@]}"; do
  if [[ -f "$FILE" ]]; then
    echo "================================================================"
    echo "File: $FILE"
    echo "----------------------------------------------------------------"
    cat "$FILE"
    echo -e "\n"
  else
    echo "⚠️  Skipping missing file: $FILE"
  fi
done
