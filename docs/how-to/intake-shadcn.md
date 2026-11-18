# How-to: Intake a shadcn component

Task: bring in a new shadcn component, or an upstream fix, without dropping the contract, the tokens, or a GV-only file.

The reason for each restore rule is in [Shadcn intake](../explanation/shadcn-intake.md). The line-by-line checklist is [What an overwrite must keep](../reference/shadcn-preserve.md).

Work on a branch. Read the diff before committing. A clean `validate` run does not replace that read: the CLI can remove a contract import and still leave a file that typechecks against a wider props type.

## Choose the command

Refresh one component that is already vendored, or add one by its registry name. From `packages/ui-web`:

```bash
bunx shadcn@latest add <name> --overwrite --yes
```

Refresh every vendored component. From the repo root:

```bash
bun run shadcn:update
```

That script is `shadcn add --all --overwrite --yes` inside `packages/ui-web`. Prefer the single-component command unless you intend to review the whole catalog.

`packages/ui-native` is out of this command. Copying it with the shadcn CLI does not configure Metro or tokens. Native setup stays [Set up React Native](./setup-react-native.md).

## Review the diff

1. Open the full `packages/ui-web` diff. Restore anything the checklist says must remain. If the command deleted a file, restore that file from git.
2. For a component we already ship, put new props, variants, and sizes in `packages/ui-core/src/contracts/<kebab>.ts` as `<Name>BaseProps`. Keep HTML and React element props on the web component. Export the contract from `packages/ui-core/src/index.ts`.
3. Type the web component as the element props plus `<Name>BaseProps`. Keep `import { cn } from 'cn'` and sibling imports as `@/./<name>`.
4. Implement the same contract in `packages/ui-native`, or add a row to [Parity Matrix](../reference/parity-matrix.md) and [Divergence Registry](../reference/divergence-registry.md) that says why native does not export it. Chart, Command, Resizable, and Sonner stay web-only until a product asks. Attachment, Bubble, Marker, Message, Message Scroller, and Questionnaire stay unexported until the native behavior is real.
5. Add playground pages when the component is new. Register them in `apps/playground-web/src/routes/doc-routes.tsx` and `src/config/docs.ts`. `bun run generate:component <Name>` scaffolds the contract, both implementations, and the pages when you want a stub first. Skip files the scaffold would overwrite if the shadcn file is already the one you want.
6. When the upstream file warns on a slot callback parameter (`className`, `props`, or the same shape), add that file to the `eslint/no-shadow` override in `oxlint.config.mts` and to the preserve reference. Leave the parameter name as upstream wrote it.

## Gate

```bash
bun run generate:contract-tests
bun run validate
```

When the public component set changed, also run `bun run build:registry` and update [Component Registry](../reference/component-registry.md), the parity matrix, and the divergence registry together. The registry how-to is [Update the component registry](./update-registry.md).

Commit with a Conventional Commit. The body should say which upstream component moved, and which checklist rows you restored.
