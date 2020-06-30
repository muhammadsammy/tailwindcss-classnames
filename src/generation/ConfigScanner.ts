import {defaultThemeConfig, defaultVariants} from './utils/defaultTailwindConfig';
import _ from 'lodash';

export class ConfigScanner {
  private readonly prefix: string;
  private readonly separator: string;
  private readonly themeConfig: IThemeConfig;
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

  public getPrefix = (): string => this.prefix;

  public getSeparator = (): string => this.separator;

  public getTheme = (): IThemeConfig => this.themeConfig;

  public getVariants = (): IVariantsConfig => this.variantsConfig;

  public getThemeProperty = (
    themeProperty: keyof IThemeProps,
  ): [string[], Array<string | {[key: string]: string}>] => {
    return [
      Object.keys(this.themeConfig[themeProperty]),
      Object.values(this.themeConfig[themeProperty]),
    ];
  };
}
