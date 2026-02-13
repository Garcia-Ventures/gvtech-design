# Releasing & Publishing 🔁

This document explains how releases and publishing are handled for this repository and how to test or modify the release flow.

## Release Please (automated Release PRs)

**Overview**

- We use `googleapis/release-please-action` to create Release PRs and tags based on Conventional Commits.

**One-time setup**

1. Create a **Personal Access Token (PAT)** with `repo` (write) permissions and a short expiration.
2. Add the PAT as a repository secret named `RELEASE_PLEASE_TOKEN` (Repository → Settings → Secrets and variables → Actions → New repository secret).
3. Confirm branch protection rules allow the PAT or the actor to create tags/releases, or allow the bot account to bypass restrictions where necessary.

**Testing**

- Trigger the action manually: GitHub → Actions → _Release Please_ → _Run workflow_ → choose `main` and run.
- A Release PR (usually titled `chore(release): release X.Y.Z`) should be created. Review the changelog and changes in the PR.
- Merge the PR into `main` to create a tag/release. If using a PAT (not `GITHUB_TOKEN`), downstream workflows triggered by `release` events should run normally.

**Notes**

- Make sure your commits follow **Conventional Commits** to get meaningful changelogs and correct SemVer bumps.
- If release PRs are not being created, confirm that the `RELEASE_PLEASE_TOKEN` is present and has proper repository permissions.

## Publishing to npm (current process)

- The CI publish step currently expects `NPM_TOKEN` as a repository secret (Stored in repository secrets as `NPM_TOKEN`).
- Publishing is currently automated via GitHub Actions using the `@gv-tech` scope.

## Troubleshooting & Tips

- **Release PR not generated**: Confirm commits use Conventional Commit messages, check action logs, and ensure the PAT is set.
- **Downstream workflows not running on release**: Ensure releases/tags are created with a PAT (not `GITHUB_TOKEN`), otherwise they won't trigger other workflows.
- **Scoped package publishing**: If you plan to publish to a scope (e.g., `@gvtech`), update `package.json.name` and set `publishConfig.access` to `public` for public scoped packages.
