# Contributing Guidelines

This project uses **Vite** for development and builds and **Storybook** for component documentation.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the Vite development server for local development.<br />
Open [http://localhost:5173](http://localhost:5173) (or the port Vite shows) to view it in the browser.

The page will reload if you make edits, and HMR will update components instantly. You will also see any lint errors in the console.

### `yarn test`

Runs the test suite using **Vitest** (configured in `vitest.config.ts`). For interactive watch mode run `yarn test` locally; for CI the project uses `yarn test:ci`.

See the Vitest docs for more information: https://vitest.dev/guide/.

### `yarn build`

Builds the library or production bundle using Vite (`yarn build`).

For Storybook docs and component builds, run `yarn build-storybook` to generate Storybook static output.

### Build configuration

This project uses Vite for development and builds. If you need to customize build behavior, edit `vite.config.ts` or add Vite plugins. This project does not use `react-scripts` or `eject`.

## Learn More

- Vite docs: https://vitejs.dev/ (build, config and plugins)
- Vitest docs: https://vitest.dev/ (testing guide)
- Storybook docs: https://storybook.js.org/docs/react/get-started/introduction (component docs and addons)

To customize build behavior edit `vite.config.ts` or add Vite plugins. For component docs and testing examples check the Storybook setup in `.storybook` and `src` stories.
