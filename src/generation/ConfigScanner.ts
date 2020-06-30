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
    return {
      colorsNames: Object.keys(this.themeConfig),
      colorsShades: Object.values(this.themeConfig),
    };
  };

  public getThemeBreakpoints = (): string[] => {
    return Object.keys(this.themeConfig.screens);
  };

  public getThemeOpacities = (): {[key: string]: string} => {
    return this.themeConfig.opacity;
  };

  public getThemeSpacing = (): {spacingKeys: string[]; spacingValues: string[]} => {
    return {
      spacingKeys: Object.keys(this.themeConfig.spacing),
      spacingValues: Object.values(this.themeConfig.spacing),
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
