---
name: native-playground
description: Run the Expo native playground on an Android emulator or iOS simulator.
---

# Native playground

`apps/native-playground` is Expo CNG. There is no committed `ios/` or `android/` directory. Start it from the repo root after `bun install`.

Android needs `ANDROID_HOME` (typically `$HOME/Library/Android/sdk`) and `emulator` plus `platform-tools` on `PATH`. iOS needs Xcode simulators.

## Start

Boot a device first (`emulator -avd <name>` or `open -a Simulator`), then:

| Command                                     | What it runs                                   |
| ------------------------------------------- | ---------------------------------------------- |
| `bun run native`                            | `native-playground:start` with the Expo picker |
| `bun run native:android`                    | start and open on Android                      |
| `bun run native:clear`                      | Android start with a cleared Metro cache       |
| `bunx nx run native-playground:run-android` | full native build                              |

`apps/native-playground/metro.config.js` wraps Metro with `withNxMetro`, so edits in `packages/ui-native` and `packages/design-tokens` hot-reload. If reload stalls, run `bun run native:clear`.

## When the device is missing

```bash
adb devices
adb kill-server && adb start-server
```

If Metro cannot resolve workspace packages, run `bun install` and then `bun run native:clear`.
