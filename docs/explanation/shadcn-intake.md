# Explanation: Shadcn intake

Why `ui-web` vendors shadcn, what stays ours, and why some upstream shapes stay in the lint config.

Read this page, then the procedure, then the checklist:

1. This page.
2. [Intake a shadcn component](../how-to/intake-shadcn.md).
3. [What an overwrite must keep](../reference/shadcn-preserve.md).

## Two owners

shadcn is the behavior layer for web. Radix (and the components shadcn builds on it) owns focus, keyboard, and the slot APIs. We own the design-system API and the brand.

| Owner   | Lives in                                                         | Examples                                                                    |
| :------ | :--------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| GV Tech | `packages/ui-core/src/contracts/`, `packages/design-tokens/src/` | Prop, variant, and size names. Semantic colors, type, space, radius, shadow |
| GV Tech | `packages/ui-native`, playground, registry, divergence registry  | The same contract on React Native. Docs. The public shadcn JSON             |
| shadcn  | `packages/ui-web/src` after `shadcn add`                         | Markup, Radix composition, slot callback parameter names                    |

A component is done when the contract exists, the web file implements that contract with semantic token classes, and native either implements it or has a parity-matrix row that says why it does not.

`bun run shadcn:update` runs `shadcn add --all --overwrite --yes` inside `packages/ui-web`. That command is how fixes and new upstream components enter the repo. It is also how a contract import, a token class, or a GV-only file can leave. The how-to is the gate in front of the commit.

## Slot callbacks keep their names

Calendar passes components to DayPicker:

```tsx
components={{
  Root: ({ className, rootRef, ...props }) => { /* ... */ },
  Chevron: ({ className, orientation, ...props }) => { /* ... */ },
}}
```

`className` and `props` are the slot's own props. They shadow the outer `Calendar` bindings. Toaster, Sidebar, Carousel, Chart, and `use-toast` do the same kind of thing: a callback argument reuses the outer name (`props`, `open`, `api`, `config`, `toast`).

Renaming those parameters, or hoisting the DayPicker slots to clear a warning, lasts until the next overwrite. The overwrite writes the upstream names again, and the warning returns. The names also document which values belong to the slot.

The lint config carries the exception, outside the component files:

- `react/no-unstable-nested-components` allows a component created as a prop value (`allowAsProps`). DayPicker's `components` prop is that case. A component created during render and used as `<Component />` in the same function still warns.
- `eslint/no-shadow` is off for the seven files in [the preserve reference](../reference/shadcn-preserve.md). Those files can hide a new, accidental shadow. Read new logic in them for a reused name. A new upstream file that warns the same way joins that list in the intake pull request.

`no-console`, iframe sandbox, and the two extra effect dependencies are a separate decision. This intake rule does not silence them.

## What a safe update changes

Take an upstream fix when it changes behavior we want: a keyboard bug, an accessibility attribute, a Radix API move. Lift any new prop, variant, or size into `ui-core` in the same pull request, then implement or record it on native.

Leave the brand on tokens. A new raw palette class in the diff (`amber-*`, `blue-*`, a hex) is a review item. Semantic classes (`bg-primary`, `text-foreground`, `border-border`) stay.

Native does not come from this command. `packages/ui-native` is RN Reusables plus our contract. After the web diff is accepted, port the contract change or add a divergence-registry row.
