# ADR: Release Orchestration — Release-Please vs. Nx Release

**Date:** 2026-02-22  
**Status:** Adopted  
**Author(s):** Garcia Ventures Engineering

## Context

As the GV Tech Design System transitions to a monorepo architecture with multiple packages (`@gv-tech/ui-web`, `@gv-tech/ui-native`, `@gv-tech/ui-core`, `@gv-tech/design-tokens`), we must choose an orchestration tool to handle versioning, changelog generation, and npm publishing.

Previously, the project used **release-please**, but we have now fully migrated to **Nx Release**.

## Options

### 1. Release-Please (Legacy)

A "Pull Request-first" tool by Google that parses Conventional Commits to maintain an automated release PR.

- **Pros:**
  - **Low Friction:** Worked well for single-package builds.
  - **Visible Workflow:** Releases are "staged" in a visible GitHub PR.
- **Cons:**
  - **Workspace Unaware:** Could not automatically sync internal `workspace:*` dependencies.
  - **Config Overhead:** Manually maintaining manifests for 4+ packages became error-prone.

### 2. Nx Release (Selected)

A "Task-first" tool built into the Nx ecosystem that uses the project graph to orchestrate releases.

- **Pros:**
  - **Dependency Sync:** Automatically updates internal package versions when their dependencies change.
  - **Lock-step Support:** We use lock-step versioning to keep all design system packages on the same version, ensuring consistency for consumers.
  - **Local Dry-Runs:** Command-line testing (`nx release --dry-run`) allows verification without pushing to Git.
  - **Task Graph Integration:** Leverages the Nx cache and task graph for builds during the release process.
- **Cons:**
  - **Active vs. Passive:** Requires triggering a command (via `workflow_dispatch` in our Release CI) rather than purely automated PR creation.

## Comparison Table

| Feature                | Release-Please          | Nx Release                          |
| :--------------------- | :---------------------- | :---------------------------------- |
| **Control Point**      | GitHub Pull Request     | CLI Command                         |
| **Monorepo Awareness** | Low (path-based)        | High (graph-based)                  |
| **Dependency Sync**    | Manual / External       | Automatic                           |
| **Local Testing**      | Requires push/PR        | Local Dry-Run                       |
| **Versioning Goal**    | Independent per package | Flexible (Lock-step or Independent) |

## Decision

**Adopt Nx Release as the primary orchestration tool for the library.**

We have completed the migration from `release-please` to `nx release`. This choice solves the critical issue of synchronizing internal package versions (e.g., ensuring `ui-web` always references the correct version of `ui-core`) and allows us to maintain a "Lock-step" versioning strategy for the entire design system suite.

## Consequences

- **Short-term:** Developers now use `nx release` (via the "Release" GitHub Action) to publish new versions.
- **Long-term:** Internal dependency management is fully automated. Version bumps in `ui-core` automatically propagate through the project graph.
- **Maintenance:** Release logic is centralized in `nx.json` and `project.json` files, reducing the need for sidecar configuration files like `.release-please-manifest.json`.

## References

- [Nx Release Documentation](https://nx.dev/features/manage-releases)
- [Release-Please Monorepo Guide](https://github.com/googleapis/release-please/blob/main/docs/manifest-releaser.md)
- [update-plan.md](./update-plan.md)
