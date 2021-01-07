import {defaultTailwindConfig} from '../defaultTailwindConfig';

export type TTailwindCSSConfig = Partial<
  typeof defaultTailwindConfig & Record<'separator' | 'prefix', string>
>;

export type TConfigDarkMode = false | 'media' | 'class';

export type TConfigTheme = TThemeItems & {extend?: TThemeItems};

export type TConfigVariants = TVariantsItems & {extend?: Partial<TVariantsItems>};

export type TThemeItems = typeof defaultTailwindConfig.theme;

type TVariantsItems = typeof defaultTailwindConfig.variants;
