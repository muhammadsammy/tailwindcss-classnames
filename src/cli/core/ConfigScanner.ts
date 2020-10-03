import _ from 'lodash';
import {defaultTailwindConfig} from '../lib/defaultTailwindConfig';
import {TTailwindCSSConfig, TConfigVariants, TConfigFuture} from '../lib/types';
import {TConfigTheme, TThemeItems} from '../lib/types';
/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-return */

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

  public getTheme = (): TThemeItems => {
    const evaluateCoreTheme = (): TThemeItems => {
      const coreTheme = _.omit(this.themeConfig, 'extend');
      const valueEvaluator = new ThemeClosuresEvaluator(coreTheme);
      for (const [key, value] of Object.entries(this.themeConfig)) {
        coreTheme[key as keyof TThemeItems] = valueEvaluator.evaluate(value);
      }
      return coreTheme;
    };

    const evaluateThemeExtend = (): Partial<TConfigTheme['extend']> => {
      const themeExtend = this.themeConfig.extend;
      if (themeExtend) {
        const valueEvaluator = new ThemeClosuresEvaluator(themeExtend);
        for (const [key, value] of Object.entries(themeExtend))
          themeExtend[key as keyof TThemeItems] = valueEvaluator.evaluate(value);
      }
      return themeExtend;
    };

    this.themeConfig = _.merge(evaluateCoreTheme(), evaluateThemeExtend());
    delete this.themeConfig?.extend;

    return this.themeConfig;
  };

  public getVariants = (): TConfigVariants => this.variantsConfig;

  public getThemeProperty = (
    themeProperty: keyof TThemeItems,
  ): [string[], Array<string | Record<string, string>>] => {
    return [
      Object.keys(this.getTheme()[themeProperty]),
      Object.values(this.getTheme()[themeProperty]),
    ];
  };
}

class ThemeClosuresEvaluator {
  constructor(private themeConfig: Partial<TThemeItems>) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public evaluate(value: any): any {
    if (_.isFunction(value)) {
      return value(this.theme, {
        negative: ThemeClosuresEvaluator.negative.bind(this),
        breakpoints: ThemeClosuresEvaluator.breakpoints.bind(this),
      });
    } else {
      return value;
    }
  }

  private theme = (path: string): Record<string, unknown> => {
    return _.get(this.themeConfig, _.trim(path, `'"`)) as Record<
      string,
      Record<string, string> | string
    >;
  };

  private static negative(item: Record<string, string>): Record<string, string> {
    const itemCopy = {...item};
    for (const [key] of Object.entries(itemCopy)) {
      itemCopy['-' + key] = itemCopy[key];
      delete itemCopy[key];
    }
    return itemCopy;
  }

  private static breakpoints(item: Record<string, string>): Record<string, string> {
    const itemCopy = {...item};
    for (const [key] of Object.entries(itemCopy)) {
      itemCopy['screen-' + key] = itemCopy[key];
      delete itemCopy[key];
    }
    return itemCopy;
  }
}
