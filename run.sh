#!/bin/bash

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "Installing Node.js dependencies..."
  npm install
fi

# Run the compiled JavaScript application
echo "Running compiled JavaScript application..."
node dist/ascii_art.js "$@"