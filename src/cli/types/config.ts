import {defaultTailwindConfig} from '../lib/defaultTailwindConfig';

export type TTailwindCSSConfig = Partial<
  typeof defaultTailwindConfig & Record<'separator' | 'prefix', string>
>;

export type TConfigDarkMode = false | 'media' | 'class';

export type TConfigTheme = TThemeItems & {extend?: TThemeItems};

export type TConfigVariants = TVariantsItems & {extend?: Partial<TVariantsItems>};

export type TConfigPlugins = Partial<Record<'pluginTypography' | 'pluginCustomForms', boolean>>;

export type TThemeItems = typeof defaultTailwindConfig.theme;

type TVariantsItems = typeof defaultTailwindConfig.variants;
