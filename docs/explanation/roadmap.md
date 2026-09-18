# Explanation: Roadmap — Bulletproof DX

Vision: every component synchronized across platforms, docs never stale, new features frictionless via automation.

## 1. Automation & Tooling

- [x] Component scaffolding CLI (`generate:component`)
- [x] Automated registry updates (`build:registry`)
- [ ] Type-safe docs (extract examples/props from source, no hardcoded strings)

## 2. Platform Parity (zero-stub goal)

- [x] Form + validation (native `Form` + react-hook-form)
- [x] Complex navigation (`Breadcrumb`, `Pagination`, `NavigationMenu` native)
- [x] Advanced inputs (`Calendar`, `Combobox`, `Slider` native where primitive exists)
- [ ] Charts (evaluate `victory-native` vs recharts shims)

## 3. Contract & QA

- [x] Strict contract linting (`ui-web`/`ui-native` vs `ui-core`)
- [ ] Mobile a11y testing (native interaction + audits)
- [ ] Visual regression (web + native screenshot drift)

## 4. Docs & Discovery

- [ ] Playground search over props/variants
- [ ] Dark-mode previews for all components
- [ ] Native interaction previews (Expo Snack / Appetize embed, speculative)

## 5. Docs Parity

- [x] Native doc pages updated from shims to real impls
- [x] Registry continuously audited

## Status log

| Date       | Milestone                                                    | Status    |
| :--------- | :----------------------------------------------------------- | :-------- |
| 2026-06-08 | Initial roadmap                                              | Started   |
| 2026-06-08 | Scaffolding CLI / parity audit / docs parity / contract lint | Completed |

Source history: [`../archive/bulletproof-dx-plan-2026-06-08.md`](../archive/bulletproof-dx-plan-2026-06-08.md). Parity data: [`../archive/universal-implementation-2026-03-05.md`](../archive/universal-implementation-2026-03-05.md).
