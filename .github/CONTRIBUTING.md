# Contributing Guidelines

This project uses **Vite** for development, builds, and as a component playground.

## Available Scripts

In the project directory, you can run:

### `bun run dev`

Runs the Vite development server for local development.

Local: [http://localhost:5173](http://localhost:5173)

Live: [https://gvtech-design.pages.dev/](https://gvtech-design.pages.dev/)

The page will reload if you make edits, and HMR will update components instantly. You will also see any lint errors in the console.

### `bun run test`

Runs the test suite using **Vitest** (configured in `vitest.config.ts`). For interactive watch mode run `bun run test` locally; for CI the project uses `bun run test:ci`.

See the Vitest docs for more information: <https://vitest.dev/guide/>.

### `bun run build`

Builds the library and the component registry using Vite.

### `bun run build:site`

Builds the playground site as a production-ready application.

### Build configuration

This project uses Vite for development and builds. If you need to customize build behavior, edit `vite.config.ts` or add Vite plugins. This project does not use `react-scripts` or `eject`.

## Learn More

- Vite docs: <https://vitejs.dev/> (build, config and plugins)
- Vitest docs: <https://vitest.dev/> (testing guide)

To customize build behavior, edit `vite.config.ts` or add Vite plugins. For component details and testing examples, check the `src` directory.
