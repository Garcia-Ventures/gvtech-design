# GV Tech Design System

<p align="center">
  <img alt="GV Tech Design System" src="apps/playground-web/public/logo512.png" width="180" />
</p>

[![npm version](https://img.shields.io/npm/v/@gv-tech/design-system?style=flat-square&color=CB3837)](https://www.npmjs.com/package/@gv-tech/design-system)
[![npm downloads](https://img.shields.io/npm/dt/@gv-tech/design-system?style=flat-square&color=50abff)](https://www.npmjs.com/package/@gv-tech/design-system)
[![npm downloads monthly](https://img.shields.io/npm/dm/@gv-tech/design-system?style=flat-square&color=50abff)](https://www.npmjs.com/package/@gv-tech/design-system)
[![CI Status](https://github.com/Garcia-Ventures/gvtech-design/actions/workflows/ci.yml/badge.svg)](https://github.com/Garcia-Ventures/gvtech-design/actions/workflows/ci.yml)
[![Release Status](https://github.com/Garcia-Ventures/gvtech-design/actions/workflows/release.yml/badge.svg)](https://github.com/Garcia-Ventures/gvtech-design/actions/workflows/release.yml)
[![Maintained with Nx](https://img.shields.io/badge/maintained%20with-nx-blue?style=flat-square&logo=nx)](https://nx.dev)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B20755%2Fgithub.com%2FGarcia-Ventures%2Fgvtech-design.svg?type=shield&issueType=license)](https://app.fossa.com/projects/custom%2B20755%2Fgithub.com%2FGarcia-Ventures%2Fgvtech-design?ref=badge_shield&issueType=license)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-orange.svg?style=flat-square&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/eng618)

A React component design system. This repository provides a lightweight, opinionated set of UI components and tooling used by Garcia Ventures projects, built with **Nx**, **Vite**, and **TypeScript**.

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
  - [Support](#support)
  - [License](#license)

---

## Demo

The design system includes a Vite-based playground site. Run it locally with `yarn dev` or view the hosted version on [Cloudflare Pages](https://gvtech-design.pages.dev/).

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

- `yarn dev` — start Vite dev server (Playground site)
- `yarn build` — build the library and registry
- `yarn build:site` — build the playground site
- `yarn test` — run tests locally
- `yarn test:ci` — run tests in CI
- `yarn lint` — run eslint

For full commands and details see `package.json`.

## Testing

Unit tests use Vitest and React Testing Library.

- Run tests locally: `yarn test`
- CI runs: `yarn test:ci`

## Releases & Publishing

We use **Nx Release** to manage versioning and changelogs. Releases are triggered automatically every Sunday or manually via the **Release** GitHub Action.

Publishing uses OIDC via npm Trusted Publishers for `@gv-tech` packages.

## Contributing

Please read the full guidelines in [CONTRIBUTING.md](.github/CONTRIBUTING.md) before contributing. Key points:

- Follow **Conventional Commits** to ensure release tooling produces accurate changelogs.
- Run `yarn lint` and `yarn test` before opening PRs.

## Roadmap

See issues and milestones for planned work.

## Support

If you find this project useful, consider supporting its development:

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/eng618)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

> For README best practices, we follow guidance from <https://www.makeareadme.com/>
