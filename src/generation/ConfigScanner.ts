import { TailwindConfig, IThemeConfig, IVariantsConfig } from './TailwindConfigTypes';
import { defaultThemeConfig, defaultVariants } from './utils/defaultTailwindConfig';

type ColorShades = string[] | Array<{ [key: string]: string }>;

export class ConfigScanner {
  public readonly prefix: string;
  public readonly separator: string;
  public readonly themeConfig: IThemeConfig;
  private readonly variantsConfig: IVariantsConfig;

  constructor(tailwindConfig: TailwindConfig) {
    this.prefix = tailwindConfig.prefix ?? '';
    this.separator = tailwindConfig.separator ?? ':';
    this.variantsConfig = tailwindConfig.variants ?? defaultVariants;
    this.themeConfig = tailwindConfig.theme ?? (defaultThemeConfig as IThemeConfig);
  }

  public getThemeColors = (): { colorsNames: string[]; colorsShades: ColorShades } => {
    const themeColors = this.themeConfig?.colors ?? defaultThemeConfig.colors;
    const extendedThemeColors = this.themeConfig?.extend?.colors;
    const allConfigColors = extendedThemeColors ? { ...themeColors, ...extendedThemeColors } : themeColors;

    return {
      colorsNames: Object.keys(allConfigColors),
      colorsShades: Object.values(allConfigColors) as ColorShades,
    };
  };

  public getThemeBreakpoints = (): string[] => {
    const themeBreakpoints = this.themeConfig?.screens ?? defaultThemeConfig.screens;
    const extendedThemeBreakpoints = this.themeConfig?.extend?.screens;
    const allConfigBreakpoints = extendedThemeBreakpoints
      ? { ...themeBreakpoints, ...extendedThemeBreakpoints }
      : themeBreakpoints;

    return Object.keys(allConfigBreakpoints);
  };

  public getThemeOpacities = (): { [key: string]: string } => {
    const themeOpacities = this.themeConfig?.opacity ?? defaultThemeConfig.opacity;
    const extendedThemeOpacities = this.themeConfig?.extend?.opacity;

    return extendedThemeOpacities ? { ...themeOpacities, ...extendedThemeOpacities } : themeOpacities;
  };

  public getThemeSpacing = (): { spacingKeys: string[]; spacingValues: string[] } => {
    const themeSpacing = this.themeConfig?.spacing ?? defaultThemeConfig.spacing;
    const extendedThemeSpacing = this.themeConfig?.extend?.spacing;
    const allConfigSpacing = extendedThemeSpacing ? { ...themeSpacing, ...extendedThemeSpacing } : themeSpacing;

    return {
      spacingKeys: Object.keys(allConfigSpacing),
      spacingValues: Object.values(allConfigSpacing),
    };
  };

  public getPseudoClassVariants = (): { classesCategories: string[]; classesVariants: string[][] } => {
    const themeVariants = this.variantsConfig;
    Object.keys(themeVariants).map(key => {
      if (Object.keys(defaultVariants).includes(key)) {
        delete defaultVariants[key];
      }
    });
    const allPseudoClassVariants: { [key: string]: string[] } = {
      ...defaultVariants,
      ...themeVariants,
    };

    return {
      classesCategories: Object.keys(allPseudoClassVariants),
      classesVariants: Object.values(allPseudoClassVariants),
    };
  };
}
