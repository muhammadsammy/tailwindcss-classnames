import isEmpty from 'lodash.isempty';
import { defaultColors, defaultScreens, defaultSpacing, defaultVariants, defaultOpacities } from '../utils';

export class ConfigScanner {
  public readonly prefix: any;
  public readonly separator: any;
  public readonly themeConfig: any;
  private readonly variantsConfig: any;

  constructor(tailwindConfig: any) {
    this.variantsConfig = tailwindConfig?.variants;
    this.themeConfig = tailwindConfig?.theme;
    this.prefix = isEmpty(tailwindConfig.prefix) ? '' : tailwindConfig.prefix;
    this.separator = isEmpty(tailwindConfig.separator) ? ':' : tailwindConfig.separator;
  }

  public getThemeColors = () => {
    const themeColors = isEmpty(this.themeConfig?.colors) ? defaultColors : this.themeConfig?.colors;
    const extendedThemeColors = this.themeConfig?.extend?.colors;
    const allConfigColors = extendedThemeColors ? { ...themeColors, ...extendedThemeColors } : themeColors;
    type ColorShades = string[] | Array<{ [key: string]: string }>;
    return {
      colorsNames: Object.keys(allConfigColors),
      colorsShades: Object.values(allConfigColors) as ColorShades,
    };
  };

  public getThemeBreakpoints = () => {
    const themeBreakpoints = isEmpty(this.themeConfig?.screens) ? defaultScreens : this.themeConfig?.screens;
    const extendedThemeBreakpoints = this.themeConfig?.extend?.screens;
    const allConfigBreakpoints = extendedThemeBreakpoints
      ? { ...themeBreakpoints, ...extendedThemeBreakpoints }
      : themeBreakpoints;
    return Object.keys(allConfigBreakpoints);
  };

  public getThemeOpacities = () => {
    const themeOpacities = isEmpty(this.themeConfig?.opacity) ? defaultOpacities : this.themeConfig?.opacity;
    const extendedThemeOpacities = this.themeConfig?.extend?.opacity;
    return extendedThemeOpacities ? { ...themeOpacities, ...extendedThemeOpacities } : themeOpacities;
  };

  public getThemeSpacing = () => {
    const themeSpacing = isEmpty(this.themeConfig?.spacing) ? defaultSpacing : this.themeConfig?.spacing;
    const extendedThemeSpacing = this.themeConfig?.extend?.spacing;
    const allConfigSpacing = extendedThemeSpacing ? { ...themeSpacing, ...extendedThemeSpacing } : themeSpacing;

    return {
      spacingKeys: Object.keys(allConfigSpacing),
      spacingValues: Object.values(allConfigSpacing),
    };
  };

  public getPseudoclassVariants = () => {
    const themeVariants = isEmpty(this.variantsConfig) ? defaultVariants : this.variantsConfig;
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
