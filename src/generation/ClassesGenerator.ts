import {ConfigScanner} from './ConfigScanner';
import {generateOpacities, PseudoclassVariantKey} from './utils/utils';
import {AllClasses, AllClassesFlat} from './default-classes/all';
import {allTransformClasses, Transforms} from './default-classes/Transforms';
import {IGenerator} from './IGenerator';
import {Backgrounds as defaultBackgrounds, Backgrounds} from './default-classes/Backgrounds';
import {Borders as defaultBorders, Borders} from './default-classes/Borders';
import {Tables} from './default-classes/Tables';
import {Effects as defaultEffects, Effects} from './default-classes/Effects';
import {FlexBox as defaultFlexBox, FlexBox} from './default-classes/Flexbox';
import {Grid as defaultGrid, Grid} from './default-classes/Grid';
import {Typography as defaultTypography, Typography} from './default-classes/Typography';
import {Transitions as defaultTransitions, Transitions} from './default-classes/Transitions';
import {Transforms as defaultTransforms} from './default-classes/Transforms';
import {
  Interactivity as defaultInteractivity,
  Interactivity,
} from './default-classes/Interactivity';
import {Accessibility} from './default-classes/Accessibility';
import {Layout as defaultLayout, Layout} from './default-classes/Layout';
import {Sizing as defaultSizing, Sizing} from './default-classes/Sizing';
import {SVG as defaultSVG, SVG} from './default-classes/SVG';
import isEmpty from 'lodash.isempty';
import {Spacing} from './default-classes/Spacing';
import {ClassesGroupTemplateGenerator} from './ClassesGroupTemplateGenerator';

export class ClassesGenerator implements IGenerator {
  private readonly prefix: string;
  private readonly separator: string;
  private readonly theme: IThemeConfig;
  private readonly configScanner: ConfigScanner;
  private allGeneratedClasses: typeof AllClasses & {PseudoClasses: {variants: string[]}};

  constructor(tailwindConfig: TailwindConfig) {
    const configScanner = new ConfigScanner(tailwindConfig);
    this.prefix = configScanner.prefix;
    this.separator = configScanner.separator;
    this.theme = configScanner.themeConfig;
    this.configScanner = configScanner;

    this.allGeneratedClasses = {
      Accessibility: this.accessibility(),
      Backgrounds: this.backgrounds(),
      Borders: this.borders(),
      Tables: this.tables(),
      Effects: this.effects(),
      Transitions: this.transitions(),
      FlexBox: this.flexBox(),
      Grid: this.grid(),
      Spacing: this.spacing(),
      Interactivity: this.interactivity(),
      Layout: this.layout(),
      Sizing: this.sizing(),
      SVG: this.SVG(),
      Transforms: this.transforms(),
      Typography: this.typography(),
      PseudoClasses: {
        variants: this.getGeneratedPseudoClasses(),
      },
    };
  }

  public generate = (): string => {
    const allTemplates = Object.keys(this.allGeneratedClasses).map(classGroup => {
      return new ClassesGroupTemplateGenerator( // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.allGeneratedClasses[classGroup],
        classGroup,
        this.prefix,
      ).generate();
    });

    return allTemplates.join('\n');
  };

