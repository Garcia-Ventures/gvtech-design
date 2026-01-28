# Migration: Rename package to @gvtech/\* (scope migration) 🚚

This document outlines recommended steps to rename and publish the package under the `@gvtech` scope (example: `@gvtech/ui`). Follow the checklist to reduce downtime and prevent publish/pipeline surprises.

## Summary

- Current package: `ge-design-system` (published previously on npm)
- Goal: Publish as `@gvtech/<name>` (e.g., `@gvtech/ui` or `@gvtech/design`) and provide migration guidance & deprecate old package.

## Preconditions

- You or your org must own the `@gvtech` scope on npm (create an org if needed).
- Decide on final package name (e.g., `@gvtech/ui`) and confirm no conflicts on npm.
- Decide whether to reuse versioning or start at a specific semver for the new package.

## Checklist & Steps

1. **Choose final package name & confirm npm org**
   - Confirm that `@gvtech` org exists on npm and that you have admin access to publish packages under it.

2. **Prepare repository updates**
   - Update `package.json`:
     - `"name": "@gvtech/ui"` (replace with agreed name)
     - Optionally add `"publishConfig": { "access": "public" }` if you want public scoped package.
   - Update docs, README, and badges to reference the new package name and npm URL.
   - Update any internal docs/imports that reference the old package name.

3. **Prepare CI / Tokens**
   - Create or generate an **Automation token** on npm (Profile → Access Tokens → Generate New Token → type: Automation or Read & write) and add it as `NPM_TOKEN` in GitHub Secrets.
   - If planning to use OIDC, set up the npm registry trust (if available) and keep `NPM_TOKEN` as fallback until OIDC works.
   - Update release workflow (`.github/workflows/release-please.yml`) to include `package-name: @gvtech/ui` or add a manifest if you will support multiple packages.

4. **Dry-run & tests**
   - Run `npm publish --dry-run` locally to validate package contents.
   - Publish to a `next` tag first (e.g., `npm publish --tag next --access public`) to smoke test without affecting `latest`.

5. **Publish new package**
   - Create a branch `feat/rename-to-gvtech` with changes and open a PR. Ensure CI passes.
   - Merge and allow release process to publish the package (via release-please or manual publish step).
   - Verify the package appears at `https://www.npmjs.com/package/@gvtech/ui`.

6. **Deprecate the old package**
   - Deprecate old package to guide users to the new package:
     - `npm deprecate ge-design-system@"*" "This package has moved to @gvtech/ui. Please migrate: npm install @gvtech/ui"`
   - Update the old package README to point to the new package if you prefer.

7. **Communicate & Migration support**
   - Add a migration note to README and a `MIGRATION.md` (or link to this doc).
   - Consider a blog/Slack/Email announcement for major consumers.

8. **Post-migration cleanup**
   - Optionally remove legacy publish access or tokens from the old package and update dependency graphs.
   - Update `release-please` configuration to target the new package-name or add a manifest for per-package releases.

## Example `package.json` changes

```json
{
  "name": "@gvtech/ui",
  "version": "0.0.0",
  "publishConfig": {
    "access": "public"
  }
}
```

## Rollback plan

- If a publish fails or has issues, unpublish within the npm grace window (if applicable) or publish a new patch that fixes the issue and continue to support the old package until users migrate.

## Notes & References

- npm Access Tokens: <https://docs.npmjs.com/creating-and-viewing-access-tokens>
- GitHub OIDC for npm: <https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages>

---

If you'd like, I can draft the exact PR content (diff) for the `package.json` rename and a staged publish workflow to publish to `--tag next` first. Let me know and I will prepare the patch.
