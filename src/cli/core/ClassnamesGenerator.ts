import _ from 'lodash';
import {ConfigScanner} from './ConfigScanner';
import {nonConfigurableClassNames} from '../lib/non-configurable';
// prettier-ignore
import {TAllClassnames, Backgrounds, Layout, Borders, Tables, Effects,
        Interactivity, TransitionsAndAnimations, Transforms, Accessibility, SVG,
        FlexBox, Grid, Spacing, Sizing, Typography, TGeneratedClassnames} from '../types/classes';
import {TConfigTheme, TConfigDarkMode} from '../types/config';
import {tailwindLabsPlugins} from '../lib/tailwindlabs-plugins';

/**
 * Responsible for generating the types from a parsed config by ConfigScanner.
 */
export class ClassnamesGenerator {
  private readonly _prefix: string;
  private readonly _separator: string;
  private readonly _darkMode: TConfigDarkMode;
  private readonly _theme: Omit<TConfigTheme, 'extend'>;
  private readonly _configScanner: ConfigScanner;
  private readonly _generatedRegularClassnames: TAllClassnames;
  private readonly _generatedPseudoClassnames: string[];

  /**
   * Initializes a new instance of the `ClassesGenerator` class.
   * @param tailwindConfig The _parsed_ TailwindCSS Config.
   */
  constructor(scanner: ConfigScanner) {
    this._configScanner = scanner;
    this._prefix = this._configScanner.getPrefix();
    this._separator = this._configScanner.getSeparator();
    this._darkMode = this._configScanner.getDarkMode();
    this._theme = this._configScanner.getTheme();

    this._generatedRegularClassnames = {
      Accessibility: this.accessibility(),
      Backgrounds: this.backgrounds(),
      Borders: this.borders(),
      Tables: this.tables(),
      Effects: this.effects(),
      TransitionsAndAnimations: this.transitionsAndAnimations(),
      FlexBox: this.flexBox(),
      Grid: this.grid(),
      Spacing: this.spacing(),
      Interactivity: this.interactivity(),
      Layout: this.layout(),
      Sizing: this.sizing(),
      SVG: this.SVG(),
      Transforms: this.transforms(),
      Typography: this.typography(),
    };

    const configPlugins = this._configScanner.getPlugins();
    if (configPlugins !== null) {
      this._generatedRegularClassnames.TailwindLabsPlugins = {};
      const {pluginCustomForms, pluginTypography} = tailwindLabsPlugins;

      if (!!configPlugins.pluginCustomForms)
        this._generatedRegularClassnames.TailwindLabsPlugins.pluginCustomForms = pluginCustomForms;

      if (!!configPlugins.pluginTypography)
        this._generatedRegularClassnames.TailwindLabsPlugins.pluginTypography = pluginTypography;
    }

    this._generatedPseudoClassnames = this.pseudoClasses();
  }

  /**
   * Get the generated classnames.
   */
  public generate = (): TGeneratedClassnames => {
    return {
      regularClassnames: this._generatedRegularClassnames,
      pseudoClassnames: this._generatedPseudoClassnames,
    };
  };

  private layout = (): Layout => {
    return {
      ...nonConfigurableClassNames.layout,
      objectPosition: Object.keys(this._theme.objectPosition).map(x => 'object-' + x),
      inset: Object.keys(this._theme.inset).flatMap(insetValue => {
        return ['inset', 'inset-x', 'inset-y', 'top', 'right', 'bottom', 'left'].map(side =>
          insetValue.startsWith('-')
            ? `-${side}-${insetValue.substring(1)}`
            : `${side}-${insetValue}`,
        );
      }),
      zIndex: Object.keys(this._theme.zIndex).flatMap(zIndexValue =>
        zIndexValue.startsWith('-') ? `-z-${zIndexValue.substring(1)}` : `z-${zIndexValue}`,
      ),
    };
  };

  private backgrounds = (): Backgrounds => {
    return {
      ...nonConfigurableClassNames.backgrounds,
      backgroundOpacity: this.getGeneratedClassesWithOpacities().backgroundOpacities,
      backgroundColor: this.generateClassesWithColors('backgroundColor'),
      backgroundPosition: Object.keys(this._theme.backgroundPosition).map(x => 'bg-' + x),
      backgroundSize: Object.keys(this._theme.backgroundSize).map(x => 'bg-' + x),
      backgroundImage: Object.keys(this._theme.backgroundImage).map(x => 'bg-' + x),
      gradientColorStops: this.generateClassesWithColors('gradientColorStops').flatMap(val =>
        ['from', 'via', 'to'].map(x => x + val.replace('gradient', '')),
      ),
    };
  };

