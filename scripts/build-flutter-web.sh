#!/usr/bin/env bash
set -e

# Check if flutter is installed in PATH
if command -v flutter > /dev/null 2>&1; then
  echo "=> Using system Flutter SDK..."
  FLUTTER_BIN="flutter"
elif [ -f "/tmp/flutter/bin/flutter" ]; then
  echo "=> Using cached CI Flutter SDK at /tmp/flutter..."
  FLUTTER_BIN="/tmp/flutter/bin/flutter"
else
  echo "=> Flutter SDK not found in build environment. Installing Flutter SDK into /tmp/flutter..."
  git clone --depth 1 -b stable https://github.com/flutter/flutter.git /tmp/flutter
  FLUTTER_BIN="/tmp/flutter/bin/flutter"
fi

echo "=> Building Flutter Web release..."
cd packages/ui-flutter
"$FLUTTER_BIN" config --no-analytics
"$FLUTTER_BIN" build web --release --base-href /flutter/ --output ../../apps/playground-web/public/flutter
echo "=> Flutter Web build completed successfully!"
