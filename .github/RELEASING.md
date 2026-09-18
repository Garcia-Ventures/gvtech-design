# Releasing & Publishing 🔁

> We use **Nx Release** (lock-step) — not release-please. Legacy notes are archived at [`../docs/archive/RELEASING-release-please.md`](../docs/archive/RELEASING-release-please.md).

How to release: [`../docs/how-to/cut-release.md`](../docs/how-to/cut-release.md). Why Nx Release: [`../docs/explanation/adrs/nx-release.md`](../docs/explanation/adrs/nx-release.md).

Quick version:

1. Conventional Commits on `main`, green CI.
2. `npx nx release --dry-run` locally.
3. Trigger the **Release** GitHub Action (`workflow_dispatch`) — also runs Sundays.
4. Publishing via npm Trusted Publishers (OIDC, `@gv-tech` scope).
