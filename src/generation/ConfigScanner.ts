import {defaultThemeConfig, defaultVariants} from './utils/defaultTailwindConfig';
import _ from 'lodash';

export class ConfigScanner {
  private readonly prefix: string;
  private readonly separator: string;
  private themeConfig: IThemeConfig;
  private readonly variantsConfig: IVariantsConfig;

  constructor(tailwindConfig: TailwindConfig) {
    this.prefix = _.isEmpty(tailwindConfig?.prefix) ? '' : (tailwindConfig.prefix as string);
    this.separator = _.isEmpty(tailwindConfig.separator)
      ? ':'
      : (tailwindConfig.separator as string);
    this.variantsConfig = _.isEmpty(tailwindConfig.variants)
      ? defaultVariants // Order does matter, defaultVariants will be overridden by themeVariants.
      : {...defaultVariants, ...tailwindConfig.variants};
    this.themeConfig = _.merge(
      {...defaultThemeConfig, ...tailwindConfig.theme},
      tailwindConfig.theme?.extend,
    );
  }

  public getPrefix = (): string => this.prefix;

  public getSeparator = (): string => this.separator;

  public getTheme = (): IThemeConfig => {
    const theme = (path: string): Record<string, unknown> => {
      return _.get(this.themeConfig, _.trim(path, `'"`)) as Record<
        string,
        Record<string, string> | string
      >;
    };

    const utils = {
      negative(item: {[key: string]: string}) {
        const itemCopy = {...item};
        for (const [key] of Object.entries(itemCopy)) {
          itemCopy['-' + key] = itemCopy[key];
          delete itemCopy[key];
        }
        return itemCopy;
      },
      breakpoints(item: {[key: string]: string}) {
        const itemCopy = {...item};
        for (const [key] of Object.entries(itemCopy)) {
          itemCopy['screen-' + key] = itemCopy[key];
          delete itemCopy[key];
        }
        return itemCopy;
      },
    };

    for (const [key, value] of Object.entries(this.themeConfig)) {
      if (_.isFunction(value)) {
        this.themeConfig[key as keyof IThemeConfig] = value(theme, utils) as Record<
          string,
          Record<string, string> | string
        >;
      }
    }

    return this.themeConfig;
  };

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
