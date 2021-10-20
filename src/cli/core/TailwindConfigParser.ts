import _ from 'lodash';
import {defaultTailwindConfig} from '../lib/defaultTailwindConfig';
import {TTailwindCSSConfig, TConfigDarkMode, TConfigPlugins} from '../types/config';
import {TConfigTheme, TThemeItems} from '../types/config';
import {baseVariants} from './constants/baseVariants';
import {tailwindColors} from './constants/tailwindColors';
/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-return */

/**
 * Parses the tailwind config object
 */
export class TailwindConfigParser {
  private readonly _mode: string | undefined;
  private readonly _prefix: string;
  private readonly _separator: string;
  private readonly _darkMode: TConfigDarkMode;
  private readonly _themeConfig: TConfigTheme;
  private _evaluatedTheme: TConfigTheme | null;
  private readonly _pluginsConfig: TConfigPlugins;

  constructor(tailwindConfig: TTailwindCSSConfig, plugins: TConfigPlugins) {
    this._mode = tailwindConfig?.mode;
    this._prefix = _.isEmpty(tailwindConfig?.prefix) ? '' : (tailwindConfig.prefix as string);
    this._darkMode = _.isEmpty(tailwindConfig?.darkMode)
      ? false
      : (tailwindConfig.darkMode as TConfigDarkMode);
    this._separator = _.isEmpty(tailwindConfig.separator)
      ? ':'
      : (tailwindConfig.separator as string);
    this._themeConfig = {...defaultTailwindConfig.theme, ...tailwindConfig.theme};
    this._evaluatedTheme = null;
    this._pluginsConfig = plugins;
  }

  /**
   *  Gets the config prefix value
   */
  public getPrefix = (): string => this._prefix;

  /**
   *  Gets the config dark mode value
   */
  public getDarkMode = (): TConfigDarkMode => this._darkMode;

  /**
   * Gets the config separator value
   */
  public getSeparator = (): string => this._separator;

  /**
   * Gets the config plugins value
   */
  public getPlugins = (): TConfigPlugins | null => {
    const {pluginTypography, pluginCustomForms} = this._pluginsConfig;

    return pluginTypography || pluginCustomForms ? this._pluginsConfig : null;
  };

  /**
   *  Gets the config theme object
   */
  public getTheme = (): TThemeItems => {
    // Check whether config was evaluated before; if yes, return cached result instead of re-calc
    if (this._evaluatedTheme) {
      return this._evaluatedTheme;
    }

    /** Evaluate function closures inside theme config and get the evaluated theme object */
    const evaluateTheme = (valueSourceTheme?: TThemeItems): TThemeItems => {
      // Pick the theme config items except theme.extend
      const coreTheme = _.omit(this._themeConfig, 'extend');
      // Iterate over theme object items and run the evaluator on it
      const valueEvaluator = new ThemeClosuresEvaluator(coreTheme);
      for (const [key, value] of Object.entries(this._themeConfig)) {
        let evaluatorResult = valueEvaluator.evaluate(value, valueSourceTheme);
        // Need to make sure that extensions for specific properties are considered
        // For example when 'width' is extended, which is originally based on spacing
        if (valueSourceTheme && _.isObject(evaluatorResult)) {
          const sourceValue = valueSourceTheme[key as keyof TThemeItems];
          evaluatorResult = {...(_.isObject(sourceValue) ? sourceValue : {}), ...evaluatorResult};
        }
        coreTheme[key as keyof TThemeItems] = evaluatorResult;
      }

      // Return the result of evaluation
      return coreTheme;
    };

    /** Evaluate function closures inside theme.extend config and get the evaluated theme.extend object */
    const evaluateThemeExtend = (): Partial<TConfigTheme['extend']> => {
      // Get the theme.extend property value
      const themeExtend = this._themeConfig.extend;

      // Only when theme.extend exists...
      if (themeExtend) {
        // Iterate over every item and evaluate closures in it
        const valueEvaluator = new ThemeClosuresEvaluator(themeExtend);
        for (const [key, value] of Object.entries(themeExtend))
          themeExtend[key as keyof TThemeItems] = valueEvaluator.evaluate(value);
      }

      // Return the result of the evaluation
      return themeExtend;
    };

    // Merge theme with extensions
    const themeWithMergedExtend = _.merge(evaluateTheme(), evaluateThemeExtend());
    // Evaluate the theme again, however taking the values from the merge result
    this._evaluatedTheme = evaluateTheme(themeWithMergedExtend);
    delete this._evaluatedTheme?.extend;

    // Return the evaluated theme
    return this._evaluatedTheme;
  };

  /**
   * Get the pseudoclass variants based on config.
   * @param themeProperty The theme property name
   */
  public getVariants = (): string[] => {
    const variants = baseVariants;

    // get responsive variants
    const [breakpoints] = this.getThemeProperty('screens');
    breakpoints.map((breakpointVariant: string) => {
      variants.push(breakpointVariant);
    });

    // Add dark variant
    if (!!this.getDarkMode() !== false) {
      variants.push('dark');
    }

    return variants;
  };

  /**
   * Get the value (and key) of a supplied theme property.
   * @param themeProperty The theme property name
   */
  public getThemeProperty = (
    themeProperty: keyof TThemeItems,
  ): [string[], Array<string | Record<string, string>>] => {
    return [
      Object.keys(this.getTheme()[themeProperty]),
      Object.values(this.getTheme()[themeProperty]),
    ];
  };
}

/**
 * The class responsible for evaluating the closures inside the config.
 */
class ThemeClosuresEvaluator {
  constructor(private themeConfig: Partial<TThemeItems>) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public evaluate(value: any, valueSourceTheme?: TThemeItems): any {
    // If a value is a function...
    if (_.isFunction(value)) {
      // evaluate the value by running the evaluator methods in this class.
      return value({
        colors: tailwindColors,
        theme: this.makeThemePathResolver(valueSourceTheme || this.themeConfig),
        negative: ThemeClosuresEvaluator.negative.bind(this),
        breakpoints: ThemeClosuresEvaluator.breakpoints.bind(this),
      });
    }
    // Otherwise, return the value.
    else {
      return value;
    }
  }

  /**
   * Creates evaluator for `theme()` functions/closures in config file
   */
  private makeThemePathResolver =
    (theme: Partial<TThemeItems>) =>
    (path: string): Record<string, unknown> => {
      return _.get(theme, _.trim(path, `'"`)) as Record<string, Record<string, string> | string>;
    };

  /**
   * Evaluate `negative()` functions/closures
   */
  private static negative(item: Record<string, string>): Record<string, string> {
    const itemCopy = {...item};
    for (const [key] of Object.entries(itemCopy)) {
      itemCopy['-' + key] = itemCopy[key];
      delete itemCopy[key];
    }
    return itemCopy;
  }

  /**
   * Evaluate `breakpoints()` functions/closures
   */
  private static breakpoints(item: Record<string, string>): Record<string, string> {
    const itemCopy = {...item};
    for (const [key] of Object.entries(itemCopy)) {
      itemCopy['screen-' + key] = itemCopy[key];
      delete itemCopy[key];
    }
    return itemCopy;
  }
}