  private borders = (): Borders => {
    return {
      // Add all non configurable classes in `borders` plugin.
      // These are utilities that thier names never change e.g. border styles (dashed, solid etc.)
      ...nonConfigurableClassNames.borders,

      /* Dynamic border utils */
      borderColor: this.generateClassesWithColors('borderColor'),
      borderOpacity: this.getGeneratedClassesWithOpacities().borderOpacities,
      borderRadius: Object.keys(this._theme.borderRadius).flatMap(radius => {
        const sides = ['t', 'r', 'b', 'l', 'tr', 'tl', 'br', 'bl'];
        return sides.map(side => `rounded-${side}-${radius}`).concat(`rounded-${radius}`);
      }),
      borderWidth: Object.keys(this._theme.borderWidth).flatMap(width => {
        const sides = ['t', 'r', 'b', 'l'];
        return sides.map(side => `border-${side}-${width}`).concat(`border-${width}`);
      }),

      /* Dynamic divide utilities */
      divideColor: this.generateClassesWithColors('divideColor'),
      divideOpacity: this.getGeneratedClassesWithOpacities().divideOpacities,
      // divide width inherits its values from theme.borderWidth by default
      // but theme.divideWidth overrides it.
      divideWidth: Object.keys(
        _.isEmpty(this._theme.divideWidth) ? this._theme.borderWidth : this._theme.divideWidth,
      )
        .concat('reverse')
        .flatMap(width => ['x', 'y'].map(axis => `divide-${axis}-${width}`)),

      /* Dynamic ring utilities */
      ringColor: this.generateClassesWithColors('ringColor'),
      ringWidth: Object.keys(this._theme.ringWidth)
        .map(x => 'ring-' + x)
        .concat('inset'),
      ringOpacity: this.getGeneratedClassesWithOpacities().ringOpacities,
      ringOffsetColor: this.generateClassesWithColors('ringOffsetColor'),
      ringOffsetWidth: Object.keys(this._theme.ringOffsetWidth).map(x => 'ring-offset-' + x),
    };
  };

  private tables = (): Tables => {
    return nonConfigurableClassNames.tables;
  };

  private effects = (): Effects => {
    return {
      ...nonConfigurableClassNames.effects,
      boxShadow: Object.keys(this._theme.boxShadow).map(key => `shadow-${key}`),
      opacity: this.getGeneratedClassesWithOpacities().opacities,
    };
  };

  private transitionsAndAnimations = (): TransitionsAndAnimations => {
    return {
      ...nonConfigurableClassNames.transitionsAndAnimations,
      transitionProperty: Object.keys(this._theme.transitionProperty).map(
        property => 'transition-' + property,
      ),
      transitionDuration: Object.keys(this._theme.transitionDuration).map(
        value => 'duration-' + value,
      ),
      transitionTimingFunction: Object.keys(this._theme.transitionTimingFunction)
        .filter(k => k !== 'DEFAULT') // The `DEFAULT` key does not correspond to a classname
        .map(value => 'ease-' + value),
      transitionDelay: Object.keys(this._theme.transitionDelay).map(value => 'delay-' + value),
      animation: Object.keys(this._theme.animation).map(val => 'animate-' + val),
    };
  };

  private transforms = (): Transforms => {
    return {
      ...nonConfigurableClassNames.transforms,
      scale: ['', 'x-', 'y-'].flatMap(x =>
        Object.keys(this._theme.scale).map(value => 'scale-' + x + value),
      ),
      rotate: Object.keys(this._theme.rotate).map(value =>
        value.startsWith('-') ? '-rotate-' + value.slice(1) : `rotate-${value}`,
      ),
      // translate gets values from theme.spacing in addition to 50% and 100% variations
      // by default and theme.translate overrides this behaviour.
      translate: ['x', 'y'].flatMap(side => {
        return Object.keys(
          _.isEmpty(this._theme.translate) ? this._theme.spacing : this._theme.translate,
        ).map(value =>
          value.startsWith('-')
            ? `-translate-${side}-${value.slice(1)}`
            : `translate-${side}-${value}`,
        );
      }),
      skew: ['x', 'y'].flatMap(side =>
        Object.keys(this._theme.skew).map(value =>
          value.startsWith('-') ? `-skew-${side}-${value.substring(1)}` : `skew-${side}-${value}`,
        ),
      ),
      transformOrigin: Object.keys(this._theme.transformOrigin).map(value => 'origin-' + value),
    };
  };

