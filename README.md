# tailwindcss-typescript

Typing for Tailwindcss

[TailwindCSS](https://tailwindcss.com/) is a CSS library that has gained a lot of traction. The developer experience is pretty epic and you ensure a low footprint on your css by composing existing classes for most of your css. The problem though is that there is no typing which excludes discoverability in an API that would benefit a lot with discoverability. Imagine not having to look at the docs everytime you can not remember the name of a class, you can just earch right in your code. This is what **tailwindcss-typescript** does.

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

IMAGE!!!

## Dynamic classes

Since we are using **classnames** you can also add your classes dynamically:

```js
import { tw } from 'tailwindcss-typescript'

tw('border-none', 'rounded-sm'), {
  ['bg-gray-200']: true,
})
```

## Composing classes

Since we are using **classnames** you can also add your classes dynamically:

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

By default you have all the classes available as types, though you mightnot use all of them. You can customize your own by:

```ts
import { TTailwind, tw, TBackgroundColor, TBackgroundSize } from 'tailwindcss-typescript';

export const myTw: TTailwind<TBackgroundColor | TBackgroundSize> = (...args) => tw(...args);
```

You can also base it on the groups of functionality:

```ts
import { TTailwind, tw, TBackgrounds, TBorders } from 'tailwindcss-typescript';

export const myTw: TTailwind<TBackgrounds | TBorders> = tw;
```
