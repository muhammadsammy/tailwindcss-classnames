# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/2.0.1...v2.1.0) (2021-02-19)


### Features

* add cursor-helper by default ([2fa990e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/2fa990e6b0d20e584e26f34c202c6e08f4e7ee55))
* add more dark mode varints by default ([43fee47](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/43fee47a1b1a1647437be57093103921731090c4))

### [2.0.1](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.9.0...v2.0.1) (2021-02-07)

### ⚠ BREAKING CHANGES

- rename CLI args and improve its output (resolves #116)

### Features

- add `max-width-prose` class (fixes [#101](https://github.com/muhammadsammy/tailwindcss-classnames/issues/101)) ([#113](https://github.com/muhammadsammy/tailwindcss-classnames/issues/113)) ([c130f57](https://github.com/muhammadsammy/tailwindcss-classnames/commit/c130f5780c701d7beeb444721a1a7804b49bff32))
- add `overflow-ellipsis` and `overflow-clip` utilities (close [#109](https://github.com/muhammadsammy/tailwindcss-classnames/issues/109)) ([d8fd228](https://github.com/muhammadsammy/tailwindcss-classnames/commit/d8fd22877ce6209d9a37674070a3a8f90b2b980b))
- add `transform-gpu` utility classname (closes [#110](https://github.com/muhammadsammy/tailwindcss-classnames/issues/110)) ([53f4973](https://github.com/muhammadsammy/tailwindcss-classnames/commit/53f4973e0ac0c3c77f58c5ba9be0908796ad737e))
- add new config scales (closes [#99](https://github.com/muhammadsammy/tailwindcss-classnames/issues/99), [#111](https://github.com/muhammadsammy/tailwindcss-classnames/issues/111), [#105](https://github.com/muhammadsammy/tailwindcss-classnames/issues/105), [#106](https://github.com/muhammadsammy/tailwindcss-classnames/issues/106)) ([#114](https://github.com/muhammadsammy/tailwindcss-classnames/issues/114)) ([b632094](https://github.com/muhammadsammy/tailwindcss-classnames/commit/b632094ecfca10941a9fe3ec7a52f9b676761024))
- add ring utility classnames (closes [#97](https://github.com/muhammadsammy/tailwindcss-classnames/issues/97)) ([#112](https://github.com/muhammadsammy/tailwindcss-classnames/issues/112)) ([4b12183](https://github.com/muhammadsammy/tailwindcss-classnames/commit/4b1218306d52ffad856ad241df92d165f855384b))
- default to disabling hover and focus variants for font weight ([c22de68](https://github.com/muhammadsammy/tailwindcss-classnames/commit/c22de68a86f49b7242a6b2091a1b28f387641d46))
- detect config file if it exists to avoid prompting the user (closes [#144](https://github.com/muhammadsammy/tailwindcss-classnames/issues/144)) ([69b7e55](https://github.com/muhammadsammy/tailwindcss-classnames/commit/69b7e55ca49734a62af7fa40e379a403cf9d4104))
- enable variants extention (resolves [#102](https://github.com/muhammadsammy/tailwindcss-classnames/issues/102)) ([380e5d7](https://github.com/muhammadsammy/tailwindcss-classnames/commit/380e5d7113c3f95274328bb45bce84d1b09de92b))
- generate lib types with new colors, dark mode ([72bc948](https://github.com/muhammadsammy/tailwindcss-classnames/commit/72bc9481b51eadf5376a2e2397aceddc9683e7c1))
- remove `clear-fix` utility from layout/float ([7556452](https://github.com/muhammadsammy/tailwindcss-classnames/commit/7556452bf64cc8fc3f007c506cf64b0078bff785))
- remove `scrolling-touch` and `scrolling-auto` from layout/overflow ([8e10edb](https://github.com/muhammadsammy/tailwindcss-classnames/commit/8e10edbb4135c6ffd350b7cdcbfcafb5957f55a2))
- remove `shadow-outline` and `shadow-xs` (closes [#92](https://github.com/muhammadsammy/tailwindcss-classnames/issues/92)) ([6c8db2d](https://github.com/muhammadsammy/tailwindcss-classnames/commit/6c8db2d8e1c2b8c171a57f23259274028f4bbf40))
- rename `whitespace-no-wrap` utility class to `whitespace-nowrap` ([dafec5d](https://github.com/muhammadsammy/tailwindcss-classnames/commit/dafec5de8508b1798c46eab3e5b11cfcae5e47b0))
- rename CLI args and improve its output (resolves [#116](https://github.com/muhammadsammy/tailwindcss-classnames/issues/116)) ([b1e5e43](https://github.com/muhammadsammy/tailwindcss-classnames/commit/b1e5e431753bb23415692b3630943e43ac99fa6e))
- support dark mode classes ([#67](https://github.com/muhammadsammy/tailwindcss-classnames/issues/67)) ([a4bcd0b](https://github.com/muhammadsammy/tailwindcss-classnames/commit/a4bcd0bfffd5a732af04d1f71358230398b3e5b4))
- support the new color palette by default ([6acb30b](https://github.com/muhammadsammy/tailwindcss-classnames/commit/6acb30bdeb505631d4d593c43f1dac4898017bb7))
- update the default tailwind config from v2 ([#115](https://github.com/muhammadsammy/tailwindcss-classnames/issues/115)) ([16b0b26](https://github.com/muhammadsammy/tailwindcss-classnames/commit/16b0b261b44622c5cb3ebe3205559ed359a76989))
- use new name for flex no wrap `flex-nowrap` ([b47865e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/b47865ea1f86222fb531af3d81d297900d0df0e1))

### Bug Fixes

- detect default classes from the new 'DEFAULT' string ([b14973a](https://github.com/muhammadsammy/tailwindcss-classnames/commit/b14973ae93996d555842cdb7a8a112db95c792ef))
- ignore default keys in transition timing function config ([5a36e8e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/5a36e8e16608605e4c1c381915409dd2048c5feb))

## [2.0.0](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.9.0...v2.0.0) (2021-01-07)

### ⚠ BREAKING CHANGES

- rename CLI args and improve its output (resolves #116)

### Features

- add `max-width-prose` class (fixes [#101](https://github.com/muhammadsammy/tailwindcss-classnames/issues/101)) ([#113](https://github.com/muhammadsammy/tailwindcss-classnames/issues/113)) ([c130f57](https://github.com/muhammadsammy/tailwindcss-classnames/commit/c130f5780c701d7beeb444721a1a7804b49bff32))
- add `overflow-ellipsis` and `overflow-clip` utilities (close [#109](https://github.com/muhammadsammy/tailwindcss-classnames/issues/109)) ([d8fd228](https://github.com/muhammadsammy/tailwindcss-classnames/commit/d8fd22877ce6209d9a37674070a3a8f90b2b980b))
- add `transform-gpu` utility classname (closes [#110](https://github.com/muhammadsammy/tailwindcss-classnames/issues/110)) ([53f4973](https://github.com/muhammadsammy/tailwindcss-classnames/commit/53f4973e0ac0c3c77f58c5ba9be0908796ad737e))
- add new config scales (closes [#99](https://github.com/muhammadsammy/tailwindcss-classnames/issues/99), [#111](https://github.com/muhammadsammy/tailwindcss-classnames/issues/111), [#105](https://github.com/muhammadsammy/tailwindcss-classnames/issues/105), [#106](https://github.com/muhammadsammy/tailwindcss-classnames/issues/106)) ([#114](https://github.com/muhammadsammy/tailwindcss-classnames/issues/114)) ([b632094](https://github.com/muhammadsammy/tailwindcss-classnames/commit/b632094ecfca10941a9fe3ec7a52f9b676761024))
- add ring utility classnames (closes [#97](https://github.com/muhammadsammy/tailwindcss-classnames/issues/97)) ([#112](https://github.com/muhammadsammy/tailwindcss-classnames/issues/112)) ([4b12183](https://github.com/muhammadsammy/tailwindcss-classnames/commit/4b1218306d52ffad856ad241df92d165f855384b))
- default to disabling hover and focus variants for font weight ([c22de68](https://github.com/muhammadsammy/tailwindcss-classnames/commit/c22de68a86f49b7242a6b2091a1b28f387641d46))
- enable variants extention (resolves [#102](https://github.com/muhammadsammy/tailwindcss-classnames/issues/102)) ([380e5d7](https://github.com/muhammadsammy/tailwindcss-classnames/commit/380e5d7113c3f95274328bb45bce84d1b09de92b))
- generate lib types with new colors, dark mode ([72bc948](https://github.com/muhammadsammy/tailwindcss-classnames/commit/72bc9481b51eadf5376a2e2397aceddc9683e7c1))
- remove `clear-fix` utility from layout/float ([7556452](https://github.com/muhammadsammy/tailwindcss-classnames/commit/7556452bf64cc8fc3f007c506cf64b0078bff785))
- remove `scrolling-touch` and `scrolling-auto` from layout/overflow ([8e10edb](https://github.com/muhammadsammy/tailwindcss-classnames/commit/8e10edbb4135c6ffd350b7cdcbfcafb5957f55a2))
- remove `shadow-outline` and `shadow-xs` (closes [#92](https://github.com/muhammadsammy/tailwindcss-classnames/issues/92)) ([6c8db2d](https://github.com/muhammadsammy/tailwindcss-classnames/commit/6c8db2d8e1c2b8c171a57f23259274028f4bbf40))
- rename `whitespace-no-wrap` utility class to `whitespace-nowrap` ([dafec5d](https://github.com/muhammadsammy/tailwindcss-classnames/commit/dafec5de8508b1798c46eab3e5b11cfcae5e47b0))
- rename CLI args and improve its output (resolves [#116](https://github.com/muhammadsammy/tailwindcss-classnames/issues/116)) ([b1e5e43](https://github.com/muhammadsammy/tailwindcss-classnames/commit/b1e5e431753bb23415692b3630943e43ac99fa6e))
- support dark mode classes ([#67](https://github.com/muhammadsammy/tailwindcss-classnames/issues/67)) ([a4bcd0b](https://github.com/muhammadsammy/tailwindcss-classnames/commit/a4bcd0bfffd5a732af04d1f71358230398b3e5b4))
- support the new color palette by default ([6acb30b](https://github.com/muhammadsammy/tailwindcss-classnames/commit/6acb30bdeb505631d4d593c43f1dac4898017bb7))
- update the default tailwind config from v2 ([#115](https://github.com/muhammadsammy/tailwindcss-classnames/issues/115)) ([16b0b26](https://github.com/muhammadsammy/tailwindcss-classnames/commit/16b0b261b44622c5cb3ebe3205559ed359a76989))
- use new name for flex no wrap `flex-nowrap` ([b47865e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/b47865ea1f86222fb531af3d81d297900d0df0e1))

### Bug Fixes

- detect default classes from the new 'DEFAULT' string ([b14973a](https://github.com/muhammadsammy/tailwindcss-classnames/commit/b14973ae93996d555842cdb7a8a112db95c792ef))
- ignore default keys in transition timing function config ([5a36e8e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/5a36e8e16608605e4c1c381915409dd2048c5feb))

## [1.9.0](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.8.3...v1.9.0) (2020-10-18)

### Features

- add types for new classes introduced in tailwindcss 1.9 ([#59](https://github.com/muhammadsammy/tailwindcss-classnames/issues/59)) ([823d56c](https://github.com/muhammadsammy/tailwindcss-classnames/commit/823d56cd8cc21ee6482e7d541e1bbeda55fd8c93))

### Bug Fixes

- return evaluated theme from ConfigScanner.getThemeProperty method ([5dbb337](https://github.com/muhammadsammy/tailwindcss-classnames/commit/5dbb337e7518c4fc35ddbb07b62f3b615ce0a899))

### [1.8.3](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.8.2...v1.8.3) (2020-09-20)

### Bug Fixes

- add group prefix ([#55](https://github.com/muhammadsammy/tailwindcss-classnames/issues/55)) ([52f10eb](https://github.com/muhammadsammy/tailwindcss-classnames/commit/52f10eb13cce21eda24913fb4c8d0d624a363f17))
- remove `default` suffix from all types except types known to use it ([845b9bc](https://github.com/muhammadsammy/tailwindcss-classnames/commit/845b9bc12a640a3709b7c596bf7c8ca55064464b))

### [1.8.2](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.8.1...v1.8.2) (2020-09-15)

### Bug Fixes

- **types:** group type replaces group-hover/ group-focus variants ([7381d13](https://github.com/muhammadsammy/tailwindcss-classnames/commit/7381d13252eb58cdc44073020856995692dfe711))

### [1.8.1](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.6.1...v1.8.1) (2020-09-15)

### Features

- make lib compatible with tailwindcss 1.8 ([#52](https://github.com/muhammadsammy/tailwindcss-classnames/issues/52)) ([664d2af](https://github.com/muhammadsammy/tailwindcss-classnames/commit/664d2af999e7670d7a389efc82964a95fbd24179))
- **plugins:** add typography plugin support ([#44](https://github.com/muhammadsammy/tailwindcss-classnames/issues/44)) ([7b8eabb](https://github.com/muhammadsammy/tailwindcss-classnames/commit/7b8eabbbdba03132e97bc400f0181c77a5c96cf3))
- **types:** add TKey ([#42](https://github.com/muhammadsammy/tailwindcss-classnames/issues/42)) ([8011ab3](https://github.com/muhammadsammy/tailwindcss-classnames/commit/8011ab3d279fda7920cea4c0445ae5ff977bf841))

### Bug Fixes

- **types:** add missing 'group' type for group-\* variants (fixes [#53](https://github.com/muhammadsammy/tailwindcss-classnames/issues/53)) ([dbf7f20](https://github.com/muhammadsammy/tailwindcss-classnames/commit/dbf7f2009989246eea91e587d14a248a57733258))
- add missing 'transition' type ([bf4bb5e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/bf4bb5ed16c7a758a9f362efd8ee4b6748e47753))
- functions in theme.extend overrides the theme not extend it ([#49](https://github.com/muhammadsammy/tailwindcss-classnames/issues/49)) ([3be8b6f](https://github.com/muhammadsammy/tailwindcss-classnames/commit/3be8b6f9678e8560ee89f8b686f3ff0bdbcc11fe))

## [1.8.0](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.6.1...v1.8.0) (2020-09-14)

### Features

- make lib compatible with tailwindcss 1.8 ([#52](https://github.com/muhammadsammy/tailwindcss-classnames/issues/52)) ([664d2af](https://github.com/muhammadsammy/tailwindcss-classnames/commit/664d2af999e7670d7a389efc82964a95fbd24179))
- **plugins:** add typography plugin support ([#44](https://github.com/muhammadsammy/tailwindcss-classnames/issues/44)) ([7b8eabb](https://github.com/muhammadsammy/tailwindcss-classnames/commit/7b8eabbbdba03132e97bc400f0181c77a5c96cf3))
- **types:** add TKey ([#42](https://github.com/muhammadsammy/tailwindcss-classnames/issues/42)) ([8011ab3](https://github.com/muhammadsammy/tailwindcss-classnames/commit/8011ab3d279fda7920cea4c0445ae5ff977bf841))

### Bug Fixes

- add missing 'transition' type ([bf4bb5e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/bf4bb5ed16c7a758a9f362efd8ee4b6748e47753))
- functions in theme.extend overrides the theme not extend it ([#49](https://github.com/muhammadsammy/tailwindcss-classnames/issues/49)) ([3be8b6f](https://github.com/muhammadsammy/tailwindcss-classnames/commit/3be8b6f9678e8560ee89f8b686f3ff0bdbcc11fe))

### [1.7.2](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.6.1...v1.7.2) (2020-09-11)

### Bug Fixes

- add missing 'transition' type ([bf4bb5e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/bf4bb5ed16c7a758a9f362efd8ee4b6748e47753))
- functions in theme.extend overrides the theme not extend it ([#49](https://github.com/muhammadsammy/tailwindcss-classnames/issues/49)) ([3be8b6f](https://github.com/muhammadsammy/tailwindcss-classnames/commit/3be8b6f9678e8560ee89f8b686f3ff0bdbcc11fe))

### [1.7.1](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.6.1...v1.7.1) (2020-09-10)

### Bug Fixes

- functions in theme.extend overrides the theme not extend it ([#49](https://github.com/muhammadsammy/tailwindcss-classnames/issues/49)) ([3be8b6f](https://github.com/muhammadsammy/tailwindcss-classnames/commit/3be8b6f9678e8560ee89f8b686f3ff0bdbcc11fe))

## [1.7.0](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.6.1...v1.7.0) (2020-09-04)

### Features

- **plugins:** add typography plugin support ([#44](https://github.com/muhammadsammy/tailwindcss-classnames/issues/44)) ([7b8eabb](https://github.com/muhammadsammy/tailwindcss-classnames/commit/7b8eabbbdba03132e97bc400f0181c77a5c96cf3))
- **types:** add TKey ([#42](https://github.com/muhammadsammy/tailwindcss-classnames/issues/42)) ([8011ab3](https://github.com/muhammadsammy/tailwindcss-classnames/commit/8011ab3d279fda7920cea4c0445ae5ff977bf841))

### [1.6.1](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.6.0...v1.6.1) (2020-08-31)

### Bug Fixes

- add missing pseudoclasses for gap, accessiblity and inset classes ([9c7d3a3](https://github.com/muhammadsammy/tailwindcss-classnames/commit/9c7d3a329cf6536481e9a0e4f5ef8d2504dee2a2))

## [1.6.0](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.4.1...v1.6.0) (2020-08-30)

### Features

- add compatibility with TailwindCSS v1.7 ([#32](https://github.com/muhammadsammy/tailwindcss-classnames/issues/32)) ([83562f3](https://github.com/muhammadsammy/tailwindcss-classnames/commit/83562f30fe614a1490d6f6df648f8c97530c0cee))
- add default export ([4f987ec](https://github.com/muhammadsammy/tailwindcss-classnames/commit/4f987ecd91d197f57a86afdce847dd0ce5112acf))
- add default export ([2ffbdce](https://github.com/muhammadsammy/tailwindcss-classnames/commit/2ffbdceecc25dfaa1c57486a2635424dc02615f2))

## [1.5.0](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.4.1...v1.5.0) (2020-08-20)

### Features

- add compatibility with TailwindCSS v1.7 ([#32](https://github.com/muhammadsammy/tailwindcss-classnames/issues/32)) ([83562f3](https://github.com/muhammadsammy/tailwindcss-classnames/commit/83562f30fe614a1490d6f6df648f8c97530c0cee))

### [1.4.1](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.4.0...v1.4.1) (2020-07-05)

### Bug Fixes

- use correct prefix for font sizes types ([c5b6640](https://github.com/muhammadsammy/tailwindcss-classnames/commit/c5b66408a52122be70f02aa96a62660a967d49d9))

## [1.4.0](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.3.9...v1.4.0) (2020-07-04)

### ⚠ BREAKING CHANGES

- remove pseudoselector functions

### Features

- add flexGrow types from theme ([359a693](https://github.com/muhammadsammy/tailwindcss-classnames/commit/359a6932015bf2eedeafae84eb761ad00aa799fa))
- add line height classes type generation ([23d5fd0](https://github.com/muhammadsammy/tailwindcss-classnames/commit/23d5fd0226db4f9559e60e53533677d79a14a779))
- add order classes types generation from theme ([fd24095](https://github.com/muhammadsammy/tailwindcss-classnames/commit/fd24095a6e1f0fc75c66713edeae2b4bcb9314dd))
- add placeholder color and opacity types generation ([e465e89](https://github.com/muhammadsammy/tailwindcss-classnames/commit/e465e89411b307d8cc61c42a8eebf9669e01cd2f))
- add text opacity type generation ([2239109](https://github.com/muhammadsammy/tailwindcss-classnames/commit/2239109c4953a40678c36f27059fc2c3dd01573d))
- add theme extend values to scanned theme ([95d9d4c](https://github.com/muhammadsammy/tailwindcss-classnames/commit/95d9d4c9d92cefbf5be9d88c7365a57ec430b5bc))
- add type generation for flex shrink ([d31bb56](https://github.com/muhammadsammy/tailwindcss-classnames/commit/d31bb56162ab6c87d7016337e3b975de3106f600))
- generate list style type types ([13289af](https://github.com/muhammadsammy/tailwindcss-classnames/commit/13289af34fab9fb12dabb8608cec08b271de3d16))
- generate all backgrounds-related types ([269361e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/269361ef89da05ba1f18b912abbde06c0488acc4))
- generate border radius types from theme ([c0ae9e4](https://github.com/muhammadsammy/tailwindcss-classnames/commit/c0ae9e4f8e6d1ee47df36951e9abcc0151e3aef9))
- generate border width types from theme ([b733566](https://github.com/muhammadsammy/tailwindcss-classnames/commit/b7335661c18b508f3317699880128b51f7c0686b))
- generate classes with color with respect to each classes key ([d582974](https://github.com/muhammadsammy/tailwindcss-classnames/commit/d5829748adfbc662dea318a16d98f4c1b199c194))
- generate divide width types from theme ([9f7df54](https://github.com/muhammadsammy/tailwindcss-classnames/commit/9f7df5435a1c66044a827fa1efabc52780246c16))
- generate effects types from theme ([3ceb290](https://github.com/muhammadsammy/tailwindcss-classnames/commit/3ceb29037a548b4c492d73a095788f4bb04b54c1))
- generate font family types ([950156d](https://github.com/muhammadsammy/tailwindcss-classnames/commit/950156dab0daadf1fb93fdb06751fd40fc9af1e8))
- generate font size types ([6dbd3a7](https://github.com/muhammadsammy/tailwindcss-classnames/commit/6dbd3a790aa9e55bad991d4b324426f7ab0f09c7))
- generate font weight types ([45ae183](https://github.com/muhammadsammy/tailwindcss-classnames/commit/45ae183cc9679c429930c79fdce921883faa5661))
- generate grid column start/end types ([3b90dbc](https://github.com/muhammadsammy/tailwindcss-classnames/commit/3b90dbc8e06c4587d2f6db981958401ec4b31bc2))
- generate grid gap types ([cb70a1a](https://github.com/muhammadsammy/tailwindcss-classnames/commit/cb70a1a1729c0d60b055b00520326934d553b2c4))
- generate grid row start/end types ([9a173a7](https://github.com/muhammadsammy/tailwindcss-classnames/commit/9a173a78ff9b85c2aec6d1f0c37259125323f9b9))
- generate grid template rows types ([da9950e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/da9950e0a70181fd83a7ad2eef869cf5b821eb21))
- generate interactivity classes types from theme config ([7cb6062](https://github.com/muhammadsammy/tailwindcss-classnames/commit/7cb60626c91fe5d5fab5f796cdf870115f4c125d))
- generate layout types from theme config ([d127695](https://github.com/muhammadsammy/tailwindcss-classnames/commit/d1276958501700a94b6230261a0f93dd41285a82))
- generate letter spacing types from tailwind config ([c389a79](https://github.com/muhammadsammy/tailwindcss-classnames/commit/c389a79c48ee61b27752417470f2a8943b12d544))
- generate padding, margin and space classes from theme ([8bfa8eb](https://github.com/muhammadsammy/tailwindcss-classnames/commit/8bfa8eb5eb71647edc3433897683e77ce4719236))
- generate sizing classes types from theme config ([35c6530](https://github.com/muhammadsammy/tailwindcss-classnames/commit/35c6530441386706edba23634004375f27111300))
- generate SVG types ([3ce6d80](https://github.com/muhammadsammy/tailwindcss-classnames/commit/3ce6d802ab3c1238202f545776c17e5584ed358f))
- generate transforms classes types from theme config ([599a2e3](https://github.com/muhammadsammy/tailwindcss-classnames/commit/599a2e363be1f8326e389c5bddd671dbfe818374))
- generate transition duration types from theme ([c4819e2](https://github.com/muhammadsammy/tailwindcss-classnames/commit/c4819e2fbeb063461d4cece547c3fcd9a0023af6))
- generate transition property types from theme ([822414c](https://github.com/muhammadsammy/tailwindcss-classnames/commit/822414c3e883c05dcb15b7db97db46a94b75f151))
- generate transition timing function and delay from theme ([5842b6e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/5842b6e6c423d42c86bd7aced1639305f560b801))
- generate types for grid template columns ([8e0e5d5](https://github.com/muhammadsammy/tailwindcss-classnames/commit/8e0e5d51e66bf88aca8b420f5a2b1813ab9e8e6c))
- get theme values from closures referencing other values in config ([f10d9f9](https://github.com/muhammadsammy/tailwindcss-classnames/commit/f10d9f9fdc776fc47eeeef45c6cf91e9dbac21c0))

### Bug Fixes

- add missing generated divide color and opacity ([0d56d53](https://github.com/muhammadsammy/tailwindcss-classnames/commit/0d56d53d9bd75866cef77830c5cb918b94c191d6))
- generate pseudoclasses for generated classes not the default ones ([bc618aa](https://github.com/muhammadsammy/tailwindcss-classnames/commit/bc618aab09a7bef7b6dfe70e2c008b66e8fe813d))
- prevent utility functions from mutating original theme values ([b414bf0](https://github.com/muhammadsammy/tailwindcss-classnames/commit/b414bf051ecd4fc143de324bf4b405d4ebd7daed))
- remove false positive warning message for pseudo-classes generation ([d9663d6](https://github.com/muhammadsammy/tailwindcss-classnames/commit/d9663d63ef5c2f86f8899ad98cdb5a806d7dde2e))
- remove hard coded values in translate generation ([5fca805](https://github.com/muhammadsammy/tailwindcss-classnames/commit/5fca805e28887aaecaf301647ca4b38cc11d2ca6))

## 0.1.0

- First release