  private interactivity = (): Interactivity => {
    return {
      ...nonConfigurableClassNames.interactivity,
      cursor: Object.keys(this._theme.cursor).map(x => 'cursor-' + x),
      outline: Object.keys(this._theme.outline).map(x => 'outline-' + x),
    };
  };

  private SVG = (): SVG => {
    return {
      ...nonConfigurableClassNames.svg,
      fill: Object.keys(this._theme.fill).map(value => 'fill-' + value),
      stroke: Object.keys(this._theme.stroke).map(value => 'stroke-' + value),
      strokeWidth: Object.keys(this._theme.strokeWidth).map(value => 'stroke-' + value),
    };
  };

  private accessibility = (): Accessibility => {
    return {
      ...nonConfigurableClassNames.accessibility,
    };
  };

  private flexBox = (): FlexBox => {
    return {
      ...nonConfigurableClassNames.flexBox,
      flexGrow: Object.keys(this._theme.flexGrow).map(key => `flex-grow-${key}`),
      flexShrink: Object.keys(this._theme.flexShrink).map(key => `flex-shrink-${key}`),
      order: Object.keys(this._theme.order).map(key => `order-${key}`),
    };
  };

  private grid = (): Grid => {
    return {
      ...nonConfigurableClassNames.grid,
      gridTemplateColumns: Object.keys(this._theme.gridTemplateColumns).map(
        key => `grid-cols-${key}`,
      ),
      gridAutoColumns: Object.keys(this._theme.gridAutoColumns).map(key => `auto-cols-${key}`),
      gridColumn: Object.keys(this._theme.gridColumn).map(key => `col-${key}`),
      gridColumnStart: Object.keys(this._theme.gridColumnStart).map(key => `col-start-${key}`),
      gridColumnEnd: Object.keys(this._theme.gridColumnEnd).map(key => `col-end-${key}`),
      gridTemplateRows: Object.keys(this._theme.gridTemplateRows).map(key => `grid-rows-${key}`),
      gridAutoRows: Object.keys(this._theme.gridAutoRows).map(key => `auto-rows-${key}`),
      gridRow: Object.keys(this._theme.gridRow).map(key => `row-${key}`),
      gridRowStart: Object.keys(this._theme.gridRowStart).map(key => `row-start-${key}`),
      gridRowEnd: Object.keys(this._theme.gridRowEnd).map(key => `row-end-${key}`),
      gap: ['gap-', 'gap-y-', 'gap-x-'].flatMap(x => {
        // grid gap inherits its values from theme.spacing by default, but theme.gap overrides it.
        return Object.keys(_.isEmpty(this._theme.gap) ? this._theme.spacing : this._theme.gap).map(
          gapValue => x + gapValue,
        );
      }),
    };
  };

  private spacing = (): Spacing => {
    const sides = ['', 'y', 'x', 't', 'r', 'b', 'l'];
    return {
      padding: sides.flatMap(side => {
        return Object.keys(
          _.isEmpty(this._theme.padding) ? this._theme.spacing : this._theme.padding,
        ).map(value =>
          value.startsWith('-') ? `-p${side}-${value.slice(1)}` : `p${side}-${value}`,
        );
      }),
      margin: sides.flatMap(side => {
        return Object.keys(
          _.isEmpty(this._theme.margin) ? this._theme.spacing : this._theme.margin,
        ).map(value =>
          value.startsWith('-') ? `-m${side}-${value.slice(1)}` : `m${side}-${value}`,
        );
      }),
      space: ['x', 'y'].flatMap(axis => {
        return Object.keys(_.isEmpty(this._theme.space) ? this._theme.spacing : this._theme.space)
          .concat('reverse')
          .map(key => {
            if (key.startsWith('-')) {
              key = key.slice(1);
              return '-space-' + axis + `-${key}`;
            } else {
              return `space-${axis}-${key}`;
            }
          });
      }),
    };
  };

