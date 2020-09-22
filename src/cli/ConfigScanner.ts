import _ from 'lodash';
import {defaultTailwindConfig} from './lib/defaultTailwindConfig';
import {TTailwindCSSConfig, TConfigTheme, TConfigVariants, TConfigFuture} from './lib/types';

export class ConfigScanner {
  private readonly future: TConfigFuture;
  private readonly prefix: string;
  private readonly separator: string;
  private themeConfig: TConfigTheme;
  private readonly variantsConfig: TConfigVariants;

  constructor(tailwindConfig: TTailwindCSSConfig) {
    this.future = tailwindConfig?.future ?? {};
    this.prefix = _.isEmpty(tailwindConfig?.prefix) ? '' : (tailwindConfig.prefix as string);
    this.separator = _.isEmpty(tailwindConfig.separator)
      ? ':'
      : (tailwindConfig.separator as string);
    this.variantsConfig = _.isEmpty(tailwindConfig.variants)
      ? defaultTailwindConfig.variants // Order does matter, defaultVariants will be overridden by themeVariants.
      : {...defaultTailwindConfig.variants, ...tailwindConfig.variants};
    this.themeConfig = {...defaultTailwindConfig.theme, ...tailwindConfig.theme};
  }

  public getPrefix = (): string => this.prefix;

  public getSeparator = (): string => this.separator;

  public getDeprecations = (): TConfigFuture => this.future;

  public getTheme = (): TConfigTheme => {
    for (const [key, value] of Object.entries(this.themeConfig)) {
      if (_.isFunction(value)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.themeConfig[key as keyof TConfigTheme] = value(
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
          this.themeConfig.extend[key as keyof Omit<TConfigTheme, 'extend'>] = value(
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

  public getVariants = (): TConfigVariants => this.variantsConfig;

  public getThemeProperty = (
    themeProperty: keyof Omit<TConfigTheme, 'extend'>,
  ): [string[], Array<string | Record<string, string>>] => {
    return [
      Object.keys(this.themeConfig[themeProperty]),
      Object.values(this.themeConfig[themeProperty]) as Array<string | Record<string, string>>,
    ];
  };
}
