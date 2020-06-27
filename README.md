# tailwindcss-classnames

Functional typed classnames for TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is a CSS library that has gained a lot of traction. The developer experience is pretty epic and you ensure a low footprint on your css by composing existing classes for most of your css.

## So why mess with it?

TailwindCSS is based on strings and with some nice tooling on top like [TailwindCSS VSCode extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) you get a pretty descent experience. That said, there are limitations to a purely declarative approach of strings. When using **tailwindcss-classnames** you will get additional power in the form of:

- **Validation of classnames**: You can not write the wrong classname, cause the API only allows you to insert valid classnames
- **Functional approach**: Since we are working in Typescript we get more freedom in using functional powers like composition and dynamic composition
- **Defining by variables**: Even though it is nice to write TailwindCSS inline with your elements, it does not scale. You want to move definitions outside of the component for reusability and composition

You can not get this experience using pure TailwindCSS and the VSCode extension, but you do get it with **tailwindcss-classnames**.

[![Edit tailwindcss-classnames](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/elegant-lederberg-sih5r?fontsize=14&hidenavigation=1&theme=dark)

## Install

Please [follow the guide](https://tailwindcss.com/docs/installation/) to set up **TailwindCSS**. Now do:

```
npm install tailwindcss-classnames
```

The project is literally the [classnames](https://www.npmjs.com/package/classnames) project with custom typing and functions for applying pseudo elements. That means it arrives at your browser at approximately **422b** minified and gzipped ([bundlephobia](https://bundlephobia.com/result?p=classnames@2.2.6)).

## Create classes

```js
import { classnames } from 'tailwindcss-classnames';

classnames('border-none', 'rounded-sm');
```

The arguments passed to **classnames** is typed, which means you get discoverability. You can even search for the supported classes:

![DISCOVER](/discover.png)

## Dynamic classes

Since we are using **classnames** you can also add your classes dynamically:

```js
import { classnames } from 'tailwindcss-classnames';

classnames('border-none', 'rounded-sm', {
  ['bg-gray-200']: true,
});
```

## Composing classes

Even though **classnames** just returns a string, it is a special typed string that you can compose into other definitions.

```js
import { classnames } from 'tailwindcss-classnames';

export const button = classnames('border-none', 'rounded-sm');

export const redButton = classnames(button, 'bg-red-100');
```

## Using with React

Since React has excellent typing support I want to give an example of how you could use it.

```tsx
// styles.ts
import { classnames } from 'tailwindcss-classnames';

export const form = classnames('container', 'w-full');

export const button = classnames('border-none', 'rounded-sm');

export const alertButton = classnames(button, 'bg-red-100');

export const disabled = classnames('opacity-25', 'bg-gray-100');

export const submitButton = (disabled: boolean) =>
  classnames(styles.button, {
    [styles.disabled]: disabled,
  });

// App.tsx
import * as React from 'react';
import * as styles from './styles';

export const App: React.FC<{ disabled }> = ({ disabled }) => {
  return (
    <form className={styles.form}>
      <button type="submit" className={styles.submitButton(disabled)}>
        Submit
      </button>
      <button className={styles.alertButton}>Cancel</button>
    </form>
  );
};
```

Another custom React button component example:

<!-- prettier-ignore -->
```tsx
// buttonStyles.ts

import {tw} from "../tailwindcss-classnames"

export buttonStyles = {
  minimal: tw(/* some tailwindcss classes */),
  default: tw(/* some tailwindcss classes */),
  primary: tw(/* some tailwindcss classes */),
  outline: tw(/* some tailwindcss classes */),
  danger: tw(/* some tailwindcss classes */),
  disabled: tw(/* some tailwindcss classes */),
}

// Button.tsx

import React from "react"
import {tw, TTailwindString} from "../tailwindcss-classnames"
import {buttonStyles} from "./buttonStyles"

type Props = {
  type: "button" | "submit" | "reset"
  className?: TTailwindString | string
  variant?: "minimal" | "default" | "primary" | "outline" | "danger"
}

export const Button: React.FunctionComponent<Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const {type, children, className, variant = "default", onClick} = props
  const {disabled} = props
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${
        disabled ? buttonStyles.disabled : buttonStyles[variant]
      }`}
    >
      {children}
    </button>
  )
}
```

## Using the CLI to generate custom types

The default types exported from this package are tailwindcss default ones.
But if you modified some classes in your tailwind config file or want to add external custom classes, you can use the CLI tool to do this.

### CLI arguments for tailwind config:

- -c --config The name or relative path of TailwindCSS config file.
- -o --output _(Optional)_ The name or relative path of generated file
- -f --classesFile _(Optional)_ The name or relative path of the file with the custom types
- -t --typeName _(Optional)_ The name of the type exported from file containing the custom classes

Add it in your package.json scripts:

```json
"scripts": {
  "generate-types": "tailwindcss-classnames --config tailwind.config.js"
}
```

or simply run `npx tailwindcss-classnames`

**example:**

If you want to add types from external file named `my-custom-classes.ts`
containing the following code:

```ts
export type MyClassesTypes =
  |"button"
  | "sidebar"
  | "navbar"
  | ...
```

You will excute the CLI with the following arguments:

`tailwindcss-classnames --config path/to/tailwind.config.js --classesFile my-custom-classes --typeName MyClassesTypes`
