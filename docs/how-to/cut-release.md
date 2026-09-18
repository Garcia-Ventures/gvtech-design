# How-to: Cut a Release (Nx Release, Lock-step)

Task: publish a new version. Tool: **Nx Release** (release-please was retired — see ADR).

## Steps

1. Ensure `main` is green and commits follow **Conventional Commits** (drives SemVer + changelogs).
2. Dry-run locally:

```bash
npx nx release --dry-run
# uses nx.json: release.groups.packages (projects @gv-tech/*, lock-step, conventional-commits, git-tag resolver)
```

3. Trigger the **Release** GitHub Action (`workflow_dispatch`) on `main` — Sunday schedule also runs automatically.
4. Publishing uses npm Trusted Publishers (OIDC, `@gv-tech` scope, `publishConfig.provenance`). No long-lived `NPM_TOKEN` needed.
5. Verify: npm `@gv-tech/design-system` version bumped, per-package changelogs updated, workspace GitHub release created (`changelog.workspaceChangelog.createRelease: github`).

## Conventions

- Lock-step: all `@gv-tech/*` packages share one version; internal `workspace:*` deps sync automatically via the Nx project graph.
- Release config lives in `nx.json` + per-package `project.json` (`nx-release-publish` target) — no `.release-please-manifest.json`.
- `releaseTagPattern: v{version}` (single tag per release).

Trouble? Check: non-conventional commit messages (wrong bump), tag conflicts (`currentVersionResolver: git-tag`), or Action permissions for OIDC/tags.
