---
description: Running the native playground on an Android emulator
---

# Native Playground — Local Development

This workflow starts the Expo dev server for `apps/native-playground` and connects it to a local Android emulator or iOS simulator.

## Prerequisites

- **Android**: Android Studio installed. AVDs configured (e.g., `Pixel_9`).
- **iOS**: Xcode installed with simulators.
- **Bun**: Ensure `bun` is installed (`bun install` from repo root).

## Environment Setup (Mac)

Ensure your shell (e.g., `~/.zshrc`) has the following paths:

```bash
# Android
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools

# iOS (Xcode)
# No specific PATH needed usually, but ensure xcode-select is set
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

---

## Step 1: Boot the Emulator/Simulator

### Android

```bash
emulator -avd Pixel_9 &
```

Wait for the emulator to fully boot.

### iOS

```bash
open -a Simulator
```

---

## Step 2: Start the Expo Dev Server

// turbo
From the **monorepo root**, run:

```bash
bun native:android # for Android
# OR
bun native # for choice / iOS
```

This runs `npx nx run native-playground:start --android` (or similar), which:

1. Starts the Metro bundler (NativeWind + Nx monorepo-aware).
2. Detects the running emulator/simulator.
3. Installs Expo Go automatically.
4. Opens the playground app.

---

## Alternative Commands

| Command                                | Description                                                        |
| -------------------------------------- | ------------------------------------------------------------------ |
| `bun native`                           | Start Expo with interactive picker (QR + emulator options)         |
| `bun native:android`                   | Start and immediately open on Android emulator                     |
| `bun native:clear`                     | Start Android with cleared Metro cache (fixes stale bundle issues) |
| `nx run native-playground:run-android` | Full native build (slower, no Expo Go)                             |

---

## Monorepo Hot Reload

Changes to `packages/ui-native` or `packages/design-tokens` will automatically hot-reload in the emulator because `metro.config.js` uses `withNxMetro`, which watches all monorepo workspace packages.

If hot reload stops working, run `bun native:clear` to reset the bundler cache.

---

## Troubleshooting

**Emulator not detected:**

```bash
adb devices                         # should list the emulator
adb kill-server && adb start-server # restart ADB if needed
```

**Metro can't resolve monorepo packages:**

```bash
bun install      # re-link workspace packages
bun native:clear # clear bundler cache
```

**`ANDROID_HOME` not set:**
Verify the path in `~/.zshrc` matches your `Library/Android/sdk` location.
