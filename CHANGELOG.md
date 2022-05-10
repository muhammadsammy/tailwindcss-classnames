# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.0.5](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v3.0.4...v3.0.5) (2022-05-10)


### Bug Fixes

* adds proper indexing when generating colors ([#412](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/412)) ([0e500b6](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/0e500b6b6b44bec35f50fd49d5dfee51fcb899fd))

### [3.0.4](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v3.0.3...v3.0.4) (2022-04-09)


### Bug Fixes

* support darkMode manual 'class' option  ([#399](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/399)) ([7cd6881](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/7cd6881a4b97980bddb72ea17427c3e8dd5b0586))

### [3.0.3](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v3.0.2...v3.0.3) (2022-03-17)


### Bug Fixes

* use correct prefix for ring-inset class ([#390](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/390)) ([22b0be9](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/22b0be9e9ad1532e09fb8cdabf0adffa30f2eaa8))

### [3.0.2](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v3.0.1...v3.0.2) (2022-01-14)


### Bug Fixes

* generate new lib classnames ([bc47da3](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/bc47da3288e7a2784f5ed21abe2494ae7a609376))
* pin colors package to 1.4.0 (fixes [#362](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/362)) ([e8132b4](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/e8132b40449ad85f3eee99a3c8b34d0dd4877f54))

### [3.0.1](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v3.0.0...v3.0.1) (2021-12-24)


### Bug Fixes

* add missing RTL and LTR modifiers ([5e9a353](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/5e9a353777dce6815f820c75ca55997c1900ce83))

## [3.0.0](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.2.6...v3.0.0) (2021-12-17)


### ⚠ BREAKING CHANGES

* rename overflow-clip & overflow-ellipsis to text-clip & text-ellipsis

### Features

* add  `placeholder` variant ([866ac55](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/866ac553037e8d1a5955fe33120641b478ec3b3d)), closes [#338](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/338)
* add `border-hidden` utility ([df94219](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/df9421930de9eb05a3407cd61511d65425f54a27)), closes [#335](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/335)
* add `border-x` and `border-y` width and color utilities ([c702c46](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c702c46554722b379e61c430e096e9e4b136279e)), closes [#334](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/334)
* add `file` variant for `::file-selector-button` pseudo element ([d51fe20](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/d51fe2098e9efda2dc4cf81a4a6e17fcde7d55a4)), closes [#339](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/339)
* add `grow-*` and `shrink-*` utilities, deprecate `flex-grow-*` and `flex-shrink-*` ([73ee65d](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/73ee65da78250866dfef4bbb1275b7737bc07ace)), closes [#333](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/333)
* add `open` variant ([b261695](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/b261695fb46a71f3efcabb7a423ab35a44af5eb3)), closes [#341](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/341)
* add `overflow-clip`, `overflow-x-clip` and `overflow-y-clip` utilities ([f0c23ec](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/f0c23ecec81594a746f2779188fe4f74539707ce)), closes [#336](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/336)
* add `print` variant for targeting printed media ([0a1be3d](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/0a1be3d95ccdca5bdbf77201fd2f5846fd59f8ca)), closes [#337](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/337)
* add `scroll-behavior` utilities ([c51e665](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c51e66534cde1c44c90f1edd95485a2e7ef2bbef)), closes [#330](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/330)
* add `scroll-margin` and `scroll-padding` utilities ([e3503e9](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/e3503e9618f6231166606ef8a05920ffff63239a))
* add `scroll-snap` utilities ([e7d5070](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/e7d5070b0008fa109389e09974cb5deb7dc0990f)), closes [#329](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/329)
* add `touch-action` utilities ([2d695e4](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/2d695e47fa3daff626e89fd0b9fe22d4aec08096)), closes [#331](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/331)
* add classnames with important modifiers to utility functions ([02a3555](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/02a3555c7434089690dcf25c05082dbae0b35b33))
* add colored box shadow utilities ([b92a42a](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/b92a42ada7dce1b67fc57314cec79c27abb41e55)), closes [#318](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/318)
* add flex basis utilites (closes [#332](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/332)) ([8e900bb](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/8e900bbd2f45dbbe66e52ece6363d02dccb9435c))
* add new layout and typography utilities ([c5e839e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c5e839e561c9ed813e0d19c25689b90ce8b1ef0f))
* add new outline utilites ([07da44a](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/07da44a4a61aebae4f1a7940986b1e58b8b80775))
* add portrait and landscape variants ([f89ec5a](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/f89ec5a9e4fddac060d1a4429aa1984a5ca37ac8)), closes [#340](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/340)
* add pseudoclassnames to their category function ([224fb7a](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/224fb7a08dd0897cb93d218750d74f6c12ff44e1))
* add variants to the cli as it's removed from the new config ([2bef20c](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/2bef20c57752554ee7e89e908cf7ce414f2de39a))
* **cli:** generate per-category classnames ([805396f](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/805396ff6c149154c3860cf9b32f24f18f514f79))
* enable jit features all the time ([84f281b](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/84f281b08d70954fdbd4523bb2a5a81f46b8f193))
* generate utility function for all category types ( [#293](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/293)) ([1fa8a9b](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/1fa8a9b96ec543641da63a3fd0aa444310f8b6f0))
* generate utility functions for subcategories instead of categories ([9486398](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/9486398483b5ca24b683637d93ea2031b566ce18))
* rename  `decoration-slice` and `decoration-break` to `box-decoration-*` ([543e868](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/543e8682ab74e6ffdd3989cf6446e690cbc50180)), closes [#344](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/344)
* rename overflow-clip & overflow-ellipsis to text-clip & text-ellipsis ([050b6e4](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/050b6e46740e56ad4f8a1d657a861c56d5813a16))
* support  `accent-color` utilities ([b343833](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/b34383362eb67fa5bae83bd745bfd78f874e53bc)), closes [#328](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/328)
* support `will-change` utilities ([0033a52](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/0033a52a45dc9e62c54443fef5af1c61069a856f)), closes [#343](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/343)
* update config closure evaluator to evaluate new tailwind3 configs ([440c1ed](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/440c1ed7cc5790a6a112e267955de073f7f6b1a1))


### Bug Fixes

* disable duplicate breakpoint pseudoclass variants generation ([912519a](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/912519aae83a86fbd6b389b3aa6dd87674bffa62))
* generate correct module exports ([3fac1c1](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/3fac1c1381a7e9d4599229ae5ab3a6c9044368d2))
* pass the parser into the fileContentGenerator instead of prefix ([bce47a8](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/bce47a815bdab3b6c9675ae80611cf5f18235611))
* use correct condition for adding a dark mode variant ([82cadf0](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/82cadf0a9ea693307db2789de9b0c0391175a025))


### Performance Improvements

* disable JIT opacity prefix feature ([e2d9673](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/e2d9673b119c436f669693a42a702d8dc7ce9b82))
* use TS template literal types to generate pseudoclassess types ([e614729](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/e614729448a3b75621a6ad2f1ab84d56c671aaf2))

### [2.2.6](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.2.5...v2.2.6) (2021-12-07)


### Bug Fixes

* **flexbox:** add 'justify-evenly' ([#312](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/312)) ([e2d21ed](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/e2d21ed67bce12334dadb8e121a4536402e493a5))

### [2.2.5](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.2.4...v2.2.5) (2021-10-15)


### Bug Fixes

* stop using default config when input arg is provided ([#290](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/290)) ([#291](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/291)) ([a25a815](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/a25a815528a31b0f636c69c50e2f1f9be557eef4))

### [2.2.4](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.2.3...v2.2.4) (2021-10-07)


### Bug Fixes

* add condition when generating backdropHueRotate ([9557847](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/9557847dda6362de0e1ed01f467c56365591f17c))
* add condition when generating borderColor ([3192ea8](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/3192ea8c135d71ab3b14dc50e1259cbd2c889c7e))
* add condition when generating hueRotate ([89c0b2e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/89c0b2ea44033f029bf71c24bb75ed0400232f52))

### [2.2.3](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.2.2...v2.2.3) (2021-07-21)


### Bug Fixes

* generate lib types ([4df5f06](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/4df5f06ef8a4215142d84b5e2d9341904c7f4dcd))

### [2.2.2](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.2.1...v2.2.2) (2021-07-21)


### Bug Fixes

* add `self-baseline` utility ([6f3a05f](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/6f3a05fc2cf4aaa3a4f38c43ce5540e83c9c1b8b))

### [2.2.1](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.2.0...v2.2.1) (2021-06-23)


### Bug Fixes

* generate lib types ([d4bc700](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/d4bc7000108c9825cd64c1e0f65f8761f2e018bf))

## [2.2.0](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.1.3...v2.2.0) (2021-06-23)


### Features

* add 'content' utilities in JIT mode ([47c04bd](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/47c04bdd6605c4cb5bddad926744554b046f87ea))
* add blur-none by default (Closes [#230](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/230)) ([7d317b7](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/7d317b72d11e65152a3599137da9345d812e2ea9))
* add caret-color utilities ([5ecbcf3](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/5ecbcf35557db4d93865b0d94a835de2fc7cdd09)), closes [#235](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/235)
* add exhaustive pseudo-class and pseudo-element variant support ([#252](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/252)) ([9cb18e6](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/9cb18e6bc190aeb51fa60d8dd77ef11e0bb4c118))
* add per-side border color utilities for JIT mode enabled configs ([6ec97b9](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/6ec97b9151257094e07bf0c66cfe9c49bc5edf65))
* add support for the new background origin utils ([2bc9840](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/2bc98406f9a864dfb211e3692dd65de623aaf127)), closes [#241](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/241)
* add universal shorthand color opacity syntax ([38f27dd](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/38f27ddebe1690fcd74256723489b2d19187874c))


### Bug Fixes

* add missing classnames that does not have the opacity short hand suffix ([a48e16b](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/a48e16b0b6165f53578a6ee884b7e1a2b3157284))
* only generate classnames opacity short hand when JIT mode is enabled ([75902d9](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/75902d90c58f12d810befd51dfef650cc41d9a33))

### [2.1.3](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.1.2...v2.1.3) (2021-05-19)


### Bug Fixes

* Fixed issues with theme.extend configurations are ignored for specific properties ([c780aaa](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c780aaa4bd7c109a5d1b5de1c80ca41415a7d220))

### [2.1.2](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.1.1...v2.1.2) (2021-05-06)


### Bug Fixes

* **performance:** using clsx in place of classnames package ([611a0f4](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/611a0f4dda143f812f2bfaf00ca8b02864321547)), closes [#126](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/126)

### [2.1.1](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.1.0...v2.1.1) (2021-04-28)


### Bug Fixes

* pseudoClasses formatted incorrectly with prefix ([#213](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/213)) ([240476d](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/240476d4dbbcf7ba6f081a68968698010766790b))

## [2.1.0](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.0.7...v2.1.0) (2021-04-11)


### Features

* **jit:** generate important (!) modifier before classnames ([9a3b64f](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/9a3b64fdaf5f9f103f7eae3e3155c307c6819b15))
* add `box-decoration-break` utilities ([65416ca](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/65416caa3491fc2da71118f187aed726e961762c)), closes [#193](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/193)
* add `isolation` utilities ([0529a87](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/0529a873e726ca9927ab3e742dbd8bac215288d7)), closes [#194](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/194)
* add `mix-blend-mode` and `background-blend-mode` utilities ([#200](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/200)) ([a6c8e87](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/a6c8e87659eca548c5f3c6a7b47eae02aa6ccf37)), closes [#195](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/195)
* add CSS Filters classnames ([#198](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/198)) ([84a8c48](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/84a8c4832877ceda1609b2b5d1daa08d92d3cfe9))
* add support for display : `inline-table`,  `list-item` utilities ([6a500af](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/6a500afb4f4a491bdc2ff5f558af53128038cbcb)), closes [#192](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/192)
* generate all variants when JIT mode is enabled ([c95cef5](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c95cef51e9bba5d11591692adf5183e0b183c158))

### [2.0.7](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.0.6...v2.0.7) (2021-02-25)


### Bug Fixes

* add missing `process` global to the node vm context ([0e401e3](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/0e401e3f0633282e19dfc5fe6274538072719a7a))

### [2.0.6](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v2.0.5...v2.0.6) (2021-02-24)

### Bug Fixes

- make a workaround for config relative imports issues ([#170](https://github.com/muhammadsammy/tailwindcss-classnames/issues/170)) ([e1abd7c](https://github.com/muhammadsammy/tailwindcss-classnames/commit/e1abd7c7a538fe880c8e4342f2c0d575575c5f2a))

### [2.0.5](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.0.4...v2.0.5) (2021-02-23)

### Bug Fixes

- generate lib types with latest changes ([0a7a654](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/0a7a6547555bd4a3c7b2bb46c69762859017dd78))

### [2.0.4](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/v2.0.3...v2.0.4) (2021-02-20)

### ⚠ BREAKING CHANGES

- rename CLI args and improve its output (resolves #116)
- remove pseudoselector functions

### Features

- add `max-width-prose` class (fixes [#101](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/101)) ([#113](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/113)) ([c130f57](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c130f5780c701d7beeb444721a1a7804b49bff32))
- add `overflow-ellipsis` and `overflow-clip` utilities (close [#109](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/109)) ([d8fd228](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/d8fd22877ce6209d9a37674070a3a8f90b2b980b))
- add `transform-gpu` utility classname (closes [#110](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/110)) ([53f4973](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/53f4973e0ac0c3c77f58c5ba9be0908796ad737e))
- add compatibility with TailwindCSS v1.7 ([#32](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/32)) ([83562f3](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/83562f30fe614a1490d6f6df648f8c97530c0cee))
- add cursor-helper by default ([2fa990e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/2fa990e6b0d20e584e26f34c202c6e08f4e7ee55))
- add default export ([4f987ec](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/4f987ecd91d197f57a86afdce847dd0ce5112acf))
- add default export ([2ffbdce](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/2ffbdceecc25dfaa1c57486a2635424dc02615f2))
- add more dark mode varints by default ([43fee47](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/43fee47a1b1a1647437be57093103921731090c4))
- add new config scales (closes [#99](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/99), [#111](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/111), [#105](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/105), [#106](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/106)) ([#114](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/114)) ([b632094](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/b632094ecfca10941a9fe3ec7a52f9b676761024))
- add ring utility classnames (closes [#97](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/97)) ([#112](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/112)) ([4b12183](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/4b1218306d52ffad856ad241df92d165f855384b))
- add theme extend values to scanned theme ([95d9d4c](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/95d9d4c9d92cefbf5be9d88c7365a57ec430b5bc))
- add types for new classes introduced in tailwindcss 1.9 ([#59](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/59)) ([823d56c](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/823d56cd8cc21ee6482e7d541e1bbeda55fd8c93))
- bump version ([987343c](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/987343c1dc25f0cc44cafc0fedb82d58e0ee70dc))
- default to disabling hover and focus variants for font weight ([c22de68](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c22de68a86f49b7242a6b2091a1b28f387641d46))
- detect config file if it exists to avoid prompting the user (closes [#144](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/144)) ([69b7e55](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/69b7e55ca49734a62af7fa40e379a403cf9d4104))
- enable variants extention (resolves [#102](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/102)) ([380e5d7](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/380e5d7113c3f95274328bb45bce84d1b09de92b))
- generate classes with color with respect to each classes key ([d582974](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/d5829748adfbc662dea318a16d98f4c1b199c194))
- generate layout types from theme config ([d127695](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/d1276958501700a94b6230261a0f93dd41285a82))
- generate lib types with new colors, dark mode ([72bc948](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/72bc9481b51eadf5376a2e2397aceddc9683e7c1))
- generate padding, margin and space classes from theme ([8bfa8eb](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/8bfa8eb5eb71647edc3433897683e77ce4719236))
- generate sizing classes types from theme config ([35c6530](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/35c6530441386706edba23634004375f27111300))
- get theme values from closures referencing other values in config ([f10d9f9](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/f10d9f9fdc776fc47eeeef45c6cf91e9dbac21c0))
- make lib compatible with tailwindcss 1.8 ([#52](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/52)) ([664d2af](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/664d2af999e7670d7a389efc82964a95fbd24179))
- remove `clear-fix` utility from layout/float ([7556452](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/7556452bf64cc8fc3f007c506cf64b0078bff785))
- remove `scrolling-touch` and `scrolling-auto` from layout/overflow ([8e10edb](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/8e10edbb4135c6ffd350b7cdcbfcafb5957f55a2))
- remove `shadow-outline` and `shadow-xs` (closes [#92](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/92)) ([6c8db2d](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/6c8db2d8e1c2b8c171a57f23259274028f4bbf40))
- rename `whitespace-no-wrap` utility class to `whitespace-nowrap` ([dafec5d](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/dafec5de8508b1798c46eab3e5b11cfcae5e47b0))
- rename CLI args and improve its output (resolves [#116](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/116)) ([b1e5e43](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/b1e5e431753bb23415692b3630943e43ac99fa6e))
- support dark mode classes ([#67](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/67)) ([a4bcd0b](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/a4bcd0bfffd5a732af04d1f71358230398b3e5b4))
- support the new color palette by default ([6acb30b](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/6acb30bdeb505631d4d593c43f1dac4898017bb7))
- update the default tailwind config from v2 ([#115](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/115)) ([16b0b26](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/16b0b261b44622c5cb3ebe3205559ed359a76989))
- use new name for flex no wrap `flex-nowrap` ([b47865e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/b47865ea1f86222fb531af3d81d297900d0df0e1))
- **plugins:** add typography plugin support ([#44](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/44)) ([7b8eabb](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/7b8eabbbdba03132e97bc400f0181c77a5c96cf3))
- **types:** add TKey ([#42](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/42)) ([8011ab3](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/8011ab3d279fda7920cea4c0445ae5ff977bf841))
- add classes for @tailwindcss/custom-forms plugin ([e5cb2bb](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/e5cb2bbf3016eb0976572f1b9c94fb4dc2effda3))
- add css grid properties ([6fa27aa](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/6fa27aa5df96d018598175703b0bd27ca98e5ff6))
- add flexGrow types from theme ([359a693](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/359a6932015bf2eedeafae84eb761ad00aa799fa))
- add line height classes type generation ([23d5fd0](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/23d5fd0226db4f9559e60e53533677d79a14a779))
- add order classes types generation from theme ([fd24095](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/fd24095a6e1f0fc75c66713edeae2b4bcb9314dd))
- add placeholder color and opacity types generation ([e465e89](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/e465e89411b307d8cc61c42a8eebf9669e01cd2f))
- add pre-commit hooks ([a711130](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/a7111304e56e67a1fb89fbdb6786ce663812bb0e))
- add text opacity type generation ([2239109](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/2239109c4953a40678c36f27059fc2c3dd01573d))
- add type generation for flex shrink ([d31bb56](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/d31bb56162ab6c87d7016337e3b975de3106f600))
- bump version to 1.3.6 ([0cc6858](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/0cc6858b370d004934ea228a51a1d903803cea3b))
- generat list style type types ([13289af](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/13289af34fab9fb12dabb8608cec08b271de3d16))
- generate all backgrounds-related types ([269361e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/269361ef89da05ba1f18b912abbde06c0488acc4))
- generate border radius types from theme ([c0ae9e4](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c0ae9e4f8e6d1ee47df36951e9abcc0151e3aef9))
- generate border width types from theme ([b733566](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/b7335661c18b508f3317699880128b51f7c0686b))
- generate divide width types from theme ([9f7df54](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/9f7df5435a1c66044a827fa1efabc52780246c16))
- generate effects types from theme ([3ceb290](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/3ceb29037a548b4c492d73a095788f4bb04b54c1))
- generate font family types ([950156d](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/950156dab0daadf1fb93fdb06751fd40fc9af1e8))
- generate font size types ([6dbd3a7](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/6dbd3a790aa9e55bad991d4b324426f7ab0f09c7))
- generate font weight types ([45ae183](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/45ae183cc9679c429930c79fdce921883faa5661))
- generate grid column start/end types ([3b90dbc](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/3b90dbc8e06c4587d2f6db981958401ec4b31bc2))
- generate grid gap types ([cb70a1a](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/cb70a1a1729c0d60b055b00520326934d553b2c4))
- generate grid row start/end types ([9a173a7](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/9a173a78ff9b85c2aec6d1f0c37259125323f9b9))
- generate grid template rows types ([da9950e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/da9950e0a70181fd83a7ad2eef869cf5b821eb21))
- generate interactivity classes types from theme config ([7cb6062](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/7cb60626c91fe5d5fab5f796cdf870115f4c125d))
- generate letter spacing types from tailwind config ([c389a79](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c389a79c48ee61b27752417470f2a8943b12d544))
- generate SVG types ([3ce6d80](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/3ce6d802ab3c1238202f545776c17e5584ed358f))
- generate transforms classes types from theme config ([599a2e3](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/599a2e363be1f8326e389c5bddd671dbfe818374))
- generate transition duration types from theme ([c4819e2](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c4819e2fbeb063461d4cece547c3fcd9a0023af6))
- generate transition property types from theme ([822414c](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/822414c3e883c05dcb15b7db97db46a94b75f151))
- generate transition timing function and delay from theme ([5842b6e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/5842b6e6c423d42c86bd7aced1639305f560b801))
- generate types for grid template columns ([8e0e5d5](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/8e0e5d51e66bf88aca8b420f5a2b1813ab9e8e6c))
- implemet importing types from external file ([7c07343](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/7c07343afdd3904ca2decdae23bd04891812a25d))
- opacity from theme ([0d10706](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/0d107061b4f2c473d2aaf5ee2f52c8b670fbfbe1))
- text-opacity support ([ae196ce](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/ae196ce285d8b07d2fcb44313647fe2e3e66103a))

### Bug Fixes

- add group prefix ([#55](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/55)) ([52f10eb](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/52f10eb13cce21eda24913fb4c8d0d624a363f17))
- add missing 'transition' type ([bf4bb5e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/bf4bb5ed16c7a758a9f362efd8ee4b6748e47753))
- add missing generated divide color and opacity ([0d56d53](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/0d56d53d9bd75866cef77830c5cb918b94c191d6))
- add missing pseudoclasses for gap, accessiblity and inset classes ([9c7d3a3](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/9c7d3a329cf6536481e9a0e4f5ef8d2504dee2a2))
- Add missing types to cli.ts ([4caa355](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/4caa355101bf9346f0ef6930f980984d753f83b9))
- add result of property modification to returned classes with colors ([fe458c9](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/fe458c9071d2327e4b916dcf75b5a212260cf3d2))
- avoid variable shadowing ([c84c73c](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c84c73cd6b43788bec5c18bcd59fac9922416333))
- backgrounds group memeber types references ([0b5867e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/0b5867ec7d35014065483f43898be179866b8ce1))
- correct typo in customClassesFilename parameter name ([a0e8a3b](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/a0e8a3b116bba5aed20b231fc6e3b9ddb689b3f3))
- detect default classes from the new 'DEFAULT' string ([b14973a](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/b14973ae93996d555842cdb7a8a112db95c792ef))
- functions in theme.extend overrides the theme not extend it ([#49](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/49)) ([3be8b6f](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/3be8b6f9678e8560ee89f8b686f3ff0bdbcc11fe))
- generate actual backgrounds group memeber types ([ead0bc0](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/ead0bc0a0ac951f6ce771c09273253312da0b51e))
- generate pseudoclasses for generated classes not the default ones ([bc618aa](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/bc618aab09a7bef7b6dfe70e2c008b66e8fe813d))
- ignore default keys in transition timing function config ([5a36e8e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/5a36e8e16608605e4c1c381915409dd2048c5feb))
- ignore idea folder ([ece221e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/ece221eccd9323e8b8ad6c00526ab745b61ef9ae))
- prevent utility functions from mutating original theme values ([b414bf0](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/b414bf051ecd4fc143de324bf4b405d4ebd7daed))
- remove `default` suffix from all types except types known to use it ([845b9bc](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/845b9bc12a640a3709b7c596bf7c8ca55064464b))
- return evaluated theme from ConfigScanner.getThemeProperty method ([5dbb337](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/5dbb337e7518c4fc35ddbb07b62f3b615ce0a899))
- use and emit custom classes ([7fd741c](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/7fd741ca7f6a09ec653c71988f984a35a0dde869))
- **types:** add missing 'group' type for group-\* variants (fixes [#53](https://www.github.com/muhammadsammy/tailwindcss-classnames/issues/53)) ([dbf7f20](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/dbf7f2009989246eea91e587d14a248a57733258))
- **types:** group type replaces group-hover/ group-focus variants ([7381d13](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/7381d13252eb58cdc44073020856995692dfe711))
- prefix generated background position and size classes with ([f9dcd04](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/f9dcd04f29b6260fd6246919d5080de1675114e6))
- remove false positive warning message for pseudo-classes generation ([d9663d6](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/d9663d63ef5c2f86f8899ad98cdb5a806d7dde2e))
- remove hard coded values in translate generation ([5fca805](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/5fca805e28887aaecaf301647ca4b38cc11d2ca6))
- use correct lodash package imports ([3a041b3](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/3a041b3f35a7969d18cb22f92bf0d7fd7d7c67be))
- use correct prefix for font sizes types ([c5b6640](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/c5b66408a52122be70f02aa96a62660a967d49d9))

### Code Refactoring

- remove pseudoselector functions ([6c46bc5](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/6c46bc5bf3aa40994577d7ba3d11a9264e4bdc38))

### [2.0.4](https://github.com/muhammadsammy/tailwindcss-classnames/compare/v1.9.0...v2.0.4) (2021-02-20)

### ⚠ BREAKING CHANGES

- rename CLI args and improve its output (resolves #116)

### Features

- add `max-width-prose` class (fixes [#101](https://github.com/muhammadsammy/tailwindcss-classnames/issues/101)) ([#113](https://github.com/muhammadsammy/tailwindcss-classnames/issues/113)) ([c130f57](https://github.com/muhammadsammy/tailwindcss-classnames/commit/c130f5780c701d7beeb444721a1a7804b49bff32))
- add `overflow-ellipsis` and `overflow-clip` utilities (close [#109](https://github.com/muhammadsammy/tailwindcss-classnames/issues/109)) ([d8fd228](https://github.com/muhammadsammy/tailwindcss-classnames/commit/d8fd22877ce6209d9a37674070a3a8f90b2b980b))
- add `transform-gpu` utility classname (closes [#110](https://github.com/muhammadsammy/tailwindcss-classnames/issues/110)) ([53f4973](https://github.com/muhammadsammy/tailwindcss-classnames/commit/53f4973e0ac0c3c77f58c5ba9be0908796ad737e))
- add cursor-helper by default ([2fa990e](https://github.com/muhammadsammy/tailwindcss-classnames/commit/2fa990e6b0d20e584e26f34c202c6e08f4e7ee55))
- add more dark mode varints by default ([43fee47](https://github.com/muhammadsammy/tailwindcss-classnames/commit/43fee47a1b1a1647437be57093103921731090c4))
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
- use and emit custom classes ([7fd741c](https://github.com/muhammadsammy/tailwindcss-classnames/commit/7fd741ca7f6a09ec653c71988f984a35a0dde869))

### [2.0.3](https://www.github.com/muhammadsammy/tailwindcss-classnames/compare/2.0.1...v2.0.3) (2021-02-19)

### Features

- add cursor-helper by default ([2fa990e](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/2fa990e6b0d20e584e26f34c202c6e08f4e7ee55))
- add more dark mode varints by default ([43fee47](https://www.github.com/muhammadsammy/tailwindcss-classnames/commit/43fee47a1b1a1647437be57093103921731090c4))

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
