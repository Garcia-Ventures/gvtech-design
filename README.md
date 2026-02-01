# GV Tech Design System

<p align="center">
  <img alt="GV Tech Design System" src="https://raw.githubusercontent.com/Garcia-Ventures/gvtech-design/main/assets/logo.png" width="180" />

  <br />
  <a href="https://app.netlify.com/sites/ge-design/deploys"><img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/c104d072-a3bb-4f8a-bd93-a7d5652ff75f/deploy-status" /></a>
  <a href="https://github.com/Garcia-Ventures/gvtech-design/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/Garcia-Ventures/gvtech-design/actions/workflows/ci.yml/badge.svg" /></a>
  <a href="https://www.npmjs.com/package/@gv-tech/design-system"><img alt="npm" src="https://img.shields.io/npm/dt/@gv-tech/design-system" /></a>
</p>

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B20755%2Fgithub.com%2FGarcia-Ventures%2Fgvtech-design.svg?type=shield&issueType=license)](https://app.fossa.com/projects/custom%2B20755%2Fgithub.com%2FGarcia-Ventures%2Fgvtech-design?ref=badge_shield&issueType=license)

A React component design system derived from the [Storybook Design System](https://github.com/storybookjs/design-system). This repository provides a lightweight, opinionated set of UI components and tooling used by Garcia Ventures projects.

---

**Table of Contents**

- [GV Tech Design System](#gv-tech-design-system)
  - [Demo](#demo)
  - [Install](#install)
  - [Usage](#usage)
  - [Development](#development)
  - [Testing](#testing)
  - [Releases \& Publishing](#releases--publishing)
  - [Contributing](#contributing)
  - [Roadmap](#roadmap)
  - [License](#license)

---

## Demo

Storybook static docs are available in this repository (`stories` + `src`): run locally with `yarn storybook` or view the compiled output if hosted.

## Install

The public package is published as `@gv-tech/design-system`:

```bash
# npm
npm install @gv-tech/design-system

# yarn
yarn add @gv-tech/design-system
```

## Usage

Example import:

```js
import { Button } from '@gv-tech/design-system';

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

Publishing uses OIDC via npm Trusted Publishers for `@gv-tech` publishing.

## Contributing

Please read the full guidelines in [CONTRIBUTING.md](.github/CONTRIBUTING.md) before contributing. Key points:

- Follow **Conventional Commits** to ensure release tooling produces accurate changelogs.
- Run `yarn lint` and `yarn test` before opening PRs.

## Roadmap

See issues and milestones for planned work.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

> For README best practices, we follow guidance from <https://www.makeareadme.com/>
