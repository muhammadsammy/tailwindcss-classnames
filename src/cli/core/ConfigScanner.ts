import _ from 'lodash';
import {defaultTailwindConfig} from '../lib/defaultTailwindConfig';
import {TTailwindCSSConfig, TConfigVariants, TConfigDarkMode} from '../lib/types/config';
import {TConfigTheme, TThemeItems} from '../lib/types/config';
/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-return */

export class ConfigScanner {
  private readonly _prefix: string;
  private readonly _separator: string;
  private readonly _darkMode: TConfigDarkMode;
  private _themeConfig: TConfigTheme;
  private readonly _variantsConfig: TConfigVariants;

  constructor(tailwindConfig: TTailwindCSSConfig) {
    this._prefix = _.isEmpty(tailwindConfig?.prefix) ? '' : (tailwindConfig.prefix as string);
    this._darkMode = _.isEmpty(tailwindConfig?.darkMode)
      ? false
      : (tailwindConfig.darkMode as TConfigDarkMode);
    this._separator = _.isEmpty(tailwindConfig.separator)
      ? ':'
      : (tailwindConfig.separator as string);
    this._variantsConfig = _.isEmpty(tailwindConfig.variants)
      ? defaultTailwindConfig.variants // Order does matter, defaultVariants will be overridden by themeVariants.
      : {...defaultTailwindConfig.variants, ...tailwindConfig.variants};
    this._themeConfig = {...defaultTailwindConfig.theme, ...tailwindConfig.theme};
  }

  public getPrefix = (): string => this._prefix;

  public getDarkMode = (): TConfigDarkMode => this._darkMode;

  public getSeparator = (): string => this._separator;

  public getTheme = (): TThemeItems => {
    const evaluateCoreTheme = (): TThemeItems => {
      const coreTheme = _.omit(this._themeConfig, 'extend');
      const valueEvaluator = new ThemeClosuresEvaluator(coreTheme);
      for (const [key, value] of Object.entries(this._themeConfig)) {
        coreTheme[key as keyof TThemeItems] = valueEvaluator.evaluate(value);
      }
      return coreTheme;
    };

    const evaluateThemeExtend = (): Partial<TConfigTheme['extend']> => {
      const themeExtend = this._themeConfig.extend;
      if (themeExtend) {
        const valueEvaluator = new ThemeClosuresEvaluator(themeExtend);
        for (const [key, value] of Object.entries(themeExtend))
          themeExtend[key as keyof TThemeItems] = valueEvaluator.evaluate(value);
      }
      return themeExtend;
    };

    this._themeConfig = _.merge(evaluateCoreTheme(), evaluateThemeExtend());
    delete this._themeConfig?.extend;

    return this._themeConfig;
  };

  public getVariants = (): TConfigVariants => this._variantsConfig;

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
