# Tutorial: Local Setup

> Learning-oriented. Follow start to finish — you will end with web + native playgrounds running.

## Prerequisites

- Node >= 20, `bun@1.2.2` (`package.json:packageManager`), Xcode/Android Studio only if running on-device (Expo Go works otherwise).
- Clone: `git clone https://github.com/Garcia-Ventures/gvtech-design.git && cd gvtech-design`

## 1. Install

```bash
bun install
```

This installs the Nx workspace (`nx.json`), Bun workspaces (`packages/*`, `apps/*`), and Expo SDK 56 deps.

## 2. Run the web playground

```bash
bun run dev
# → bun --filter playground-web dev → http://localhost:5173
# Live reference: https://design.gventureshq.com/
```

You should see the component docs site with Web + Native tabs (routes in `apps/playground-web/src/routes/doc-routes.tsx`).

## 3. Run the native playground (Expo)

```bash
bun run native
# → nx run native-playground:start (Expo + CNG, no /ios,/android dirs)

# On-device variants:
bun run native:android
bun run native:clear # --android --clear cache
```

Scan the QR code with Expo Go / dev build. See [Expo ADR](../explanation/adrs/expo-playground.md).

## 4. Verify your setup

```bash
bun run validate --help # full pipeline: sync-tokens → build:registry → contract-tests → lint → typecheck → test → build
bun run test            # vitest --passWithNoTests (watch locally)
bun run lint
```

If `validate` passes through "Sync Tokens" and "Build Registry", you are ready.

## Next

- [Use in Your App](./02-first-app-usage.md) if you consume the library.
- [Create a Component](./03-create-component.md) if you contribute components.
- Stuck? See [Troubleshoot](../how-to/troubleshoot-common.md).