  private sizing = (): Sizing => {
    // prettier-ignore
    const extraWidthSizing = ['full', 'screen', 'auto', '1/2','1/3','2/3','1/4','2/4','3/4',
      '1/5', '2/5','3/5','4/5', '1/6','2/6','3/6','4/6', '5/6','1/12','2/12','3/12','4/12',
      '5/12','6/12', '7/12','8/12', '9/12','10/12','11/12'];
    const extraHeightSizing = ['full', 'screen'];

    return {
      ...nonConfigurableClassNames.sizing,
      // width values come from theme.spacing + `extraWidthSizing` by default
      // and theme.width overrides this default behaviour.
      // prettier-ignore
      width: (_.isEmpty(this._theme.width)
        ? Object.keys(this._theme.spacing).concat(extraWidthSizing)
        : Object.keys(this._theme.width)).map(x => 'w-' + x),
      minWidth: Object.keys(this._theme.minWidth).map(x => 'min-w-' + x),
      maxWidth: Object.keys(this._theme.maxWidth).map(x => 'max-w-' + x),
      // height values come from theme.spacing + `extraHeightSizing` by default
      // and overridden by theme.height.
      // prettier-ignore
      height: (_.isEmpty(this._theme.height)
        ? Object.keys(this._theme.spacing).concat(extraHeightSizing)
        : Object.keys(this._theme.height)).map(x => 'h-' + x),
      minHeight: Object.keys(this._theme.minHeight).map(x => 'min-h-' + x),
      maxHeight: Object.keys(this._theme.maxHeight).map(x => 'max-h-' + x),
    };
  };

  private typography = (): Typography => {
    return {
      ...nonConfigurableClassNames.typography,
      fontFamily: Object.keys(this._theme.fontFamily).map(value => 'font-' + value),
      fontSize: Object.keys(this._theme.fontSize).map(size => 'text-' + size),
      fontWeight: Object.keys(this._theme.fontWeight).map(weight => 'font-' + weight),
      letterSpacing: Object.keys(this._theme.letterSpacing).map(value => 'tracking-' + value),
      lineHeight: Object.keys(this._theme.lineHeight).map(value => 'leading-' + value),
      listStyleType: Object.keys(this._theme.listStyleType).map(value => 'list-' + value),
      placeholderColor: this.generateClassesWithColors('placeholderColor'),
      placeholderOpacity: this.getGeneratedClassesWithOpacities().placeholderOpacities,
      textColor: this.generateClassesWithColors('textColor'),
      textOpacity: this.getGeneratedClassesWithOpacities().textOpacities,
    };
  };

  // Generate the types for pseudo classes as hover:, focus: etc.
  // and return them in a string array to be parsed and coverted into a template string that
  // will be a part of the final generated file. See ClassesGroupTemplateGenerator class.
  private pseudoClasses = (): string[] => {
    // Initialise a pseudoclasses variable with empty array value.
    const pseudoClasses: string[] = [];

    // HACK: This block is just to make accessibility object align with other types object shape
    const variantsConfig = Object.entries(
      _.merge(this._configScanner.getVariants(), {
        screenReaders: this._configScanner.getVariants().accessibility,
      }),
    );

    // For every key-value pair in the variants section in tailwind config...
    for (const [regularClassGroupKey, pseudoClassesVariantsForKey] of variantsConfig) {
      // Find all matching names from the generated regular classes with the key of the variants config
      Object.keys(this._generatedRegularClassnames).map(key => {
        // If the current key is found to be a member of the generated regular classes group...
        if (
          _.has(this._generatedRegularClassnames[key as keyof TAllClassnames], regularClassGroupKey)
        ) {
          // Get the value of the found generated class group
          const generatedClassGroup = _.get(
            this._generatedRegularClassnames,
            `${key}.${regularClassGroupKey}`,
          ) as string[];

          // For every member of the found regular classes group...
          generatedClassGroup.map(classname => {
            const isDarkModeEnabled = this._darkMode !== false;

            // Generate the classname of each variant...
            pseudoClassesVariantsForKey.map(variant => {
              if (variant === 'responsive') {
                // Get the breakpoints from config
                const [breakpoints] = this._configScanner.getThemeProperty('screens');

                // Create the classname for each breakpoint
                breakpoints.map((breakpointVariant: string) => {
                  // Push the created classes to the pseudoClasses array
                  pseudoClasses.push(
                    breakpointVariant + this._separator + this._prefix + classname,
                  );

                  // Add stackable dark and responsive pseudoclasses if the key has both variants
                  if (pseudoClassesVariantsForKey.includes('dark') && isDarkModeEnabled) {
                    pseudoClasses.push(
                      breakpointVariant +
                        this._separator +
                        'dark' +
                        this._separator +
                        this._prefix +
                        classname,
                    );
                  }
                });
              }
              // Otherwise if the variant is 'dark'
              else if (variant === 'dark') {
                // If the dark mode is enabled...
                if (isDarkModeEnabled) {
                  // Add the 'dark' prefix to the classname to create its pseudoclass
                  pseudoClasses.push(variant + this._separator + this._prefix + classname);
                }
                // Otherwise, do nothing.
              }
              // Otherwise...
              else {
                // Append the variant to the classname and push to the pseudoClasses array.
                pseudoClasses.push(variant + this._separator + this._prefix + classname);

                // Add 'group' class if a the variant is group-hover, group-focus etc.
                if (variant.startsWith(this._prefix + 'group') && !pseudoClasses.includes('group'))
                  pseudoClasses.push(this._prefix + 'group');

                // Add 'dark' class if dark mode stategy is set to "class"
                if (this._darkMode === 'class' && !pseudoClasses.includes('dark'))
                  pseudoClasses.push(this._prefix + 'dark');
              }
            });
          });
        }
        // Otherwise, skip and do nothing
      });
    }

    // After all is done, return the generated pseudo classes types array
    return pseudoClasses;
  };

