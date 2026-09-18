# Archive

Superseded docs live here. Do not link to these from new docs — link to their replacements instead.

Policy:

- Each file keeps its original content plus a `> [!CAUTION]` banner at the top with date + replacement link.
- Keep via `git mv` so history is preserved.
- Delete after 2 major releases or when references drop to zero (check with `rg "archive/"`).

| Archived file                             | Superseded by                                                                                                   | Why archived                                           |
| :---------------------------------------- | :-------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| `universal-implementation-2026-03-05.md`  | `../reference/parity-matrix.md` + `../reference/divergence-registry.md` + `../tutorials/03-create-component.md` | Mixed reference + how-to; split per Diataxis           |
| `native-complex-components-2026-06-08.md` | `../reference/parity-matrix.md`                                                                                 | Tracker contradicted registry (Calendar ✅ vs stubbed) |
| `bulletproof-dx-plan-2026-06-08.md`       | `../explanation/roadmap.md`                                                                                     | Roadmap curated from plan; checkboxes moved to issues  |
| `nativewind-v5-note.md`                   | `../how-to/debug-nativewind.md`                                                                                 | 11-line fragment; folded into troubleshooting          |
| `RELEASING-release-please.md`             | `../how-to/cut-release.md` + `../explanation/adrs/nx-release.md`                                                | Described release-please; repo uses Nx Release         |
| `CONTRIBUTING-vite-only.md`               | `../tutorials/01-local-setup.md` + `../how-to/run-tests-lint-contracts.md`                                      | Described Vite-only flow; repo is Nx + Bun monorepo    |
