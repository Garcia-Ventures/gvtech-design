# Changelog

## [2.5.1](https://github.com/Garcia-Ventures/gvtech-design/compare/design-system-v2.5.0...design-system-v2.5.1) (2026-02-20)


### Bug Fixes

* force release ([b28668d](https://github.com/Garcia-Ventures/gvtech-design/commit/b28668da1f27650c46983f01cd95794361572960))
* format ([152e9f7](https://github.com/Garcia-Ventures/gvtech-design/commit/152e9f77b236393ce2ac6e33e8c6a61a4af482c2))

## [2.5.0](https://github.com/Garcia-Ventures/gvtech-design/compare/design-system-v2.4.0...design-system-v2.5.0) (2026-02-20)


### Features

* **universal:** pivot to monorepo architecture and stabilize react native support ([#63](https://github.com/Garcia-Ventures/gvtech-design/issues/63)) ([3458938](https://github.com/Garcia-Ventures/gvtech-design/commit/3458938c17bdfc7a7f5eea0053b7bf1786a571fa))

## [2.4.0](https://github.com/Garcia-Ventures/gvtech-design/compare/design-system-v2.3.0...design-system-v2.4.0) (2026-02-16)


### Features

* Implement mobile sidebar and improve responsive styling and accessibility for documentation and UI components. ([9fafda0](https://github.com/Garcia-Ventures/gvtech-design/commit/9fafda0a890595b7a343aea161325e25bd7d0224))
* Introduce automated design token synchronization and granular component exports for the design system. ([068f010](https://github.com/Garcia-Ventures/gvtech-design/commit/068f010a43a8ae12edd1e89a693345d1e7679bb5))

## [2.3.0](https://github.com/Garcia-Ventures/gvtech-design/compare/design-system-v2.2.0...design-system-v2.3.0) (2026-02-13)


### Features

* Add `ThemeProvider` component, integrate `next-themes`, and update theme documentation and usage examples. ([731a9d1](https://github.com/Garcia-Ventures/gvtech-design/commit/731a9d1af4b143834bcfb5212d2b6e45e3aa25e0))


### Bug Fixes

* externalize `next-themes` in library builds and update its dependency type to peer and dev. ([6c9b3e7](https://github.com/Garcia-Ventures/gvtech-design/commit/6c9b3e7db61acafc39aaec9b9aca7fb68cadd734))

## [2.2.0](https://github.com/Garcia-Ventures/gvtech-design/compare/design-system-v2.1.1...design-system-v2.2.0) (2026-02-13)


### Features

* introduce `useTheme` hook with token access and update `ThemeToggle` to utilize it, adding corresponding tests. ([c56ea9e](https://github.com/Garcia-Ventures/gvtech-design/commit/c56ea9e192c1f5f471509d5d2167cbbab1974810))


### Documentation

* Clarify ThemeToggle controlled mode documentation and simplify example usage. ([a2715db](https://github.com/Garcia-Ventures/gvtech-design/commit/a2715db5ed4e14c72411a217f86d631d3b9a2af7))

## [2.1.1](https://github.com/Garcia-Ventures/gvtech-design/compare/design-system-v2.1.0...design-system-v2.1.1) (2026-02-13)


### Bug Fixes

* Configure package.json style.css export with explicit 'style' and 'default' keys. ([74e451b](https://github.com/Garcia-Ventures/gvtech-design/commit/74e451bc4088a2df274575d3d9147b66a5285f17))

## [2.1.0](https://github.com/Garcia-Ventures/gvtech-design/compare/design-system-v2.0.1...design-system-v2.1.0) (2026-02-12)


### Features

* Export and import global CSS styles for the design system. ([e77f343](https://github.com/Garcia-Ventures/gvtech-design/commit/e77f343d09c5bf20cab434196914388443019249))

## [2.0.1](https://github.com/Garcia-Ventures/gvtech-design/compare/design-system-v2.0.0...design-system-v2.0.1) (2026-02-12)


### Bug Fixes

* Add `exports` field to `package.json` for conditional package entry points. ([145cb19](https://github.com/Garcia-Ventures/gvtech-design/commit/145cb19adf80bf871bdd00c3634ed5ad4f495f61))

## [2.0.0](https://github.com/Garcia-Ventures/gvtech-design/compare/design-system-v1.2.0...design-system-v2.0.0) (2026-02-12)


### ⚠ BREAKING CHANGES

* **design-system:** Legacy components and styling system (styled-components) removed in favor of tailwindcss and shadcn/ui.
* This is the full update of storybook.

### build

* upgraded base ([#21](https://github.com/Garcia-Ventures/gvtech-design/issues/21)) ([91d5121](https://github.com/Garcia-Ventures/gvtech-design/commit/91d5121f019d3607ac46a8345c6e091a59a61c3e))


### Features

* Add .vscode/mcp.json to configure shadcn server command. ([27da4ba](https://github.com/Garcia-Ventures/gvtech-design/commit/27da4ba6ef8576fa5edb34263199b4fd1acde5ee))
* add `direction` prop to `ResizablePanelGroup` and map it to `orientation` ([c081063](https://github.com/Garcia-Ventures/gvtech-design/commit/c081063ae893b0bd95450b3025b8c81cdcc40b94))
* Add `validate:fix` script to automatically fix formatting and linting issues, and ignore `CHANGELOG.md` in Prettier. ([a441b17](https://github.com/Garcia-Ventures/gvtech-design/commit/a441b179e4dc8b1c8e5b1517fc6e673e8b0123ea))
* Add a new documentation page for color tokens and integrate it into the application navigation. ([caf2d7f](https://github.com/Garcia-Ventures/gvtech-design/commit/caf2d7faefeba773f28d3cc0052dd801db4d3416))
* Add component maintenance skill guidelines for UI components, tests, and documentation. ([c296d6c](https://github.com/Garcia-Ventures/gvtech-design/commit/c296d6c99b79f6840596f96a7c0b57938ecf49bd))
* add documentation pages for NavigationMenu, Chart, Form, Menubar, Resizable, Carousel, Toast, and Pagination components. ([0fb8327](https://github.com/Garcia-Ventures/gvtech-design/commit/0fb8327d1007305ba438a8d8ebbcbcf4a765d7dd))
* Add documentation pages for numerous new UI components and implement a footer. ([1a05766](https://github.com/Garcia-Ventures/gvtech-design/commit/1a057664ba0ffb896133876cdec9803a5083b6f8))
* Add DropdownMenu checkbox and radio item examples and refine various component tests. ([affa392](https://github.com/Garcia-Ventures/gvtech-design/commit/affa3921b8570b3f4deb27da6745f3c51fa8172b))
* Add Radix Toast and Sonner comparison documentation, destructive toast example, and integrate both toast providers. ([3d86f25](https://github.com/Garcia-Ventures/gvtech-design/commit/3d86f25cebb177e2426f3c605df3c3f462d0c868))
* add Search component with Cmd+K shortcut, tests, and documentation, and update sidebar navigation to include it. ([e66bb91](https://github.com/Garcia-Ventures/gvtech-design/commit/e66bb917770a7ba00e0392f7723e3297281e8e36))
* Add Storybook test runner with CI integration and optimize Vite build chunking. ([e3c6818](https://github.com/Garcia-Ventures/gvtech-design/commit/e3c6818957d34bc39c76818238c6645b923aaf68))
* add ThemeToggle component with binary and ternary modes, its documentation page, and integrate it into the docs site. ([fad082e](https://github.com/Garcia-Ventures/gvtech-design/commit/fad082ef94bca39839500340ffcc35d330cd87cb))
* Add unit tests for multiple UI components and enhance documentation with prop tables. ([54f5c73](https://github.com/Garcia-Ventures/gvtech-design/commit/54f5c731b41fec0a7649b524f1597939ea860905))
* Add unit tests for numerous UI components and enhance documentation with prop tables. ([9cfa465](https://github.com/Garcia-Ventures/gvtech-design/commit/9cfa465b2e79ff8ac21e6bd6a023d2a7b24abbe8))
* Automate npm publishing for the scoped design system package with provenance. ([e3bef59](https://github.com/Garcia-Ventures/gvtech-design/commit/e3bef59f66d02c561a7eef8caab6a80019cb4127))
* **design-system:** restart and redesign with shadcn/ui ([bea7850](https://github.com/Garcia-Ventures/gvtech-design/commit/bea7850ae8070c9d9e6ccf86ba36c53354eafbd0))
* display dynamic version from package.json in the sidebar ([7be0b14](https://github.com/Garcia-Ventures/gvtech-design/commit/7be0b14f69da21e4bf9109a1d6ed31551d74d6cb))
* enhance accessibility checks and improve build process ([482dc51](https://github.com/Garcia-Ventures/gvtech-design/commit/482dc51e36545217d886b13fae55c0e527cbb8a5))
* Implement a new color palette with design tokens, global styles, and accompanying documentation. ([2d1f6c7](https://github.com/Garcia-Ventures/gvtech-design/commit/2d1f6c7951762012062997f3ca0307f22b5c502f))
* implement automated shadcn registry and batch import components ([0e9dfde](https://github.com/Garcia-Ventures/gvtech-design/commit/0e9dfde1570e32489a5c9e6cb18e5870b96e1dd2))
* Implement documentation site structure with dedicated pages for various components and a navigation sidebar. ([857b5aa](https://github.com/Garcia-Ventures/gvtech-design/commit/857b5aa4e5fa9b1c5aa425d09adbf29a75b17859))
* Introduce `serve.json` for static URL configuration and adjust the `package.json` serve script. ([797a1ab](https://github.com/Garcia-Ventures/gvtech-design/commit/797a1ab58fe208848205b8a36770ba7df0d577a6))
* Introduce and apply new design tokens for colors, including brand-specific values and a radius variable. ([f0db044](https://github.com/Garcia-Ventures/gvtech-design/commit/f0db04402d505670dfaa2f8a727acdd666298429))
* license scans and move ci to github actions ([ae828ff](https://github.com/Garcia-Ventures/gvtech-design/commit/ae828ffcc5d135a37dd798d5cfbe34ad65e5661e))
* migrate storybook config to latest ([9c7bcb5](https://github.com/Garcia-Ventures/gvtech-design/commit/9c7bcb5880664a5182665ec903a516a1e349ab96))
* migrate to shadcn design system and remove storyboard ([69bb668](https://github.com/Garcia-Ventures/gvtech-design/commit/69bb668bce39743bd0d0081c9a230730eca7e5d1))
* **publish:** Getting ready for publish ([4e21b94](https://github.com/Garcia-Ventures/gvtech-design/commit/4e21b942672cb00546441c2998745067d2a404d8))
* **release:** adds release script to ci ([2e4711d](https://github.com/Garcia-Ventures/gvtech-design/commit/2e4711df40d8271671e5079f98e57bed3194efc9))
* **release:** adds release script to ci ([44786eb](https://github.com/Garcia-Ventures/gvtech-design/commit/44786eb9982e5fd84ecc7afbe9bcc5437aee5583))
* **release:** update release process ([#47](https://github.com/Garcia-Ventures/gvtech-design/issues/47)) ([d0dc2af](https://github.com/Garcia-Ventures/gvtech-design/commit/d0dc2afab6c992e0f4a2d9b94d4f70ffefebc279))
* Remove custom build configuration and add explicit environment-specific settings for preview and production environments. ([f5bbfde](https://github.com/Garcia-Ventures/gvtech-design/commit/f5bbfde5389d71fefaf0e8d0e4bbcbdaa7ed1066))
* rename and modernize the design system ([#45](https://github.com/Garcia-Ventures/gvtech-design/issues/45)) ([5bc936d](https://github.com/Garcia-Ventures/gvtech-design/commit/5bc936dc3a831c431eb80a2679d6c0785e6e622d))
* Replace the static header title with dynamic breadcrumb navigation and add sticky header styling. ([3dcd96c](https://github.com/Garcia-Ventures/gvtech-design/commit/3dcd96c87ad82338f5ca75b11f4e46160903901b))
* **spellright:** Adds settings for spellright ([329a125](https://github.com/Garcia-Ventures/gvtech-design/commit/329a1253a15dd443c19bd68e08bad14799bd42a9))
* Upgrade to Tailwind CSS v4, migrating configuration to CSS and ESM, and updating dependencies. ([41d67f2](https://github.com/Garcia-Ventures/gvtech-design/commit/41d67f23d00a058e55225e30e9d7e8b7a20a0d7a))


### Bug Fixes

* correct FUNDING syntax [skip ci] ([779e13a](https://github.com/Garcia-Ventures/gvtech-design/commit/779e13ae9002fcfab8dd0d342a4ce5964f5ae890))
* correct FUNDING syntax [skip ci] ([679722d](https://github.com/Garcia-Ventures/gvtech-design/commit/679722dca5f74bdf3d3ba27b1a159ce295a234e2))
* correct validations ([b032a1d](https://github.com/Garcia-Ventures/gvtech-design/commit/b032a1db833976af7e3c14d4d12cf1d19ef8b7a9))
* **eslint:** downgraded eslint ([6c30120](https://github.com/Garcia-Ventures/gvtech-design/commit/6c3012078c119fb691eca2fd80c57acc44efeb18))
* **README:** move to root so npm has access ([84f9f2f](https://github.com/Garcia-Ventures/gvtech-design/commit/84f9f2fe14c82d484ad946dc25241e296aef12b7))
* recreate yarn.lock ([a9281fd](https://github.com/Garcia-Ventures/gvtech-design/commit/a9281fde8ac42aea0a8187b1fd56b4742beed408))
* remove redundant eslint config ([eb4a21e](https://github.com/Garcia-Ventures/gvtech-design/commit/eb4a21e3481f9f8d6e5b38ba56618252e10b9558))
* replace missing dependencies ([55ea166](https://github.com/Garcia-Ventures/gvtech-design/commit/55ea1668be6ddf2bf12a30196d433abe25c109ae))
* **sb:** docs to correct version ([#23](https://github.com/Garcia-Ventures/gvtech-design/issues/23)) ([44d93b6](https://github.com/Garcia-Ventures/gvtech-design/commit/44d93b6d8edc4c3690e581b4f77323ce21af2ac0))
* update storybook config ([1f70527](https://github.com/Garcia-Ventures/gvtech-design/commit/1f705279766de140759256f8a9f31e6f8d69f3b7))
* use token in checkout process ([a1901e5](https://github.com/Garcia-Ventures/gvtech-design/commit/a1901e5cca8067985ba8a758160a043dee93cbec))


### Documentation

* enhance ThemeToggle documentation with a props table and integration examples, and add `relative` positioning to the toggle button. ([d62f5f5](https://github.com/Garcia-Ventures/gvtech-design/commit/d62f5f5c2bf20c9d15480d89ccde320fdca30ff0))
* Explicitly assign CODEOWNERS file ownership and standardize default owner's username casing. ([13efba5](https://github.com/Garcia-Ventures/gvtech-design/commit/13efba5fe7ac280fbe9a2c513debc92f0fea0033))
* update email link ([927503d](https://github.com/Garcia-Ventures/gvtech-design/commit/927503da7f97224ffdfd3e58612a686456170106))
* Update README to reflect the new GV Tech Design System name, `[@gv-tech](https://github.com/gv-tech)` package scope, repository links, and publishing method. ([2d09386](https://github.com/Garcia-Ventures/gvtech-design/commit/2d0938624b25669ed5a8f4deccacf82e0049dc84))

## [1.2.0](https://github.com/Garcia-Ventures/gvtech-design/compare/v1.1.0...v1.2.0) (2026-02-12)


### Features

* Add a new documentation page for color tokens and integrate it into the application navigation. ([caf2d7f](https://github.com/Garcia-Ventures/gvtech-design/commit/caf2d7faefeba773f28d3cc0052dd801db4d3416))
* Add component maintenance skill guidelines for UI components, tests, and documentation. ([c296d6c](https://github.com/Garcia-Ventures/gvtech-design/commit/c296d6c99b79f6840596f96a7c0b57938ecf49bd))
* Add DropdownMenu checkbox and radio item examples and refine various component tests. ([affa392](https://github.com/Garcia-Ventures/gvtech-design/commit/affa3921b8570b3f4deb27da6745f3c51fa8172b))
* Add Radix Toast and Sonner comparison documentation, destructive toast example, and integrate both toast providers. ([3d86f25](https://github.com/Garcia-Ventures/gvtech-design/commit/3d86f25cebb177e2426f3c605df3c3f462d0c868))
* add ThemeToggle component with binary and ternary modes, its documentation page, and integrate it into the docs site. ([fad082e](https://github.com/Garcia-Ventures/gvtech-design/commit/fad082ef94bca39839500340ffcc35d330cd87cb))
* Add unit tests for multiple UI components and enhance documentation with prop tables. ([54f5c73](https://github.com/Garcia-Ventures/gvtech-design/commit/54f5c731b41fec0a7649b524f1597939ea860905))
* Add unit tests for numerous UI components and enhance documentation with prop tables. ([9cfa465](https://github.com/Garcia-Ventures/gvtech-design/commit/9cfa465b2e79ff8ac21e6bd6a023d2a7b24abbe8))
* Implement a new color palette with design tokens, global styles, and accompanying documentation. ([2d1f6c7](https://github.com/Garcia-Ventures/gvtech-design/commit/2d1f6c7951762012062997f3ca0307f22b5c502f))
* Introduce and apply new design tokens for colors, including brand-specific values and a radius variable. ([f0db044](https://github.com/Garcia-Ventures/gvtech-design/commit/f0db04402d505670dfaa2f8a727acdd666298429))
* Replace the static header title with dynamic breadcrumb navigation and add sticky header styling. ([3dcd96c](https://github.com/Garcia-Ventures/gvtech-design/commit/3dcd96c87ad82338f5ca75b11f4e46160903901b))

## [1.1.0](https://github.com/Garcia-Ventures/gvtech-design/compare/v1.0.0...v1.1.0) (2026-02-06)


### Features

* display dynamic version from package.json in the sidebar ([7be0b14](https://github.com/Garcia-Ventures/gvtech-design/commit/7be0b14f69da21e4bf9109a1d6ed31551d74d6cb))
* Upgrade to Tailwind CSS v4, migrating configuration to CSS and ESM, and updating dependencies. ([41d67f2](https://github.com/Garcia-Ventures/gvtech-design/commit/41d67f23d00a058e55225e30e9d7e8b7a20a0d7a))

## [1.0.0](https://github.com/Garcia-Ventures/gvtech-design/compare/v0.9.0...v1.0.0) (2026-02-06)


### ⚠ BREAKING CHANGES

* **design-system:** Legacy components and styling system (styled-components) removed in favor of tailwindcss and shadcn/ui.

### Features

* Add .vscode/mcp.json to configure shadcn server command. ([27da4ba](https://github.com/Garcia-Ventures/gvtech-design/commit/27da4ba6ef8576fa5edb34263199b4fd1acde5ee))
* add `direction` prop to `ResizablePanelGroup` and map it to `orientation` ([c081063](https://github.com/Garcia-Ventures/gvtech-design/commit/c081063ae893b0bd95450b3025b8c81cdcc40b94))
* add documentation pages for NavigationMenu, Chart, Form, Menubar, Resizable, Carousel, Toast, and Pagination components. ([0fb8327](https://github.com/Garcia-Ventures/gvtech-design/commit/0fb8327d1007305ba438a8d8ebbcbcf4a765d7dd))
* Add documentation pages for numerous new UI components and implement a footer. ([1a05766](https://github.com/Garcia-Ventures/gvtech-design/commit/1a057664ba0ffb896133876cdec9803a5083b6f8))
* **design-system:** restart and redesign with shadcn/ui ([bea7850](https://github.com/Garcia-Ventures/gvtech-design/commit/bea7850ae8070c9d9e6ccf86ba36c53354eafbd0))
* implement automated shadcn registry and batch import components ([0e9dfde](https://github.com/Garcia-Ventures/gvtech-design/commit/0e9dfde1570e32489a5c9e6cb18e5870b96e1dd2))
* Implement documentation site structure with dedicated pages for various components and a navigation sidebar. ([857b5aa](https://github.com/Garcia-Ventures/gvtech-design/commit/857b5aa4e5fa9b1c5aa425d09adbf29a75b17859))
* migrate to shadcn design system and remove storyboard ([69bb668](https://github.com/Garcia-Ventures/gvtech-design/commit/69bb668bce39743bd0d0081c9a230730eca7e5d1))
* Remove custom build configuration and add explicit environment-specific settings for preview and production environments. ([f5bbfde](https://github.com/Garcia-Ventures/gvtech-design/commit/f5bbfde5389d71fefaf0e8d0e4bbcbdaa7ed1066))


### Bug Fixes

* correct validations ([b032a1d](https://github.com/Garcia-Ventures/gvtech-design/commit/b032a1db833976af7e3c14d4d12cf1d19ef8b7a9))

## [0.9.0](https://github.com/Garcia-Ventures/gvtech-design/compare/v0.8.0...v0.9.0) (2026-02-01)


### Features

* Automate npm publishing for the scoped design system package with provenance. ([e3bef59](https://github.com/Garcia-Ventures/gvtech-design/commit/e3bef59f66d02c561a7eef8caab6a80019cb4127))

## [0.8.0](https://github.com/Garcia-Ventures/gvtech-design/compare/v0.7.0...v0.8.0) (2026-02-01)


### Features

* Add `validate:fix` script to automatically fix formatting and linting issues, and ignore `CHANGELOG.md` in Prettier. ([a441b17](https://github.com/Garcia-Ventures/gvtech-design/commit/a441b179e4dc8b1c8e5b1517fc6e673e8b0123ea))
* Add Storybook test runner with CI integration and optimize Vite build chunking. ([e3c6818](https://github.com/Garcia-Ventures/gvtech-design/commit/e3c6818957d34bc39c76818238c6645b923aaf68))
* Introduce `serve.json` for static URL configuration and adjust the `package.json` serve script. ([797a1ab](https://github.com/Garcia-Ventures/gvtech-design/commit/797a1ab58fe208848205b8a36770ba7df0d577a6))

## [0.7.0](https://github.com/Garcia-Ventures/gvtech-design/compare/v0.6.3...v0.7.0) (2026-01-28)


### Features

* enhance accessibility checks and improve build process ([482dc51](https://github.com/Garcia-Ventures/gvtech-design/commit/482dc51e36545217d886b13fae55c0e527cbb8a5))
* **release:** update release process ([#47](https://github.com/Garcia-Ventures/gvtech-design/issues/47)) ([d0dc2af](https://github.com/Garcia-Ventures/gvtech-design/commit/d0dc2afab6c992e0f4a2d9b94d4f70ffefebc279))
* rename and modernize the design system ([#45](https://github.com/Garcia-Ventures/gvtech-design/issues/45)) ([5bc936d](https://github.com/Garcia-Ventures/gvtech-design/commit/5bc936dc3a831c431eb80a2679d6c0785e6e622d))

## v0.6.3 (Wed Aug 30 2023)

#### 🐛 Bug Fix

- build: bump browserslist ([@eng618](https://github.com/eng618))

#### Authors: 1

- Eric Garcia ([@eng618](https://github.com/eng618))

---

## v0.6.1 (Wed Aug 30 2023)

#### 🐛 Bug Fix

- ci: adjustments ([@eng618](https://github.com/eng618))
- ci: remove deprecated action ([@eng618](https://github.com/eng618))
- ci: update actions ([@eng618](https://github.com/eng618))
- docs: update email link ([@eng618](https://github.com/eng618))
- ci: update master to main conversioin ([@eng618](https://github.com/eng618))
- ci: update release workflow ([@eng618](https://github.com/eng618))
- ci: remove custom checkout token ([@eng618](https://github.com/eng618))
- build(test): add ci test command ([@eng618](https://github.com/eng618))
- build(fossa): remove optional test command ([@eng618](https://github.com/eng618))
- build(fossa): remove custom config ([@eng618](https://github.com/eng618))
- build(deps): update minor and below ([@eng618](https://github.com/eng618))
- build(fossa): update config api version to v3 ([@eng618](https://github.com/eng618))
- build(node): bump to latest 18.x ([@eng618](https://github.com/eng618))
- build: bump yarn version ([@eng618](https://github.com/eng618))
- build(deps): bump http-cache-semantics from 4.1.0 to 4.1.1 [#28](https://github.com/Garcia-Enterprise/ge-design/pull/28) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- chore: update templates [#27](https://github.com/Garcia-Enterprise/ge-design/pull/27) ([@eng618](https://github.com/eng618))
- build(deps): bump json5 from 1.0.1 to 1.0.2 [#25](https://github.com/Garcia-Enterprise/ge-design/pull/25) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@eng618](https://github.com/eng618))
- build(deps): bump decode-uri-component from 0.2.0 to 0.2.2 [#24](https://github.com/Garcia-Enterprise/ge-design/pull/24) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@eng618](https://github.com/eng618))
- chore: add pull request templates [#26](https://github.com/Garcia-Enterprise/ge-design/pull/26) ([@eng618](https://github.com/eng618))
- fix(sb): docs to correct version [#23](https://github.com/Garcia-Enterprise/ge-design/pull/23) ([@eng618](https://github.com/eng618))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Eric Garcia ([@eng618](https://github.com/eng618))

---

## v0.6.0 (Tue Nov 15 2022)

#### 🚀 Enhancement

- build!: upgraded base [#21](https://github.com/Garcia-Enterprise/ge-design/pull/21) ([@eng618](https://github.com/eng618))

#### Authors: 1

- Eric Garcia ([@eng618](https://github.com/eng618))

---

## v0.5.15 (Mon Nov 14 2022)

#### 🐛 Bug Fix

- build(deps): bump terser from 4.8.0 to 4.8.1 [#17](https://github.com/Garcia-Enterprise/ge-design/pull/17) ([@dependabot[bot]](https://github.com/dependabot[bot]) [@eng618](https://github.com/eng618))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Eric Garcia ([@eng618](https://github.com/eng618))

---

## v0.5.14 (Mon Nov 14 2022)

#### 🐛 Bug Fix

- test: temp disable Link test ([@eng618](https://github.com/eng618))
- build: update storybooks static files api ([@eng618](https://github.com/eng618))
- ci: update checkout action ([@eng618](https://github.com/eng618))
- build: update browserslist ([@eng618](https://github.com/eng618))
- test: update react apis ([@eng618](https://github.com/eng618))

#### Authors: 1

- Eric Garcia ([@eng618](https://github.com/eng618))

---

## v0.5.13 (Mon Nov 14 2022)

#### 🐛 Bug Fix

- build: bump all dependencies ([@eng618](https://github.com/eng618))
- build: downgrade babel-loader ([@eng618](https://github.com/eng618))
- build: add babel-loader ([@eng618](https://github.com/eng618))
- build: bump dependencies ([@eng618](https://github.com/eng618))
- ci: update node in actions ([@eng618](https://github.com/eng618))
- fix: recreate yarn.lock ([@eng618](https://github.com/eng618))
- build: update all deps ([@eng618](https://github.com/eng618))
- fix: update storybook config ([@eng618](https://github.com/eng618))
- build: add dependencies ([@eng618](https://github.com/eng618))
- ci: updates ([@eng618](https://github.com/eng618))
- ci: fix release ([@eng618](https://github.com/eng618))
- ci: only publish on success ([@eng618](https://github.com/eng618))

#### ⚠️ Pushed to `master`

- build update yarn and node ([@eng618](https://github.com/eng618))

#### Authors: 1

- Eric Garcia ([@eng618](https://github.com/eng618))

---

## v0.5.12 (Fri Nov 05 2021)

#### 🐛 Bug Fix

- build: update all dependencies ([@eng618](https://github.com/eng618))

#### Authors: 1

- Eric Garcia ([@eng618](https://github.com/eng618))

---

## v0.5.11 (Fri Nov 05 2021)

#### 🐛 Bug Fix

- build: update yarn to v2 ([@eng618](https://github.com/eng618))
- build(deps): bump tar from 6.1.0 to 6.1.6 [#12](https://github.com/Garcia-Enterprise/ge-design/pull/12) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Eric Garcia ([@eng618](https://github.com/eng618))

---

## v0.5.10 (Thu Jun 03 2021)

#### 🐛 Bug Fix

- build: add pre-commit hooks, update yarn.lock ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.5.9 (Thu Jun 03 2021)

#### 🐛 Bug Fix

- style: fix linter errors ([@ENG618](https://github.com/ENG618))
- build: update all dependencies ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.5.8 (Thu Jun 03 2021)

#### 🐛 Bug Fix

- ci: run on all pushes and pr's, only release master ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.5.7 (Thu Jun 03 2021)

#### 🐛 Bug Fix

- build(deps): bump dns-packet from 1.3.1 to 1.3.4 [#11](https://github.com/Garcia-Enterprise/ge-design/pull/11) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

## v0.5.6 (Thu Apr 22 2021)

#### 🐛 Bug Fix

- chore: create OSSAR workflow ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.5.5 (Thu Apr 22 2021)

#### 🐛 Bug Fix

- chore: setup security reporting ([@ENG618](https://github.com/ENG618))
- build: setup code scanning ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.5.4 (Thu Apr 22 2021)

#### 🐛 Bug Fix

- chore: add license ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.5.3 (Thu Apr 22 2021)

#### 🐛 Bug Fix

- ci: temporarily remove preflight checks ([@ENG618](https://github.com/ENG618))
- fix: replace missing dependencies ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.5.2 (Thu Apr 22 2021)

#### 🐛 Bug Fix

- ci: check lint and formatting ([@ENG618](https://github.com/ENG618))
- fix: remove redundant eslint config ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.5.1 (Thu Apr 22 2021)

#### 🐛 Bug Fix

- build: update dependencies ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.2.0 (Wed Apr 21 2021)

#### 🚀 Enhancement

- feat: license scans and move ci to github actions ([@ENG618](https://github.com/ENG618))
- feat: migrate storybook config to latest ([@ENG618](https://github.com/ENG618))

#### 🐛 Bug Fix

- fix: use token in checkout process ([@ENG618](https://github.com/ENG618))

#### ⚠️ Pushed to `master`

- ci: fix push issue ([@ENG618](https://github.com/ENG618))
- ci: add missing env vars and add twitter release ([@ENG618](https://github.com/ENG618))
- ci: add release token ([@ENG618](https://github.com/ENG618))
- ci: license scan after dependencies installed ([@ENG618](https://github.com/ENG618))
- style: lint all files ([@ENG618](https://github.com/ENG618))
- chore: update all dependencies ([@ENG618](https://github.com/ENG618))
- chore: update FUNDING ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.2.0 (Wed Apr 21 2021)

#### 🚀 Enhancement

- feat: license scans and move ci to github actions ([@ENG618](https://github.com/ENG618))
- feat: migrate storybook config to latest ([@ENG618](https://github.com/ENG618))

#### 🐛 Bug Fix

- fix: use token in checkout process ([@ENG618](https://github.com/ENG618))

#### ⚠️ Pushed to `master`

- ci: fix push issue ([@ENG618](https://github.com/ENG618))
- ci: add missing env vars and add twitter release ([@ENG618](https://github.com/ENG618))
- ci: add release token ([@ENG618](https://github.com/ENG618))
- ci: license scan after dependencies installed ([@ENG618](https://github.com/ENG618))
- style: lint all files ([@ENG618](https://github.com/ENG618))
- chore: update all dependencies ([@ENG618](https://github.com/ENG618))
- chore: update FUNDING ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.1.14 (Thu Dec 24 2020)

#### 🔩 Dependency Updates

- Bump ini from 1.3.5 to 1.3.8 [#9](https://github.com/Garcia-Enterprise/ge-design/pull/9) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

## (Thu Dec 24 2020)

#### 🔩 Dependency Updates

- Bump ini from 1.3.5 to 1.3.8 [#9](https://github.com/Garcia-Enterprise/ge-design/pull/9) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

## v0.1.13 (Fri Sep 11 2020)

#### 🔩 Dependency Updates

- Bump http-proxy from 1.18.0 to 1.18.1 [#8](https://github.com/Garcia-Enterprise/ge-design/pull/8) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

## (Fri Sep 11 2020)

#### 🔩 Dependency Updates

- Bump http-proxy from 1.18.0 to 1.18.1 [#8](https://github.com/Garcia-Enterprise/ge-design/pull/8) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

## v0.1.12 (Sun Aug 02 2020)

#### 🔩 Dependency Updates

- Bump elliptic from 6.5.2 to 6.5.3 [#7](https://github.com/Garcia-Enterprise/ge-design/pull/7) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

## (Sun Aug 02 2020)

#### 🔩 Dependency Updates

- Bump elliptic from 6.5.2 to 6.5.3 [#7](https://github.com/Garcia-Enterprise/ge-design/pull/7) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

## v0.1.11 (Thu Jun 11 2020)

#### 🐛 Bug Fix

- build(prettier): add custom prettier config [#6](https://github.com/Garcia-Enterprise/ge-design/pull/6) ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.1.11 (Thu Jun 11 2020)

#### 🐛 Bug Fix

- build(prettier): add custom prettier config [#6](https://github.com/Garcia-Enterprise/ge-design/pull/6) ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.1.10 (Tue Jun 09 2020)

#### ⚠️ Pushed to `master`

- Merge branch 'develop' ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.1.9 (Tue Jun 09 2020)

#### ⚠️ Pushed to `master`

- add link to npm ([@ENG618](https://github.com/ENG618))

#### Authors: 1

- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.1.8 (Mon Jun 08 2020)

#### 🐛 Bug Fix

- Bump websocket-extensions from 0.1.3 to 0.1.4 [#5](https://github.com/Garcia-Enterprise/ge-design/pull/5) ([@dependabot[bot]](https://github.com/dependabot[bot]))

#### Authors: 1

- [@dependabot[bot]](https://github.com/dependabot[bot])

---

## v0.1.1 (Tue Mar 17 2020)

#### 🐛 Bug Fix

- maintenance [#4](https://github.com/Garcia-Enterprise/ge-design/pull/4) ([@ENG618](https://github.com/ENG618))
- Bump acorn from 5.7.3 to 5.7.4 [#3](https://github.com/Garcia-Enterprise/ge-design/pull/3) ([@dependabot[bot]](https://github.com/dependabot[bot]))
- feat(release): adds release script to ci [#2](https://github.com/Garcia-Enterprise/ge-design/pull/2) ([@ENG618](https://github.com/ENG618))

#### Authors: 2

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Eric Garcia ([@ENG618](https://github.com/ENG618))

---

## v0.1.0 (Fri Nov 15 2019)

- Created first version of the design system, with `Avatar`, `Badge`, `Button`, `Icon` and `Link` components.

#### Authors: 1

- Eric N. Garcia (<eng618@garciaericn.com>)
