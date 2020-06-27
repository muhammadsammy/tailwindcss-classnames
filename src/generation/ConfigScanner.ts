import { defaultThemeConfig, defaultVariants } from './utils/defaultTailwindConfig';
import isEmpty from 'lodash.isempty';

export class ConfigScanner {
  public readonly prefix: string;
  public readonly separator: string;
  public readonly themeConfig: IThemeConfig;
  private readonly variantsConfig: IVariantsConfig;

  // TODO: add all theme.extend
  // FIXME: theme config does not consider function values

  constructor(tailwindConfig: TailwindConfig) {
    this.prefix = isEmpty(tailwindConfig?.prefix) ? '' : (tailwindConfig.prefix as string);
    this.separator = isEmpty(tailwindConfig.separator) ? ':' : (tailwindConfig.separator as string);
    this.variantsConfig = isEmpty(tailwindConfig.variants)
      ? defaultVariants // Order does matter, defaultVariants will be overridden by themeVariants.
      : ({ ...defaultVariants, ...tailwindConfig.variants } as IVariantsConfig);
    this.themeConfig = { ...defaultThemeConfig, ...tailwindConfig.theme } as IThemeConfig;
  }

  public getThemeColors = (): { colorsNames: string[]; colorsShades: ColorShades } => {
    const themeColors = isEmpty(this.themeConfig?.colors)
      ? defaultThemeConfig.colors
      : (this.themeConfig?.colors as {
          [key: string]: string | { [key: string]: string };
        });
    const extendedThemeColors = this.themeConfig?.extend?.colors;
    const allConfigColors = extendedThemeColors ? { ...themeColors, ...extendedThemeColors } : themeColors;

    return {
      colorsNames: Object.keys(allConfigColors),
      colorsShades: Object.values(allConfigColors) as ColorShades,
    };
  };

  public getThemeBreakpoints = (): string[] => {
    const themeBreakpoints = isEmpty(this.themeConfig?.screens)
      ? defaultThemeConfig.screens
      : (this.themeConfig?.screens as {
          [key: string]: string;
        });
    const extendedThemeBreakpoints = this.themeConfig?.extend?.screens;
    const allConfigBreakpoints = extendedThemeBreakpoints
      ? { ...themeBreakpoints, ...extendedThemeBreakpoints }
      : themeBreakpoints;

    return Object.keys(allConfigBreakpoints);
  };

  public getThemeOpacities = (): { [key: string]: string } => {
    const themeOpacities = isEmpty(this.themeConfig?.opacity)
      ? defaultThemeConfig.opacity
      : (this.themeConfig?.opacity as {
          [key: string]: string;
        });
    const extendedThemeOpacities = this.themeConfig?.extend?.opacity;

    return extendedThemeOpacities ? { ...themeOpacities, ...extendedThemeOpacities } : themeOpacities;
  };

  public getThemeSpacing = (): { spacingKeys: string[]; spacingValues: string[] } => {
    const themeSpacing = isEmpty(this.themeConfig?.spacing)
      ? defaultThemeConfig.spacing
      : (this.themeConfig?.spacing as {
          [key: string]: string;
        });
    const extendedThemeSpacing = this.themeConfig?.extend?.spacing;
    const allConfigSpacing = extendedThemeSpacing ? { ...themeSpacing, ...extendedThemeSpacing } : themeSpacing;

    return {
      spacingKeys: Object.keys(allConfigSpacing),
      spacingValues: Object.values(allConfigSpacing),
    };
  };

  public getPseudoClassVariants = (): { classesCategories: string[]; classesVariants: string[][] } => {
    return {
      classesCategories: Object.keys(this.variantsConfig),
      classesVariants: Object.values(this.variantsConfig),
    };
  };
}
