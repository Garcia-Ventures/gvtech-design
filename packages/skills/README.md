# @gv-tech/skills

Skills, rules, and CLI installer for integrating the GV Tech Design System (`@gv-tech/ui-web` & `@gv-tech/ui-native`) into downstream applications.

## Downstream Usage

You can use `npx` to automatically install skills and rules into your repository:

```bash
# Initialize all design system skills and rules in your project
npx @gv-tech/skills init

# Or install specific skills
npx @gv-tech/skills add setup-ui-native
npx @gv-tech/skills add use-ui-web
```

### Supported AI Agent Ecosystems

- **Antigravity / AGY / `.agents`**: Automatically installs skills to `.agents/skills/` and rules to `.agents/rules/`.
- **Claude / `.claude`**: Installs skills to `.claude/skills/`.
- **Cursor / `.cursor`**: Installs rules to `.cursor/rules/`.

## Bundled Skills

- `setup-ui-web`: Setup guide for `@gv-tech/ui-web` and Tailwind CSS 4.0.
- `setup-ui-native`: Complete 6-step setup guide for `@gv-tech/ui-native`, NativeWind v5 preview, `lightningcss` override, Metro, and TypeScript.
- `use-ui-web`: Component usage guidelines and Radix UI patterns for Web.
- `use-ui-native`: Component usage guidelines, `flex-1 bg-background` layout rules, and ThemeProvider practices for React Native.

## License

MIT
