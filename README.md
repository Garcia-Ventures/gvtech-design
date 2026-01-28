# GE Design System

<p align="center">
  <img alt="GE Design System" src="https://raw.githubusercontent.com/Garcia-Enterprise/ge-design/main/assets/logo.png" width="180" />

  <br />
  <a href="https://app.netlify.com/sites/ge-design/deploys"><img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/c104d072-a3bb-4f8a-bd93-a7d5652ff75f/deploy-status" /></a>
  <a href="https://github.com/Garcia-Enterprise/ge-design/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/Garcia-Enterprise/ge-design/actions/workflows/ci.yml/badge.svg" /></a>
  <a href="https://app.fossa.com/projects/custom%2B20755%2Fgit%40github.com%3AGarcia-Enterprise%2Fge-design.git?ref=badge_shield"><img alt="FOSSA" src="https://app.fossa.com/api/projects/custom%2B20755%2Fgit%40github.com%3AGarcia-Enterprise%2Fge-design.git.svg?type=shield" /></a>
  <a href="https://www.npmjs.com/package/ge-design-system"><img alt="npm" src="https://img.shields.io/npm/dt/ge-design-system" /></a>
</p>

A React component design system derived from the [Storybook Design System](https://github.com/storybookjs/design-system). This repository provides a lightweight, opinionated set of UI components and tooling used by Garcia Ventures projects.

---

**Table of Contents**

- [GE Design System](#ge-design-system)
  - [Demo](#demo)
  - [Install](#install)
  - [Usage](#usage)
  - [Development](#development)
  - [Testing](#testing)
  - [Releases \& Publishing](#releases--publishing)
  - [Contributing](#contributing)
  - [Migration to @gvtech scope](#migration-to-gvtech-scope)
  - [Roadmap](#roadmap)
  - [License](#license)

---

## Demo

Storybook static docs are available in this repository (`stories` + `src`): run locally with `yarn storybook` or view the compiled output if hosted.

## Install

For now the public package is published as `ge-design-system`:

```bash
# npm
npm install ge-design-system

# yarn
yarn add ge-design-system
```

> Note: We are planning a scoped rename to `@gvtech/<name>` (see [MIGRATE_TO_GVTECH_SCOPE.md](docs/MIGRATE_TO_GVTECH_SCOPE.md)).

## Usage

Example import:

```js
import { Button } from 'ge-design-system';

function App() {
  return <Button>Click me</Button>;
}
```

## Development

Start a local dev server:

```bash
yarn dev
```

Available scripts (selected):

- `yarn dev` — start Vite dev server
- `yarn build` — build the package
- `yarn storybook` — run Storybook locally
- `yarn test` — run tests locally
- `yarn test:ci` — run tests in CI
- `yarn lint` — run eslint

For full commands and details see `package.json`.

## Testing

Unit tests use Vitest and React Testing Library.

- Run tests locally: `yarn test`
- CI runs: `yarn test:ci`

## Releases & Publishing

We use [`googleapis/release-please-action`](https://github.com/googleapis/release-please-action) to create release PRs and tags. For details on how to set it up and test releases, see [.github/RELEASING.md](.github/RELEASING.md).

Publishing currently uses an `NPM_TOKEN` secret; we will later migrate to OIDC and scoped automation tokens for `@gvtech` publishing.

## Contributing

Please read the full guidelines in [CONTRIBUTING.md](.github/CONTRIBUTING.md) before contributing. Key points:

- Follow **Conventional Commits** to ensure release tooling produces accurate changelogs.
- Run `yarn lint` and `yarn test` before opening PRs.

## Migration to @gvtech scope

See the migration plan and checklist: [docs/MIGRATE_TO_GVTECH_SCOPE.md](docs/MIGRATE_TO_GVTECH_SCOPE.md).

## Roadmap

See issues and milestones for planned work.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

> For README best practices, we follow guidance from <https://www.makeareadme.com/>
