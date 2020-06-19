import { ConfigScanner } from './ConfigScanner';
import { generateOpacities, PseudoclassVariantKey } from './utils/utils';
import { AllClasses } from '../classes/all';
import { Transforms, allTransformClasses } from '../classes/Transforms';

export class ClassesGenerator {
  private readonly configScanner: ConfigScanner;

  constructor(tailwindConfig: TailwindConfig) {
    this.configScanner = new ConfigScanner(tailwindConfig);
  }

  public getGeneratedClassesWithColors = (
    classPayload: 'bg' | 'placeholder' | 'border' | 'text' | 'divide',
  ): string[] => {
    const { colorsNames, colorsShades } = this.configScanner.getThemeColors();
    return colorsNames.flatMap((colorName, i) => {
      const colorShade = colorsShades[i];
      if (colorShade instanceof Object) {
        return Object.keys(colorShade).map(
          shadeValue => `${classPayload}-${colorName}${shadeValue === 'default' ? '' : `-${shadeValue}`}`,
        );
      }
      return `${classPayload}-${colorName}`;
    });
  };

  public getGeneratedMaxWidthClasses = (): string[] => {
    return this.configScanner
      .getThemeBreakpoints()
      .map((breakpoint: string) => `${this.configScanner.prefix}max-w-screen-${breakpoint}`);
  };

  public getGeneratedClassesWithOpacities = (): ClassesWithOpacities => {
    const allOpacities = this.configScanner.getThemeOpacities();

    const getOpacity = (themePropertyName: string, outputNamePrefix: string): string[] => {
      const generatedOpacities = generateOpacities(allOpacities, this.configScanner.themeConfig, themePropertyName);
      return Object.keys(generatedOpacities).map(opacity => `${outputNamePrefix}-opacity-${opacity}`);
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

  public getGeneratedClassesWithSpacing = (): ClassesWithSpacing => {
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
    const { spacingKeys, spacingValues } = this.configScanner.getThemeSpacing();

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

  public getGeneratedPseudoClasses = (): string[] => {
    const pseudoClasses: string[] = [];
    const { classesCategories, classesVariants } = this.configScanner.getPseudoClassVariants();

    classesCategories.map((k, i) => {
      const key = k as PseudoclassVariantKey;
      let classesOfCategoryKey: string[];
      const variants = classesVariants[i];
      const classesWithOpacities = this.getGeneratedClassesWithOpacities();
      const classesWithSpacing = this.getGeneratedClassesWithSpacing();

      switch (key) {
        case 'gap':
          classesOfCategoryKey = AllClasses.gridGap;
          break;
        case 'inset':
          classesOfCategoryKey = AllClasses.topRightBottomLeft;
          break;
        case 'accessibility':
          classesOfCategoryKey = AllClasses.screenReaders;
          break;
        case 'transform':
          classesOfCategoryKey = [];
          const configHasOtherTransforms: boolean = classesCategories.some(
            v => Object.keys(Transforms).indexOf(v) >= 0,
          );
          if (configHasOtherTransforms) {
            const transformsNotInConfig = Object.keys(Transforms).filter(el => !classesCategories.includes(el));
            transformsNotInConfig.map(transformClass => {
              variants.map(variant => {
                if (variant === 'responsive') {
                  this.configScanner.getThemeBreakpoints().map((breakpointVariant: string) => {
                    pseudoClasses.push(
                      this.configScanner.prefix + breakpointVariant + this.configScanner.separator + transformClass,
                    );
                  });
                } else {
                  pseudoClasses.push(
                    this.configScanner.prefix + variant + this.configScanner.separator + transformClass,
                  );
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
          classesOfCategoryKey = AllClasses[key];
          break;
      }

      classesOfCategoryKey.map(c => {
        variants.map(variant => {
          if (variant === 'responsive') {
            this.configScanner.getThemeBreakpoints().map((breakpointVariant: string) => {
              pseudoClasses.push(breakpointVariant + this.configScanner.separator + this.configScanner.prefix + c);
            });
          } else {
            pseudoClasses.push(variant + this.configScanner.separator + this.configScanner.prefix + c);
          }
        });
      });
    });

    return pseudoClasses;
  };
}
