import _ from 'lodash';
import {defaultTailwindConfig} from '../lib/defaultTailwindConfig';
import {
  TTailwindCSSConfig,
  TConfigVariants,
  TConfigDarkMode,
  TConfigPlugins,
} from '../types/config';
import {TConfigTheme, TThemeItems} from '../types/config';
/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-return */

/**
 * Parses the tailwind config object
 */
export class TailwindConfigParser {
  private readonly _mode: string | undefined;
  private readonly _prefix: string;
  private readonly _separator: string;
  private readonly _darkMode: TConfigDarkMode;
  private _themeConfig: TConfigTheme;
  private readonly _variantsConfig: TConfigVariants;
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
    this._variantsConfig = _.isEmpty(tailwindConfig.variants)
      ? defaultTailwindConfig.variants // Order does matter, defaultVariants will be overridden by themeVariants.
      : {...defaultTailwindConfig.variants, ...tailwindConfig.variants};
    this._themeConfig = {...defaultTailwindConfig.theme, ...tailwindConfig.theme};
    this._pluginsConfig = plugins;
  }

  /**
   *  Gets the config mode value
   */
  public getMode = (): string | undefined => this._mode;

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
    /** Evaluate function closures inside theme config and get the evaluated theme object */
    const evaluateCoreTheme = (): TThemeItems => {
      // Pick the theme config items except theme.extend
      const coreTheme = _.omit(this._themeConfig, 'extend');
      // Iterate over theme object items and run the evaluator on it
      const valueEvaluator = new ThemeClosuresEvaluator(coreTheme);
      for (const [key, value] of Object.entries(this._themeConfig)) {
        coreTheme[key as keyof TThemeItems] = valueEvaluator.evaluate(value);
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

    // Set theme config to the result of merging evaluation of both theme and theme.extend objects
    this._themeConfig = _.merge(evaluateCoreTheme(), evaluateThemeExtend());
    delete this._themeConfig?.extend;

    // Return the theme config
    return this._themeConfig;
  };

  /**
   * Get config variants object
   */
  public getVariants = (): Omit<TConfigVariants, 'extend'> => {
    // Get the `variants.extend` object
    const variantsConfigExtend = this._variantsConfig?.extend;

    // If the variants.extend exists...
    if (!!variantsConfigExtend) {
      // Return the result of merging the variants with extend
      return _.mergeWith(
        this._variantsConfig,
        variantsConfigExtend,
        (variantsValues, variantsExtendValues) => {
          if (_.isArray(variantsValues)) {
            return variantsValues.concat(variantsExtendValues);
          }
        },
      );
      // Otherwise...
    } else {
      // Return the variants
      return this._variantsConfig;
    }
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
  public evaluate(value: any): any {
    // If a value is a function...
    if (_.isFunction(value)) {
      // evaluate the value by running the evaluator methods in this class.
      return value(this.theme, {
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
   * Evaluate `theme()` functions/closures
   */
  private theme = (path: string): Record<string, unknown> => {
    return _.get(this.themeConfig, _.trim(path, `'"`)) as Record<
      string,
      Record<string, string> | string
    >;
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
