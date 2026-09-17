# How-to: Troubleshoot Common Issues

## Playground won't start

- `bun install` first (Bun workspaces, not npm). Node >= 20 required.
- Web blank? Check `packages/design-tokens/src/theme.css` exists — if not, `bun run sync-tokens`.
- Native QR fails? `bun run native:clear` (clears Metro + Expo CNG cache).

## Component missing in playground

- Confirm exports in `packages/ui-*/src/index.ts`, `apps/playground-web/src/pages/*/index.ts`, route in `routes/doc-routes.tsx`, item in `config/docs.ts` — or just re-run `bun run generate:component <Name>`.
- Then `bun run build:registry`.

## Styling looks wrong on native

- See [Debug NativeWind](./debug-nativewind.md). Usual cause: web-only prop (`onClick`, `htmlFor`) or hardcoded color instead of token.

## CI: lint / type / test failures

- Run `bun run validate:fix` locally (prettier + eslint --fix), then `bun run validate`.
- Contract drift: web/native prop doesn't match `ui-core` — run `bun run generate:contract-tests` and align to the contract.
- Flutter step fails but you changed no Dart? `sync-tokens.ts` also emits `gv_tokens.g.dart` — commit it if tokens changed.

## Release PR / publish issues

- See [Cut a Release](./cut-release.md). Most common: non-Conventional Commit message → wrong/no bump.
