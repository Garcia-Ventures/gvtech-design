# Reference: CLI & Scripts

| Command                                   | Script                                                 | What it does                                                                                            |
| :---------------------------------------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| `bun run dev`                             | `bun --filter playground-web dev`                      | Web playground (Vite)                                                                                   |
| `bun run native*`                         | `nx run native-playground:start [--android] [--clear]` | Expo playground (CNG)                                                                                   |
| `bun run generate:component <N> [-c cat]` | `scripts/generate-component.ts`                        | Scaffold contract + web/native + docs + routes                                                          |
| `bun run build:registry`                  | `scripts/build-registry.ts`                            | Emit shadcn JSON (`public/registry`, `packages/*/registry.json`)                                        |
| `bun run generate:contract-tests`         | `scripts/generate-contract-tests.ts`                   | Parity tests from `ui-core` contracts                                                                   |
| `bun run sync-tokens`                     | `scripts/sync-tokens.ts`                               | `theme.css` + Flutter `gv_tokens.g.dart` from TS tokens                                                 |
| `bun run test` / `test:ci` / `test:watch` | `vitest`                                               | Unit tests (RTL + rn-web shims)                                                                         |
| `bun run lint` / `lint:fix`               | `eslint . --cache`                                     | Lint                                                                                                    |
| `bun run build`                           | `build:registry` + `VITE_LIB=true vite build`          | Library bundle                                                                                          |
| `bun run build:site`                      | flutter-web + playground-web build                     | Docs site                                                                                               |
| `bun run validate [--fix]`                | `scripts/validate.ts`                                  | Full gate: tokens → registry → contract-tests → prettier → eslint → typecheck → test → flutter → builds |

Nx layer (`nx.json`): task graph + cache, `@nx/expo` plugin targets (`start/build/prebuild/serve/export/submit/run-ios/run-android`), release group `@gv-tech/*` lock-step.
