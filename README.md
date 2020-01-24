# tailwindcss-typescript

Typing for Tailwindcss

[TailwindCSS](https://tailwindcss.com/) is a CSS library that has gained a lot of traction. The developer experience is pretty epic and you ensure a low footprint on your css by composing existing classes for most of your css.

## So why mess with it?

TailwindCSS is based on strings and with some nice tooling on top like [TailwindCSS VSCode extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) you get a pretty descent experience. That said, there are limitations to strings as well. When using **tailwindcss-typescript** you will get additional power in the form of:

- **Validation of classnames**: You can not write the wrong classname, cause the API only allows you to insert valid classnames
- **Functional approach**: Since we are working in Typescript we get more freedom in using functional powers like composition, event dynamic composition
- **Defining by variables**: Even though it is nice to write TailwindCSS inline with your elements, it is not as scalable as moving these definitions outside of the component definition. The challenge though is that tools like the VSCode extension does not understand these variables

## Install

Please [follow the guide](https://tailwindcss.com/docs/installation/) to set up **TailwindCSS**. Now do:

```
npm install tailwindcss-typescript
```

The project is basically only typing and it includes the [classnames](https://www.npmjs.com/package/classnames) project, which current arrives at your browser at **422b** minified and gzipped ([bundlephobia](https://bundlephobia.com/result?p=classnames@2.2.6)).

## Create classes

```js
import { tw } from 'tailwindcss-typescript';

tw('border-none', 'rounded-sm');
```

The arguments passed to **tw** is typed, which means you get discoverability and ability to search for the supported classes:

![DISCOVER](/discover.png)

## Dynamic classes

Since we are using **classnames** you can also add your classes dynamically:

```js
import { tw } from 'tailwindcss-typescript'

tw('border-none', 'rounded-sm'), {
  ['bg-gray-200']: true,
})
```

## Pseudo selectors

Since we are in a functional world we use functions to define our pseudo selectors:

```js
import { tw, hover } from 'tailwindcss-typescript';

tw('bg-gray-500', hover('bg-blue-500'));
```

## Composing classes

Even though **tw** just returns a string, it is a special typed string that you can compose into other definitions.

```js
import { tw } from 'tailwindcss-typescript';

export const button = tw('border-none', 'rounded-sm');

export const redButton = tw(button, 'bg-red-100');
```

## Using with React

Since React has excellent typing support I want to give an example of how you would use it.

```tsx
// styles.ts
import { tw, compose } from 'tailwindcss-typescript';

export const button = tw('border-none', 'rounded-sm');

export const alertButton = compose(button)('bg-red-100');

export const disabled = tw('opacity-25', 'bg-gray-100');

// App.tsx
import * as React from 'react';
import { tw } from 'tailwindcss-typescript';
import * as styles from './styles';

export const App: React.FC<{ disabled }> = ({ disabled }) => {
  return (
    <form className={tw('container', 'w-full')}>
      <button
        type="submit"
        className={tw(styles.button, {
          [styles.disabled]: disabled,
        })}
      >
        Submit
      </button>
      <button className={styles.alertButton}>Cancel</button>
    </form>
  );
};
```

## Custom typing

By default you have all the classes available as types, though you might not use all of them. You can customize your own by:

```ts
import { createCustom, TBackgroundColor, TBackgroundSize } from 'tailwindcss-typescript';

type Classes = TBackgroundColor | TBackgroundSize;

const {
  tw,
  hover,
  active,
  disabled,
  visited,
  firstChild,
  lastChild,
  oddChild,
  evenChild,
  groupHover,
  focusWithin,
} = createCustom<Classes>();

export { tw, hover, active, disabled, visited, firstChild, lastChild, oddChild, evenChild, groupHover, focusWithin };
```

You can also base it on the groups of functionality:

```ts
import { TBackgrounds, TBorders } from 'tailwindcss-typescript';

type Classes = TBackgrounds | TBorders;
```