  private generateClassesWithColors = (property: ClassesWithColors): string[] => {
    // Get the key-value pairs of the passed property
    const [propertyKeys, propertyValues] = this._configScanner.getThemeProperty(property);

    // Store a conversion of the property name into actual utility name
    const utilName = property
      .replace('Color', '') // gradientColorStops -> gradientStops, borderColor -> border etc.
      .replace('Stops', '') // gradientStops -> gradient
      .replace('ringOffset', 'ring-offset')
      .replace('background', 'bg');

    return (
      propertyKeys
        // Exclude `DEFAULT` keys from the keys collection as they do not correspond to any classname.
        .filter(k => k !== 'DEFAULT')
        // Then, for every key of the property...
        .flatMap((colorName, i) => {
          // Get the value that corresponds to that key. NOTE: It can be `string` or an `object` of shades.
          const colorValue = propertyValues[i];

          // If the value is a nested object of color shades...
          if (typeof colorValue === 'object' && colorValue !== null) {
            // Loop over the deep objects and return the result for each key of the object.
            return Object.keys(colorValue).map(shade => `${utilName}-${colorName}-${shade}`);
          }
          // Otherwise...
          else {
            // Return the result of merging the utility name with color value
            return `${utilName}-${colorName}`;
          }
        })
    );
  };

  private getGeneratedClassesWithOpacities = (): ClassesWithOpacities => {
    const allOpacities = this._configScanner.getTheme().opacity;

    // prettier-ignore
    type TOpacityProp = | 'divideOpacity' | 'textOpacity' | 'backgroundOpacity'
                        | 'borderOpacity' | 'placeholderOpacity' | 'ringOpacity'
    const getOpacity = (themePropertyName: TOpacityProp, outputNamePrefix: string): string[] => {
      const generatedOpacities = generateOpacities(allOpacities, this._theme, themePropertyName);

      return Object.keys(generatedOpacities).map(
        opacity => `${outputNamePrefix}-opacity-${opacity}`,
      );
    };

    function generateOpacities(
      defaultOpacities: Record<string, string>,
      theme: TConfigTheme,
      property: keyof Omit<TConfigTheme, 'extend'>,
    ): Record<string, string> {
      const themeOpacities = _.isEmpty(theme[property]) ? defaultOpacities : theme[property];
      const extendedThemeOpacities = theme.extend?.[property];
      const result = extendedThemeOpacities
        ? {...themeOpacities, ...extendedThemeOpacities}
        : themeOpacities;

      return result as Record<string, string>;
    }

    return {
      opacities: Object.keys(allOpacities).map(opacity => `opacity-${opacity}`),
      textOpacities: getOpacity('textOpacity', 'text'),
      backgroundOpacities: getOpacity('backgroundOpacity', 'bg'),
      borderOpacities: getOpacity('borderOpacity', 'border'),
      divideOpacities: getOpacity('divideOpacity', 'divide'),
      placeholderOpacities: getOpacity('placeholderOpacity', 'placeholder'),
      ringOpacities: getOpacity('ringOpacity', 'ring'),
    };
  };
}

type ClassesWithColors =
  | 'backgroundColor'
  | 'divideColor'
  | 'placeholderColor'
  | 'textColor'
  | 'borderColor'
  | 'ringColor'
  | 'ringOffsetColor'
  | 'gradientColorStops';

type ClassesWithOpacities = {
  opacities: string[];
  textOpacities: string[];
  backgroundOpacities: string[];
  borderOpacities: string[];
  divideOpacities: string[];
  placeholderOpacities: string[];
  ringOpacities: string[];
};
