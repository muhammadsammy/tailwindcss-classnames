import {defaultThemeConfig, defaultVariants} from './utils/defaultTailwindConfig';
import _ from 'lodash';

export class ConfigScanner {
  private readonly future: TFuture;
  private readonly prefix: string;
  private readonly separator: string;
  private themeConfig: IThemeConfig;
  private readonly variantsConfig: IVariantsConfig;

  constructor(tailwindConfig: TTailwindConfig) {
    this.future = tailwindConfig?.future ?? {};
    this.prefix = _.isEmpty(tailwindConfig?.prefix) ? '' : (tailwindConfig.prefix as string);
    this.separator = _.isEmpty(tailwindConfig.separator)
      ? ':'
      : (tailwindConfig.separator as string);
    this.variantsConfig = _.isEmpty(tailwindConfig.variants)
      ? defaultVariants // Order does matter, defaultVariants will be overridden by themeVariants.
      : {...defaultVariants, ...tailwindConfig.variants};
    this.themeConfig = {...defaultThemeConfig, ...tailwindConfig.theme} as IThemeConfig;
  }

  public getPrefix = (): string => this.prefix;

  public getSeparator = (): string => this.separator;

  public getDeprecations = (): TFuture => this.future;

  public getTheme = (): IThemeConfig => {
    for (const [key, value] of Object.entries(this.themeConfig)) {
      if (_.isFunction(value)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.themeConfig[key as keyof IThemeConfig] = value(
          (path: string): Record<string, unknown> =>
            _.get(this.themeConfig, _.trim(path, `'"`)) as Record<
              string,
              Record<string, string> | string
            >,
          {
            negative,
            breakpoints,
          },
        );
      }
    }

    if (this.themeConfig.extend) {
      for (const [key, value] of Object.entries(this.themeConfig.extend)) {
        if (_.isFunction(value)) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this.themeConfig.extend[key as keyof IThemeProps] = value(
            (path: string): Record<string, unknown> =>
              _.get(this.themeConfig, _.trim(path, `'"`)) as Record<
                string,
                Record<string, string> | string
              >,
            {
              negative,
              breakpoints,
            },
          );
        }
      }
    }

    function negative(item: Record<string, string>): Record<string, string> {
      const itemCopy = {...item};
      for (const [key] of Object.entries(itemCopy)) {
        itemCopy['-' + key] = itemCopy[key];
        delete itemCopy[key];
      }
      return itemCopy;
    }
    function breakpoints(item: Record<string, string>): Record<string, string> {
      const itemCopy = {...item};
      for (const [key] of Object.entries(itemCopy)) {
        itemCopy['screen-' + key] = itemCopy[key];
        delete itemCopy[key];
      }
      return itemCopy;
    }

    this.themeConfig = _.merge(this.themeConfig, this.themeConfig?.extend);
    delete this.themeConfig?.extend;

    return this.themeConfig;
  };

  public getVariants = (): IVariantsConfig => this.variantsConfig;

  public getThemeProperty = (
    themeProperty: keyof IThemeProps,
  ): [string[], Array<string | Record<string, string>>] => {
    return [
      Object.keys(this.themeConfig[themeProperty]),
      Object.values(this.themeConfig[themeProperty]) as Array<string | Record<string, string>>,
    ];
  };
}
