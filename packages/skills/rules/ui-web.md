# Web Component Rules (@gv-tech/ui-web)

Rules for downstream applications using `@gv-tech/ui-web`.

- **Package**: `@gv-tech/ui-web`
- **Tailwind**: Tailwind CSS 4.0 (`@source "node_modules/@gv-tech/ui-web/dist/**/*.mjs";`)
- **Theme Variables**: `:root` and `.dark` HSL CSS variables must be declared in `globals.css`.
- **Primitives**: Accessible unstyled components built on Radix UI (`@radix-ui/react-*`).
- **Icons**: Use `lucide-react`.
- **Class Merging**: Always use `cn()` for class merging.
