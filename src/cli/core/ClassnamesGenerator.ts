import _ from 'lodash';
import {TailwindConfigParser} from './TailwindConfigParser';
import {nonConfigurableClassNames} from '../lib/non-configurable';
// prettier-ignore
import {
  TAllClassnames, Backgrounds, Layout, Borders, Tables, Effects,
  Interactivity, TransitionsAndAnimations, Transforms, Accessibility, SVG,
  FlexBox, Grid, Spacing, Sizing, Typography, Filters
} from '../types/classes';
import {TConfigTheme, TConfigDarkMode} from '../types/config';
import {tailwindLabsPlugins} from '../lib/tailwindlabs-plugins';
import {regularClassGroupKeys} from './constants/regularClassGroupKeys';

/**
 * Responsible for generating the types from a parsed config by ConfigScanner.
 */
export class ClassnamesGenerator {
  private readonly _prefix: string;
  private readonly _separator: string;
  private readonly _darkMode: TConfigDarkMode;
  private readonly _theme: Omit<TConfigTheme, 'extend'>;
  private readonly _configParser: TailwindConfigParser;
  private readonly _generatedRegularClassnames: TAllClassnames;
  private readonly _generatedPseudoClassnames: string[];

  /**
   * Initializes a new instance of the `ClassesGenerator` class.
   * @param tailwindConfig The _parsed_ TailwindCSS Config.
   */
  constructor(parser: TailwindConfigParser) {
    this._configParser = parser;
    this._prefix = this._configParser.getPrefix();
    this._separator = this._configParser.getSeparator();
    this._darkMode = this._configParser.getDarkMode();
    this._theme = this._configParser.getTheme();

    this._generatedRegularClassnames = {
      Accessibility: this.accessibility(),
      Backgrounds: this.backgrounds(),
      Borders: this.borders(),
      Tables: this.tables(),
      Effects: this.effects(),
      TransitionsAndAnimations: this.transitionsAndAnimations(),
      Filters: this.filters(),
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

    const configPlugins = this._configParser.getPlugins();
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
  public generate = (): TAllClassnames => {
    return this._generatedRegularClassnames;
  };

  private layout = (): Layout | Record<keyof Layout | 'content', string[]> => {
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
      content: Object.keys(this._theme.content).map(x => 'content-' + x),
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

  private borders = (): Borders | Record<keyof Borders | 'caretColor', string[]> => {
    return {
      // Add all non configurable classes in `borders` plugin.
      // These are utilities that their names never change e.g. border styles (dashed, solid etc.)
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
      caretColor: this.generateClassesWithColors('caretColor'),
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

  private filters = (): Filters => {
    return {
      ...nonConfigurableClassNames.filters,
      blur: Object.keys(this._theme.blur).map(x => 'blur-' + x),
      brightness: Object.keys(this._theme.brightness).map(x => 'brightness-' + x),
      contrast: Object.keys(this._theme.contrast).map(x => 'contrast-' + x),
      dropShadow: Object.keys(this._theme.dropShadow).map(x => 'drop-shadow-' + x),
      grayscale: Object.keys(this._theme.grayscale).map(x => 'grayscale-' + x),
      hueRotate: Object.keys(this._theme.hueRotate).map(x => 'hue-rotate-' + x),
      invert: Object.keys(this._theme.invert).map(x => 'invert-' + x),
      saturate: Object.keys(this._theme.saturate).map(x => 'saturate-' + x),
      sepia: Object.keys(this._theme.sepia).map(x => 'sepia-' + x),
      backdropBlur: Object.keys(this._theme.backdropBlur).map(x => 'backdrop-blur-' + x),
      backdropBrightness: Object.keys(this._theme.backdropBrightness).map(
        x => 'backdrop-brightness-' + x,
      ),
      backdropContrast: Object.keys(this._theme.backdropContrast).map(
        x => 'backdrop-contrast-' + x,
      ),
      backdropGrayscale: Object.keys(this._theme.backdropGrayscale).map(
        x => 'backdrop-grayscale-' + x,
      ),
      backdropHueRotate: Object.keys(this._theme.backdropHueRotate).map(
        x => 'backdrop-hue-rotate-' + x,
      ),
      backdropInvert: Object.keys(this._theme.backdropInvert).map(x => 'backdrop-invert-' + x),
      backdropOpacity: Object.keys(this._theme.backdropOpacity).map(x => 'backdrop-opacity-' + x),
      backdropSaturate: Object.keys(this._theme.backdropSaturate).map(
        x => 'backdrop-saturate-' + x,
      ),
      backdropSepia: Object.keys(this._theme.backdropSepia).map(x => 'backdrop-sepia-' + x),
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
    const extraWidthSizing = ['full', 'screen', 'auto', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4',
      '1/5', '2/5', '3/5', '4/5', '1/6', '2/6', '3/6', '4/6', '5/6', '1/12', '2/12', '3/12', '4/12',
      '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12'];
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
  // and return them in a string array to be parsed and converted into a template string that
  // will be a part of the final generated file. See `FileContentGenerator` class.
  private pseudoClasses = (): string[] => {
    // Initialise a pseudoClasses array with base values.
    const pseudoClasses: string[] = ['peer', 'group'];
    if (this._darkMode === 'class') pseudoClasses.push('dark');

    // Get the variants from config
    const variants = this._configParser.getVariants();

    for (const regularClassGroupKey of regularClassGroupKeys) {
      Object.keys(this._generatedRegularClassnames).map(key => {
        // If the current key is found to be a member of the generated regular classes group...
        if (
          _.has(this._generatedRegularClassnames[key as keyof TAllClassnames], regularClassGroupKey)
        ) {
          // Get the value of the found generated class group
          let generatedClassGroup = _.get(
            this._generatedRegularClassnames,
            `${key}.${regularClassGroupKey}`,
          ) as string[];

          // Duplicate classnames with an important (!) prefix
          const generatedClassGroupWithImportantPrefix = generatedClassGroup.map(cls => '!' + cls);
          // Append the classnames with important prefix to the regular classnames
          generatedClassGroup = generatedClassGroup.concat(generatedClassGroupWithImportantPrefix);
          // Append the classnames with important prefix to the pseudo classes array
          generatedClassGroupWithImportantPrefix.map(cls => pseudoClasses.push(cls));

          // For every member of the found regular classes group...
          generatedClassGroup.map(classname => {
            // Generate the classname of each variant...
            variants.map(variant => {
              // Append the variant to the classname and push to the pseudoClasses array.
              pseudoClasses.push(variant + this._separator + this._prefix + classname);
            });
          });
        }
      });
    }

    // After all is done, return the generated pseudo classes types array
    return pseudoClasses;
  };

  private generateClassesWithColors = (property: ClassesWithColors): string[] => {
    // Get the key-value pairs of the passed property
    const [propertyKeys, propertyValues] = this._configParser.getThemeProperty(property);

    // Convert the config property names into utility class names
    const utilName = property
      .replace('Color', '') // gradientColorStops -> gradientStops, borderColor -> border etc.
      .replace('Stops', '') // gradientStops -> gradient
      .replace('ringOffset', 'ring-offset')
      .replace('background', 'bg');

    const classnamesWithColors = propertyKeys
      // Exclude `DEFAULT` keys from the keys collection as they do not correspond to any classname.
      .filter(k => k !== 'DEFAULT')
      // Then, for every key of the property...
      .flatMap((colorName, i) => {
        // Get the value that corresponds to that key. NOTE: It can be `string` or an `object` of shades.
        const colorValue = propertyValues[i];

        // If the value is a nested object of color shades...
        if (typeof colorValue === 'object' && colorValue !== null) {
          // Loop over the deep objects and return the result for each key of the object.
          return Object.keys(colorValue).flatMap(shade => {
            if (utilName === 'border') {
              return ['', 't', 'r', 'b', 'l'].map(
                side => `${utilName}-${side.length > 0 ? side + '-' : ''}${colorName}-${shade}`,
              );
            } else {
              return `${utilName}-${colorName}-${shade}`;
            }
          });
        }
        // Otherwise...
        else {
          // Return the result of merging the utility name with color value
          if (utilName === 'border') {
            return ['', 't', 'r', 'b', 'l'].map(
              side => `${utilName}-${side.length > 0 ? side + '-' : ''}${colorName}`,
            );
          } else {
            return `${utilName}-${colorName}`;
          }
        }
      });

    // // Add the opacities short hand suffix `/{opacity}`: "bg-red-100/50"
    // const classnamesWithColorsAndOpacitySuffix = Object.keys(
    //   this._configParser.getTheme().opacity,
    // ).flatMap(op => classnamesWithColors.map(cls => cls + '/' + op));

    return classnamesWithColors;
  };

  private getGeneratedClassesWithOpacities = (): ClassesWithOpacities => {
    const allOpacities = this._configParser.getTheme().opacity;

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
  | 'caretColor'
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
