# How-to: Run Tests, Lint, and Contract Checks

Task: validate a PR before opening it.

## Fast loop (per package, cached by Nx)

```bash
bun run test # vitest --passWithNoTests (use test:watch locally)
bun run lint # eslint . --cache
bun run build:registry
bun run generate:contract-tests
```

## Full gate (what CI runs)

```bash
bun run validate     # sync-tokens → registry → contract-tests → prettier → eslint → typecheck → vitest → flutter analyze/test → builds
bun run validate:fix # same, with --fix for prettier/eslint
bun run test:ci      # CI=true vitest --run --reporter=dot
```

Low-resource machines (≤4 CPU / ≤8GB): `validate.ts` auto-switches to sequential, disables Nx daemon, caps heap. Force with `bun run validate -- --sequential`; force parallel with `--parallel`.

## Contract parity

- `ui-web` and `ui-native` must import types from `@gv-tech/ui-core` — never redefine props locally.
- After editing a contract, run `generate:contract-tests` + `build:registry`, then `test` for both platforms.
- Native tests run in Vitest via `react-native-web` shims (per Expo ADR) — no device needed.

Required by `.github/CONTRIBUTING.md`: Conventional Commits + green `lint` + `test`.
