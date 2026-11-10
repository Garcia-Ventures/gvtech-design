# @gv-tech/skills

One skill for using the GV Tech Design System (`@gv-tech/ui-web` and `@gv-tech/ui-native`) in an application.

## Usage

```bash
npx @gv-tech/skills init
npx @gv-tech/skills add gvtech
npx @gv-tech/skills list
```

`init` and `add` write to `.agents/skills/gvtech/`. That directory is the shared skills location for Claude, Cursor, Codex, Copilot, Gemini, and OpenCode.

These older names install the same skill: `setup-ui-web`, `setup-ui-native`, `use-ui-web`, `use-ui-native`.

## Skill

`gvtech` covers web setup (Tailwind v4, `@gv-tech/design-tokens/theme.css`, `ThemeProvider`), native setup (NativeWind v5, the `lightningcss` pin, Metro, Babel, TypeScript), and day-to-day component usage for both platforms.

## License

MIT
