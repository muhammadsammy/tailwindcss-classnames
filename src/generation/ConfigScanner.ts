import {defaultThemeConfig, defaultVariants} from './utils/defaultTailwindConfig';
import _ from 'lodash';

export class ConfigScanner {
  public readonly prefix: string;
  public readonly separator: string;
  public readonly themeConfig: IThemeConfig;
  private readonly variantsConfig: IVariantsConfig;

  // FIXME: theme config does not consider function values

  constructor(tailwindConfig: TailwindConfig) {
    this.prefix = _.isEmpty(tailwindConfig?.prefix) ? '' : (tailwindConfig.prefix as string);
    this.separator = _.isEmpty(tailwindConfig.separator)
      ? ':'
      : (tailwindConfig.separator as string);
    this.variantsConfig = _.isEmpty(tailwindConfig.variants)
      ? defaultVariants // Order does matter, defaultVariants will be overridden by themeVariants.
      : ({...defaultVariants, ...tailwindConfig.variants} as IVariantsConfig);

    this.themeConfig = _.merge(
      {},
      {...defaultThemeConfig, ...tailwindConfig.theme},
      tailwindConfig.theme?.extend,
    ) as IThemeConfig;
  }

  public getThemeColors = (): {colorsNames: string[]; colorsShades: ColorShades} => {
    const themeColors = _.isEmpty(this.themeConfig?.colors)
      ? defaultThemeConfig.colors
      : (this.themeConfig?.colors as {
          [key: string]: string | {[key: string]: string};
        });
    const extendedThemeColors = this.themeConfig?.extend?.colors;
    const allConfigColors = extendedThemeColors
      ? {...themeColors, ...extendedThemeColors}
      : themeColors;

    return {
      colorsNames: Object.keys(allConfigColors),
      colorsShades: Object.values(allConfigColors) as ColorShades,
    };
  };

  public getThemeBreakpoints = (): string[] => {
    const themeBreakpoints = _.isEmpty(this.themeConfig?.screens)
      ? defaultThemeConfig.screens
      : (this.themeConfig?.screens as {
          [key: string]: string;
        });
    const extendedThemeBreakpoints = this.themeConfig?.extend?.screens;
    const allConfigBreakpoints = extendedThemeBreakpoints
      ? {...themeBreakpoints, ...extendedThemeBreakpoints}
      : themeBreakpoints;

    return Object.keys(allConfigBreakpoints);
  };

  public getThemeOpacities = (): {[key: string]: string} => {
    const themeOpacities = _.isEmpty(this.themeConfig?.opacity)
      ? defaultThemeConfig.opacity
      : (this.themeConfig?.opacity as {
          [key: string]: string;
        });
    const extendedThemeOpacities = this.themeConfig?.extend?.opacity;

    return extendedThemeOpacities ? {...themeOpacities, ...extendedThemeOpacities} : themeOpacities;
  };

  public getThemeSpacing = (): {spacingKeys: string[]; spacingValues: string[]} => {
    const themeSpacing = _.isEmpty(this.themeConfig?.spacing)
      ? defaultThemeConfig.spacing
      : (this.themeConfig?.spacing as {
          [key: string]: string;
        });
    const extendedThemeSpacing = this.themeConfig?.extend?.spacing;
    const allConfigSpacing = extendedThemeSpacing
      ? {...themeSpacing, ...extendedThemeSpacing}
      : themeSpacing;

    return {
      spacingKeys: Object.keys(allConfigSpacing),
      spacingValues: Object.values(allConfigSpacing),
    };
  };

  public getPseudoClassVariants = (): {
    classesCategories: string[];
    classesVariants: string[][];
  } => {
    return {
      classesCategories: Object.keys(this.variantsConfig),
      classesVariants: Object.values(this.variantsConfig),
    };
  };
}
