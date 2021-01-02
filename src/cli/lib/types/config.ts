import {defaultTailwindConfig} from '../defaultTailwindConfig';

export type TTailwindCSSConfig = Partial<
  typeof defaultTailwindConfig & Record<'separator' | 'prefix', string>
>;

export type TConfigTheme = TThemeItems & {extend?: TThemeItems};

export type TConfigVariants = typeof defaultTailwindConfig.variants;

export type TThemeItems = typeof defaultTailwindConfig.theme;