  private layout = (): typeof Layout => {
    return {
      ...defaultLayout,
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

  private backgrounds = (): typeof Backgrounds => {
    return {
      ...defaultBackgrounds,
      backgroundOpacity: this.getGeneratedClassesWithOpacities().backgroundOpacities,
      backgroundColor: this.getGeneratedClassesWithColors('bg'),
      backgroundPosition: Object.keys(this.theme.backgroundPosition).map(x => 'bg-' + x),
      backgroundSize: Object.keys(this.theme.backgroundSize).map(x => 'bg-' + x),
    };
  };

  private borders = (): typeof Borders => {
    return {
      ...defaultBorders,
      borderColor: this.getGeneratedClassesWithColors('border'),
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
      divideColor: this.getGeneratedClassesWithColors('divide'),
      divideOpacity: this.getGeneratedClassesWithOpacities().divideOpacities,
      // NOTE: divide width inherits its values from theme.borderWidth by default, but theme.divideWidth overrides it.
      divideWidth: Object.keys(
        isEmpty(this.theme.divideWidth)
          ? this.theme.borderWidth
          : (this.theme.divideWidth as {[key: string]: string}),
      )
        .concat('reverse')
        .flatMap(width => {
          return ['x', 'y'].map(
            axis => `divide-${axis}` + (width === 'default' ? '' : `-${width}`),
          );
        }),
    };
  };

  private tables = (): typeof Tables => {
    return Tables;
  };

  private effects = (): typeof Effects => {
    return {
      ...defaultEffects,
      boxShadow: Object.keys(this.theme.boxShadow).map(shadow => {
        return `shadow${shadow === 'default' ? '' : '-' + shadow}`;
      }),
      opacity: this.getGeneratedClassesWithOpacities().opacities,
    };
  };

  private transitions = (): typeof Transitions => {
    return {
      ...defaultTransitions,
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
    };
  };

  private transforms = (): typeof Transforms => {
    return {
      ...defaultTransforms,
      scale: ['', 'x-', 'y-'].flatMap(x =>
        Object.keys(this.theme.scale).map(value => 'scale-' + x + value),
      ),
      rotate: Object.keys(this.theme.rotate).map(value => 'rotate-' + value),
      translate: ['translate-x', '-translate-x', 'translate-y', '-translate-y'].flatMap(x => {
        return Object.keys(
          // NOTE: translate gets values from theme.spacing + 50% and 100% variations, but theme.translate overrides it.
          isEmpty(this.theme.translate)
            ? {...this.theme.spacing, full: '100%', '1/2': '50%'}
            : (this.theme.translate as {[key: string]: string}),
        ).map(value => x + '-' + value);
      }),
      skew: ['x', 'y'].flatMap(side =>
        Object.keys(this.theme.skew).map(value =>
          value.startsWith('-') ? `-skew-${side}-${value.substring(1)}` : `skew-${side}-${value}`,
        ),
      ),
      transformOrigin: Object.keys(this.theme.transformOrigin).map(value => 'origin-' + value),
    };
  };

  private interactivity = (): typeof Interactivity => {
    return {
      ...defaultInteractivity,
      cursor: Object.keys(this.theme.cursor).map(x => 'cursor-' + x),
    };
  };

  private SVG = (): typeof SVG => {
    return {
      ...defaultSVG,
      fill: Object.keys(this.theme.fill).map(value => 'fill-' + value),
      stroke: Object.keys(this.theme.stroke).map(value => 'stroke-' + value),
      strokeWidth: Object.keys(this.theme.strokeWidth).map(value => 'stroke-' + value),
    };
  };

  private accessibility = (): typeof Accessibility => {
    return Accessibility;
  };

  private flexBox = (): typeof FlexBox => {
    return {
      ...defaultFlexBox,
      flexGrow: Object.keys(this.theme.flexGrow).map(
        value => 'flex-grow' + (value === 'default' ? '' : `-${value}`),
      ),
      flexShrink: Object.keys(this.theme.flexShrink).map(
        value => 'flex-shrink' + (value === 'default' ? '' : `-${value}`),
      ),
      order: Object.keys(this.theme.order).map(value => `order-${value}`),
    };
  };

  private grid = (): typeof Grid => {
    return {
      ...defaultGrid,
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
      gridGap: ['gap-', 'row-gap-', 'col-gap-'].flatMap(x => {
        // grid gap inherits its values from theme.spacing by default, but theme.gap overrides it.
        return Object.keys(
          isEmpty(this.theme.gap)
            ? this.theme.spacing
            : (this.theme.gap as {[key: string]: string}),
        ).map(gapValue => x + gapValue);
      }),
    };
  };

  private spacing = (): typeof Spacing => {
    return {
      space: this.getGeneratedClassesWithSpacing().spaceBetweens,
      padding: this.getGeneratedClassesWithSpacing().paddings,
      margin: this.getGeneratedClassesWithSpacing().margins,
    };
  };

  private sizing = (): typeof Sizing => {
    // prettier-ignore
    const extraWidthSizing = ['full', 'screen', 'auto', '1/2','1/3','2/3','1/4','2/4','3/4','1/5','2/5','3/5','4/5',
      '1/6','2/6','3/6','4/6', '5/6','1/12','2/12','3/12','4/12','5/12','6/12','7/12','8/12', '9/12','10/12','11/12'];
    const extraHeightSizing = ['full', 'screen'];

    return {
      ...defaultSizing,
      // NOTE: width values come from theme.spacing + `extraWidthSizing` by default and theme.width overrides it.
      // prettier-ignore
      width: (isEmpty(this.theme.width)
        ? Object.keys(this.theme.spacing).concat(extraWidthSizing)
        : Object.keys(this.theme.width as { [key: string]: string })).map(x => 'w-' + x),
      minWidth: Object.keys(this.theme.minWidth).map(x => 'min-w-' + x),
      maxWidth: Object.keys(this.theme.maxWidth).map(x => 'max-w-' + x),

      // NOTE: height values come from theme.spacing + `extraHeightSizing` by default and overridden by theme.height.
      // prettier-ignore
      height: (isEmpty(this.theme.height)
        ? Object.keys(this.theme.spacing).concat(extraHeightSizing)
        : Object.keys(this.theme.height as { [key: string]: string })).map(x => 'h-' + x),
      minHeight: Object.keys(this.theme.minHeight).map(x => 'min-h-' + x),
      maxHeight: Object.keys(this.theme.maxHeight).map(x => 'max-h-' + x),
    };
  };

  private typography = (): typeof Typography => {
    return {
      ...defaultTypography,
      fontFamily: Object.keys(this.theme.fontFamily).map(value => 'font-' + value),
      fontSize: Object.keys(this.theme.fontSize).map(size => 'font-' + size),
      fontWeight: Object.keys(this.theme.fontWeight).map(weight => 'font-' + weight),
      letterSpacing: Object.keys(this.theme.letterSpacing).map(value => 'tracking-' + value),
      lineHeight: Object.keys(this.theme.lineHeight).map(value => 'leading-' + value),
      listStyleType: Object.keys(this.theme.listStyleType).map(value => 'list-' + value),
      placeholderColor: this.getGeneratedClassesWithColors('placeholder'),
      placeholderOpacity: this.getGeneratedClassesWithOpacities().placeholderOpacities,
      textColor: this.getGeneratedClassesWithColors('text'),
      textOpacity: this.getGeneratedClassesWithOpacities().textOpacities,
    };
  };

  private getGeneratedClassesWithColors = (
    classPayload: 'bg' | 'placeholder' | 'border' | 'text' | 'divide',
  ): string[] => {
    const {colorsNames, colorsShades} = this.configScanner.getThemeColors();
    return colorsNames.flatMap((colorName, i) => {
      const colorShade = colorsShades[i];
      if (colorShade instanceof Object) {
        return Object.keys(colorShade).map(
          shade => `${classPayload}-${colorName}${shade === 'default' ? '' : `-${shade}`}`,
        );
      }
      return `${classPayload}-${colorName}`;
    });
  };

  private getGeneratedClassesWithOpacities = (): ClassesWithOpacities => {
    const allOpacities = this.configScanner.getThemeOpacities();

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

  private getGeneratedClassesWithSpacing = (): ClassesWithSpacing => {
    const paddings: string[] = [];
    const margins: string[] = [];
    const widths: string[] = [];
    const heights: string[] = [];
    const spaceBetweens: string[] = [`space-x-reverse`, `space-y-reverse`];

    const sides = ['', 'y', 'x', 't', 'r', 'b', 'l'];

    sides.map(side => {
      paddings.push(`p${side}-auto`);
      margins.push(`m${side}-auto`);
    });

    ['auto', 'full', 'screen'].map(spacing => heights.push(`h-${spacing}`));
    // prettier-ignore
    [
      '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6',
      '2/6', '3/6', '4/6', '5/6', '1/12', '2/12', '3/12', '4/12', '5/12', '6/12',
      '7/12', '8/12', '9/12', '10/12', '11/12', 'auto', 'full', 'screen'
    ].map(spacing => widths.push(`w-${spacing}`));
    const {spacingKeys, spacingValues} = this.configScanner.getThemeSpacing();

    spacingKeys.map((spacing, i) => {
      widths.push(`w-${spacing}`);
      heights.push(`h-${spacing}`);
      sides.map(side => {
        paddings.push(`p${side}-${spacing}`);
        margins.push(`m${side}-${spacing}`);
        if (parseInt(spacing, 10) !== 0 && spacingValues[i] !== '0') {
          paddings.push(`-p${side}-${spacing}`);
          margins.push(`-m${side}-${spacing}`);
        }
      });

      ['', '-'].map(spaceBetweenPrefix => {
        ['x', 'y'].map(axis => {
          spaceBetweens.push(`${spaceBetweenPrefix}space-${axis}-${spacing}`);
        });
      });
    });

    return {
      paddings,
      margins,
      widths,
      heights,
      spaceBetweens,
    };
  };

  private getGeneratedPseudoClasses = (): string[] => {
    const pseudoClasses: string[] = [];
    const {classesCategories, classesVariants} = this.configScanner.getPseudoClassVariants();

    classesCategories.map((k, i) => {
      const key = k as PseudoclassVariantKey;
      let classesOfCategoryKey: string[];
      const variants = classesVariants[i];
      const classesWithOpacities = this.getGeneratedClassesWithOpacities();
      const classesWithSpacing = this.getGeneratedClassesWithSpacing();

      switch (key) {
        case 'gap':
          classesOfCategoryKey = AllClassesFlat.gridGap;
          break;
        case 'inset':
          classesOfCategoryKey = AllClassesFlat.topRightBottomLeft;
          break;
        case 'accessibility':
          classesOfCategoryKey = AllClassesFlat.screenReaders;
          break;
        case 'transform':
          classesOfCategoryKey = [];
          const configHasOtherTransforms: boolean = classesCategories.some(
            v => Object.keys(Transforms).indexOf(v) >= 0,
          );
          if (configHasOtherTransforms) {
            const transformsNotInConfig = Object.keys(Transforms).filter(
              el => !classesCategories.includes(el),
            );
            transformsNotInConfig.map(transformClass => {
              variants.map(variant => {
                if (variant === 'responsive') {
                  this.configScanner.getThemeBreakpoints().map((breakpointVariant: string) => {
                    pseudoClasses.push(
                      this.prefix + breakpointVariant + this.separator + transformClass,
                    );
                  });
                } else {
                  pseudoClasses.push(this.prefix + variant + this.separator + transformClass);
                }
              });
            });
          } else {
            classesOfCategoryKey = allTransformClasses;
          }
          break;
        case 'backgroundColor':
          classesOfCategoryKey = this.getGeneratedClassesWithColors('bg');
          break;
        case 'placeholderColor':
          classesOfCategoryKey = this.getGeneratedClassesWithColors('placeholder');
          break;
        case 'borderColor':
          classesOfCategoryKey = this.getGeneratedClassesWithColors('border');
          break;
        case 'textColor':
          classesOfCategoryKey = this.getGeneratedClassesWithColors('text');
          break;
        case 'divideColor':
          classesOfCategoryKey = this.getGeneratedClassesWithColors('divide');
          break;
        case 'opacity':
          classesOfCategoryKey = classesWithOpacities.opacities;
          break;
        case 'textOpacity':
          classesOfCategoryKey = classesWithOpacities.textOpacities;
          break;
        case 'backgroundOpacity':
          classesOfCategoryKey = classesWithOpacities.backgroundOpacities;
          break;
        case 'borderOpacity':
          classesOfCategoryKey = classesWithOpacities.borderOpacities;
          break;
        case 'divideOpacity':
          classesOfCategoryKey = classesWithOpacities.divideOpacities;
          break;
        case 'placeholderOpacity':
          classesOfCategoryKey = classesWithOpacities.placeholderOpacities;
          break;
        case 'width':
          classesOfCategoryKey = classesWithSpacing.widths;
          break;
        case 'height':
          classesOfCategoryKey = classesWithSpacing.heights;
          break;
        case 'margin':
          classesOfCategoryKey = classesWithSpacing.margins;
          break;
        case 'padding':
          classesOfCategoryKey = classesWithSpacing.paddings;
          break;
        case 'space':
          classesOfCategoryKey = classesWithSpacing.spaceBetweens;
          break;
        default:
          classesOfCategoryKey = AllClassesFlat[key];
          break;
      }

      classesOfCategoryKey.map(c => {
        variants.map(variant => {
          if (variant === 'responsive') {
            this.configScanner.getThemeBreakpoints().map((breakpointVariant: string) => {
              pseudoClasses.push(breakpointVariant + this.separator + this.prefix + c);
            });
          } else {
            pseudoClasses.push(variant + this.separator + this.prefix + c);
          }
        });
      });
    });

    return pseudoClasses;
  };
}
