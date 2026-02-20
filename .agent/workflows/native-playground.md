---
description: Running the native playground on an Android emulator
---

# Native Playground — Local Development

This workflow starts the Expo dev server for `apps/native-playground` and connects it to a local Android emulator.

## Prerequisites

- Android Studio installed (at `/snap/bin/android-studio`)
- At least one AVD configured. Available AVDs:
  - `Pixel_9` (recommended)
  - `Medium_Phone_API_36.0`
- Yarn dependencies installed (`yarn install` from repo root)

---

## Step 1: Boot the Android Emulator

Open a terminal and start the emulator (leave it running in the background):

```bash
$ANDROID_HOME/emulator/emulator -avd Pixel_9 &
```

Wait for the emulator to fully boot to the home screen (~30–60 seconds).

> **Tip:** You can also launch the emulator from Android Studio → Device Manager → ▶ Run.

---

## Step 2: Start the Expo Dev Server

// turbo
From the **monorepo root**, run:

```bash
yarn native:android
```

This runs `npx nx run native-playground:start --android`, which:

1. Starts the Metro bundler (NativeWind + Nx monorepo-aware)
2. Detects the running emulator
3. Installs Expo Go (or the dev client) on the emulator automatically
4. Opens the playground app

---

## Alternative Commands

| Command                                    | Description                                                        |
| ------------------------------------------ | ------------------------------------------------------------------ |
| `yarn native`                              | Start Expo with interactive picker (QR + emulator options)         |
| `yarn native:android`                      | Start and immediately open on Android emulator                     |
| `yarn native:clear`                        | Start Android with cleared Metro cache (fixes stale bundle issues) |
| `npx nx run native-playground:run-android` | Full native build (slower, no Expo Go)                             |

---

## Monorepo Hot Reload

Changes to `packages/ui-native` will automatically hot-reload in the emulator because `metro.config.js` uses `withNxMetro`, which watches all monorepo workspace packages.

If hot reload stops working, run `yarn native:clear` to reset the bundler cache.

---

## Troubleshooting

**Emulator not detected:**

```bash
adb devices   # should list the emulator
adb kill-server && adb start-server  # restart ADB if needed
```

**Metro can't resolve monorepo packages:**

```bash
yarn install  # re-link workspace packages
yarn native:clear  # clear bundler cache
```

**`ANDROID_HOME` not set:**

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools
```

Add these to your `~/.zshrc` for persistence.
