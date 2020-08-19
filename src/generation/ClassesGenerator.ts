import {ConfigScanner} from './ConfigScanner';
import {generateOpacities, generateTypes} from './utils/utils';
import {AllClasses as defaultClasses} from './default-classes/all';
import {IGenerator} from './IGenerator';
import _ from 'lodash';
import {ClassesGroupTemplateGenerator} from './ClassesGroupTemplateGenerator';

export class ClassesGenerator implements IGenerator {
  private readonly prefix: string;
  private readonly separator: string;
  private readonly theme: IThemeConfig;
  private readonly configScanner: ConfigScanner;
  private readonly deprecations: TFuture;
  private generatedRegularClasses: typeof defaultClasses;
  private generatedPseudoClasses: string[];

  constructor(tailwindConfig: TailwindConfig) {
    const configScanner = new ConfigScanner(tailwindConfig);

    this.prefix = configScanner.getPrefix();
    this.separator = configScanner.getSeparator();
    this.theme = configScanner.getTheme();
    this.configScanner = configScanner;
    this.deprecations = configScanner.getDeprecations();

    this.generatedRegularClasses = {
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

    this.generatedPseudoClasses = this.pseudoClasses();
  }

  // TODO: check if values are nested objects e.g., colors
  // this checking is only implemented on colors property
  // but better to be done on all other properties

  public generate = (): string => {
    const allClassesTemplates = Object.keys(this.generatedRegularClasses)
      .map(classGroup => {
        return new ClassesGroupTemplateGenerator(
          this.generatedRegularClasses[classGroup as keyof typeof defaultClasses],
          classGroup,
          this.prefix,
        ).generate();
      })
      .join('\n');

    return (
      allClassesTemplates +
      '\n\n' +
      'export type TPseudoClasses =' +
      generateTypes(this.generatedPseudoClasses)
    );
  };

  private layout = (): typeof defaultClasses.Layout => {
    return {
      ...defaultClasses.Layout,
      objectPosition: Object.keys(this.theme.objectPosition).map(x => 'object-' + x),
      topRightBottomLeft: Object.keys(this.theme.inset).flatMap(insetValue => {
        return ['inset', 'inset-x', 'inset-y', 'top', 'right', 'bottom', 'left'].map(side =>
          insetValue.startsWith('-')
            ? `-${side}-${insetValue.substring(1)}`
            : `${side}-${insetValue}`,
        );
      }),
      zIndex: Object.keys(this.theme.zIndex).flatMap(zIndexValue =>
        zIndexValue.startsWith('-') ? `-z-${zIndexValue.substring(1)}` : `z-${zIndexValue}`,
      ),
    };
  };

  private backgrounds = (): typeof defaultClasses.Backgrounds => {
    return {
      ...defaultClasses.Backgrounds,
      backgroundOpacity: this.getGeneratedClassesWithOpacities().backgroundOpacities,
      backgroundColor: this.generateClassesWithColors('backgroundColor'),
      backgroundPosition: Object.keys(this.theme.backgroundPosition).map(x => 'bg-' + x),
      backgroundSize: Object.keys(this.theme.backgroundSize).map(x => 'bg-' + x),
    };
  };

  private borders = (): typeof defaultClasses.Borders => {
    return {
      ...defaultClasses.Borders,
      borderColor: this.generateClassesWithColors('borderColor'),
      borderOpacity: this.getGeneratedClassesWithOpacities().borderOpacities,
      borderRadius: Object.keys(this.theme.borderRadius).flatMap(radius => {
        const sides = ['', 't', 'r', 'b', 'l', 'tr', 'tl', 'br', 'bl'];
        return sides.map(
          side =>
            `rounded${side === '' ? '' : '-' + side}` + (radius === 'default' ? '' : `-${radius}`),
        );
      }),
      borderWidth: Object.keys(this.theme.borderWidth).flatMap(width => {
        const sides = ['', 't', 'r', 'b', 'l'];
        return sides.map(
          side =>
            `border${side === '' ? '' : '-' + side}` + (width === 'default' ? '' : `-${width}`),
        );
      }),
      divideColor: this.generateClassesWithColors('divideColor'),
      divideOpacity: this.getGeneratedClassesWithOpacities().divideOpacities,
      // divide width inherits its values from theme.borderWidth by default
      // but theme.divideWidth overrides it.
      divideWidth: Object.keys(
        _.isEmpty(this.theme.divideWidth) ? this.theme.borderWidth : this.theme.divideWidth,
      )
        .concat('reverse')
        .flatMap(width => {
          return ['x', 'y'].map(
            axis => `divide-${axis}` + (width === 'default' ? '' : `-${width}`),
          );
        }),
    };
  };

  private tables = (): typeof defaultClasses.Tables => {
    return defaultClasses.Tables;
  };

  private effects = (): typeof defaultClasses.Effects => {
    return {
      ...defaultClasses.Effects,
      boxShadow: Object.keys(this.theme.boxShadow).map(shadow => {
        return `shadow${shadow === 'default' ? '' : '-' + shadow}`;
      }),
      opacity: this.getGeneratedClassesWithOpacities().opacities,
    };
  };

  private transitionsAndAnimations = (): typeof defaultClasses.TransitionsAndAnimations => {
    return {
      ...defaultClasses.TransitionsAndAnimations,
      transitionProperty: Object.keys(this.theme.transitionProperty).map(
        property => 'transition-' + property,
      ),
      transitionDuration: Object.keys(this.theme.transitionDuration).map(
        value => 'duration-' + value,
      ),
      transitionTimingFunction: Object.keys(this.theme.transitionTimingFunction).map(
        value => 'ease-' + value,
      ),
      transitionDelay: Object.keys(this.theme.transitionDelay).map(value => 'delay-' + value),
      animation: Object.keys(this.theme.animation).map(val => 'animate-' + val),
    };
  };

  private transforms = (): typeof defaultClasses.Transforms => {
    return {
      ...defaultClasses.Transforms,
      scale: ['', 'x-', 'y-'].flatMap(x =>
        Object.keys(this.theme.scale).map(value => 'scale-' + x + value),
      ),
      rotate: Object.keys(this.theme.rotate).map(value => 'rotate-' + value),
      // translate gets values from theme.spacing in addition to 50% and 100% variations
      // by default and theme.translate overrides this behaviour.
      translate: ['x', 'y'].flatMap(side => {
        return Object.keys(
          _.isEmpty(this.theme.translate) ? this.theme.spacing : this.theme.translate,
        ).map(value =>
          value.startsWith('-')
            ? `-translate-${side}-${value.slice(1)}`
            : `translate-${side}-${value}`,
        );
      }),
      skew: ['x', 'y'].flatMap(side =>
        Object.keys(this.theme.skew).map(value =>
          value.startsWith('-') ? `-skew-${side}-${value.substring(1)}` : `skew-${side}-${value}`,
        ),
      ),
      transformOrigin: Object.keys(this.theme.transformOrigin).map(value => 'origin-' + value),
    };
  };

  private interactivity = (): typeof defaultClasses.Interactivity => {
    return {
      ...defaultClasses.Interactivity,
      cursor: Object.keys(this.theme.cursor).map(x => 'cursor-' + x),
    };
  };

  private SVG = (): typeof defaultClasses.SVG => {
    return {
      ...defaultClasses.SVG,
      fill: Object.keys(this.theme.fill).map(value => 'fill-' + value),
      stroke: Object.keys(this.theme.stroke).map(value => 'stroke-' + value),
      strokeWidth: Object.keys(this.theme.strokeWidth).map(value => 'stroke-' + value),
    };
  };

  private accessibility = (): typeof defaultClasses.Accessibility => {
    return defaultClasses.Accessibility;
  };

  private flexBox = (): typeof defaultClasses.FlexBox => {
    return {
      ...defaultClasses.FlexBox,
      flexGrow: Object.keys(this.theme.flexGrow).map(
        value => 'flex-grow' + (value === 'default' ? '' : `-${value}`),
      ),
      flexShrink: Object.keys(this.theme.flexShrink).map(
        value => 'flex-shrink' + (value === 'default' ? '' : `-${value}`),
      ),
      order: Object.keys(this.theme.order).map(value => `order-${value}`),
    };
  };

  private grid = (): typeof defaultClasses.Grid => {
    return {
      ...defaultClasses.Grid,
      gridTemplateColumns: Object.keys(this.theme.gridTemplateColumns).map(
        value => `grid-cols-${value}`,
      ),
      gridColumn: Object.keys(this.theme.gridColumn).map(value => `col-${value}`),
      gridColumnStart: Object.keys(this.theme.gridColumnStart).map(value => `col-start-${value}`),
      gridColumnEnd: Object.keys(this.theme.gridColumnEnd).map(value => `col-end-${value}`),
      gridTemplateRows: Object.keys(this.theme.gridTemplateRows).map(value => `grid-rows-${value}`),
      gridRow: Object.keys(this.theme.gridRow).map(value => `row-${value}`),
      gridRowStart: Object.keys(this.theme.gridRowStart).map(value => `row-start-${value}`),
      gridRowEnd: Object.keys(this.theme.gridRowEnd).map(value => `row-end-${value}`),
      gridGap: ['gap-', 'gap-y-', 'gap-x-']
        .concat(this.deprecations.removeDeprecatedGapUtilities ? [] : ['row-gap-', 'col-gap-'])
        .flatMap(x => {
          // grid gap inherits its values from theme.spacing by default, but theme.gap overrides it.
          return Object.keys(_.isEmpty(this.theme.gap) ? this.theme.spacing : this.theme.gap).map(
            gapValue => x + gapValue,
          );
        }),
    };
  };

  private spacing = (): typeof defaultClasses.Spacing => {
    const sides = ['', 'y', 'x', 't', 'r', 'b', 'l'];
    return {
      padding: sides.flatMap(side => {
        return Object.keys(
          _.isEmpty(this.theme.padding) ? this.theme.spacing : this.theme.padding,
        ).map(value =>
          value.startsWith('-') ? `-p${side}-${value.slice(1)}` : `p${side}-${value}`,
        );
      }),
      margin: sides.flatMap(side => {
        return Object.keys(
          _.isEmpty(this.theme.margin) ? this.theme.spacing : this.theme.margin,
        ).map(value =>
          value.startsWith('-') ? `-m${side}-${value.slice(1)}` : `m${side}-${value}`,
        );
      }),
      space: ['x', 'y'].flatMap(axis => {
        return Object.keys(_.isEmpty(this.theme.space) ? this.theme.spacing : this.theme.space)
          .concat('reverse')
          .map(value => {
            if (value.startsWith('-')) {
              value = value.slice(1);
              return '-space-' + axis + `-${value}`;
            } else {
              return 'space-' + axis + (value === 'default' ? '' : `-${value}`);
            }
          });
      }),
    };
  };

  private sizing = (): typeof defaultClasses.Sizing => {
    // prettier-ignore
    const extraWidthSizing = ['full', 'screen', 'auto', '1/2','1/3','2/3','1/4','2/4','3/4',
      '1/5', '2/5','3/5','4/5', '1/6','2/6','3/6','4/6', '5/6','1/12','2/12','3/12','4/12',
      '5/12','6/12', '7/12','8/12', '9/12','10/12','11/12'];
    const extraHeightSizing = ['full', 'screen'];

    return {
      ...defaultClasses.Sizing,
      // width values come from theme.spacing + `extraWidthSizing` by default
      // and theme.width overrides this default behaviour.
      // prettier-ignore
      width: (_.isEmpty(this.theme.width)
        ? Object.keys(this.theme.spacing).concat(extraWidthSizing)
        : Object.keys(this.theme.width)).map(x => 'w-' + x),
      minWidth: Object.keys(this.theme.minWidth).map(x => 'min-w-' + x),
      maxWidth: Object.keys(this.theme.maxWidth).map(x => 'max-w-' + x),

      // height values come from theme.spacing + `extraHeightSizing` by default
      // and overridden by theme.height.
      // prettier-ignore
      height: (_.isEmpty(this.theme.height)
        ? Object.keys(this.theme.spacing).concat(extraHeightSizing)
        : Object.keys(this.theme.height)).map(x => 'h-' + x),
      minHeight: Object.keys(this.theme.minHeight).map(x => 'min-h-' + x),
      maxHeight: Object.keys(this.theme.maxHeight).map(x => 'max-h-' + x),
    };
  };

  private typography = (): typeof defaultClasses.Typography => {
    return {
      ...defaultClasses.Typography,
      fontFamily: Object.keys(this.theme.fontFamily).map(value => 'font-' + value),
      fontSize: Object.keys(this.theme.fontSize).map(size => 'text-' + size),
      fontWeight: Object.keys(this.theme.fontWeight).map(weight => 'font-' + weight),
      letterSpacing: Object.keys(this.theme.letterSpacing).map(value => 'tracking-' + value),
      lineHeight: Object.keys(this.theme.lineHeight).map(value => 'leading-' + value),
      listStyleType: Object.keys(this.theme.listStyleType).map(value => 'list-' + value),
      placeholderColor: this.generateClassesWithColors('placeholderColor'),
      placeholderOpacity: this.getGeneratedClassesWithOpacities().placeholderOpacities,
      textColor: this.generateClassesWithColors('textColor'),
      textOpacity: this.getGeneratedClassesWithOpacities().textOpacities,
    };
  };

  private pseudoClasses = (): string[] => {
    const pseudoClasses: string[] = [];

    for (const [variantsKey, variantsForKey] of Object.entries(this.configScanner.getVariants())) {
      Object.keys(this.generatedRegularClasses).map(key => {
        if (_.has(this.generatedRegularClasses[key as keyof typeof defaultClasses], variantsKey)) {
          const generatedClass = _.get(
            this.generatedRegularClasses,
            `${key}.${variantsKey}`,
          ) as string[];
          generatedClass.map(classname => {
            variantsForKey.map(variant => {
              if (variant === 'responsive') {
                const [breakpoints] = this.configScanner.getThemeProperty('screens');
                breakpoints.map((breakpointVariant: string) => {
                  pseudoClasses.push(breakpointVariant + this.separator + this.prefix + classname);
                });
              } else {
                pseudoClasses.push(variant + this.separator + this.prefix + classname);
              }
            });
          });
        }
      });
    }

    return pseudoClasses;
  };

  private generateClassesWithColors = (property: ClassesWithColors): string[] => {
    const [propertyNames, propertyVariants] = this.configScanner.getThemeProperty(property);
    return propertyNames.flatMap((propertyValue, i) => {
      const variant = propertyVariants[i];

      const propertyResult = property.replace('Color', '').replace('background', 'bg');

      if (typeof variant === 'object' && variant !== null) {
        return Object.keys(variant).map(
          v => `${propertyResult}-${propertyValue}${v === 'default' ? '' : `-${v}`}`,
        );
      } else {
        return `${propertyResult}-${propertyValue}`;
      }
    });
  };

  private getGeneratedClassesWithOpacities = (): ClassesWithOpacities => {
    const allOpacities = this.configScanner.getTheme().opacity;

    const getOpacity = (themePropertyName: string, outputNamePrefix: string): string[] => {
      const generatedOpacities = generateOpacities(allOpacities, this.theme, themePropertyName);
      return Object.keys(generatedOpacities).map(
        opacity => `${outputNamePrefix}-opacity-${opacity}`,
      );
    };

    return {
      opacities: Object.keys(allOpacities).map(opacity => `opacity-${opacity}`),
      textOpacities: getOpacity('textOpacity', 'text'),
      backgroundOpacities: getOpacity('backgroundOpacity', 'bg'),
      borderOpacities: getOpacity('borderOpacity', 'border'),
      divideOpacities: getOpacity('divideOpacity', 'divide'),
      placeholderOpacities: getOpacity('placeholderOpacity', 'placeholder'),
    };
  };
}
