# ADR: Release Orchestration — Release-Please vs. Nx Release

**Date:** 2026-02-19  
**Status:** Evaluation (Deferred to Post-Phase 1)  
**Author(s):** Garcia Ventures Engineering

## Context

As the GV Tech Design System transitions to a monorepo architecture with multiple packages (`@gv-tech/ui-web`, `@gv-tech/ui-native`, `@gv-tech/ui-core`, `@gv-tech/design-tokens`), we must choose an orchestration tool to handle versioning, changelog generation, and npm publishing.

Currently, the project uses **release-please**, which was inherited from the single-package architecture.

## Options

### 1. Release-Please (Status Quo)

A "Pull Request-first" tool by Google that parses Conventional Commits to maintain an automated release PR.

- **Pros:**
  - **Low Friction:** Already integrated and working.
  - **Visible Workflow:** Releases are "staged" in a visible GitHub PR.
  - **Independent Versions:** Natively supports different versions for different packages.
- **Cons:**
  - **Workspace Unaware:** Does not understand internal package dependencies. Bumping `ui-core` does not automatically update the version of `ui-core` listed in `ui-native/package.json`.
  - **GitHub Locked:** Deeply tied to GitHub Actions and PR events.
  - **Complex Manifests:** Multi-package configuration in `release-please-config.json` can become verbose.

### 2. Nx Release (Proposed)

A "Task-first" tool built into the Nx ecosystem that uses the project graph to orchestrate releases.

- **Pros:**
  - **Dependency Sync:** Automatically updates internal package versions when their dependencies change.
  - **Lock-step Support:** Simplifies keeping all design system packages on the same version (e.g., all 3.2.0), which is often preferred for design systems.
  - **Local Dry-Runs:** Command-line testing (`nx release --dry-run`) allows verification without pushing to Git.
  - **Task Graph Integration:** Leverages the Nx cache and task graph for builds during the release process.
- **Cons:**
  - **Active vs. Passive:** Requires triggering a command (e.g., via `workflow_dispatch` or on merge) rather than automatically maintaining a PR.
  - **Learning Curve:** New configuration format (`nx.json` additions) compared to the familiar `release-please` config.

## Comparison Table

| Feature                | Release-Please          | Nx Release                          |
| :--------------------- | :---------------------- | :---------------------------------- |
| **Control Point**      | GitHub Pull Request     | CLI Command                         |
| **Monorepo Awareness** | Low (path-based)        | High (graph-based)                  |
| **Dependency Sync**    | Manual / External       | Automatic                           |
| **Local Testing**      | Requires push/PR        | Local Dry-Run                       |
| **Versioning Goal**    | Independent per package | Flexible (Lock-step or Independent) |

## Decision

**We will continue to use Release-Please through the completion of Phase 1.**

The transition to a multi-package monorepo is already a significant architectural shift. Introducing a new release orchestrator simultaneously increases the risk of delivery delays. Once Phase 1 is stable and the sub-packages are successfully publishing, we will evaluate a migration to **Nx Release** to benefit from **Lock-step versioning** and **automatic dependency synchronization**.

## Consequences

- **Short-term:** Developers must manually ensure that internal `workspace:*` dependencies are correctly handled (or use Yarn's workspace protocol which handles this during local development).
- **Long-term:** If we choose to move to Lock-step versioning (standardizing all packages on one version), Nx Release will significantly reduce the maintenance overhead.
- **Maintenance:** The `release-please-config.json` and `.release-please-manifest.json` files must be kept in sync as new packages are added.

## References

- [Nx Release Documentation](https://nx.dev/features/manage-releases)
- [Release-Please Monorepo Guide](https://github.com/googleapis/release-please/blob/main/docs/manifest-releaser.md)
- [update-plan.md](./update-plan.md)
