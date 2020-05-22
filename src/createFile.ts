import fs from 'fs';
import isEmpty from 'lodash.isempty';
import { AllClasses } from './classes/all';
import { allTransformClasses, Transforms } from './classes/Transforms';
import {
  baseTemplateString,
  defaultOpacities,
  defaultScreens,
  defaultSpacing,
  defaultVariants,
  generateTypes,
  generateOpacities,
  PseudoclassVariantKey,
} from './utils';
import { ThemeScanner } from './generation/ThemeScanner';

interface Options {
  configFilename: string;
  outputFilename: string;
}

export function createFileWithGeneratedTypes({ configFilename, outputFilename }: Options) {
  fs.readFile(`./${configFilename}`, { encoding: 'utf-8' }, (err, data: any) => {
    if (err) {
      console.error(err);
    }

    data = data.replace(/('|")?plugins('|")? *: *\[(.*|\n)*?\],?/g, '');

    const tailwindConfig = eval(data);

    const prefix = isEmpty(tailwindConfig.prefix) ? '' : tailwindConfig.prefix;
    const separator = isEmpty(tailwindConfig.separator) ? ':' : tailwindConfig.separator;

    const themeScanner = new ThemeScanner(tailwindConfig);

    const THEME_CONFIG = tailwindConfig?.theme;

    // theme: {
    //   colors: {
    //     colorkey: colorVal => "#fff"
    //     colorKey2: colorVal2 => {light: "#fff", lighter: "#f0f0f0", default: "#fff", ...}
    //   }
    // }
    const getClassesWithColors = (classPayload: 'bg' | 'placeholder' | 'border' | 'text' | 'divide') => {
      const configColors = themeScanner.getThemeColors();
      const colorVals = Object.values(configColors);
      return Object.keys(configColors).flatMap((colorKey, i) => {
        const colorVal = colorVals[i];
        if (colorVal instanceof Object) {
          return Object.keys(colorVal).map(
            colorValue => `${classPayload}-${colorKey}${colorValue === 'default' ? '' : `-${colorValue}`}`,
          );
        }
        return `${classPayload}-${colorKey}`;
      });
    };

    const themeOpacities = isEmpty(THEME_CONFIG?.opacity) ? defaultOpacities : THEME_CONFIG?.opacity;
    const extendedThemeOpacities = THEME_CONFIG?.extend?.opacity;
    const allOpacities = extendedThemeOpacities ? { ...themeOpacities, ...extendedThemeOpacities } : themeOpacities;
    const opacities = Object.keys(allOpacities).map(opacity => `opacity-${opacity}`);

    const getOpacity = (themePropertyName: string, outputNamePrefix: string) => {
      const generatedOpacities = generateOpacities(allOpacities, THEME_CONFIG, themePropertyName);
      return Object.keys(generatedOpacities).map(opacity => `${outputNamePrefix}-opacity-${opacity}`);
    };
    const textOpacities = getOpacity('textOpacity', 'text');
    const backgroundOpacities = getOpacity('backgroundOpacity', 'bg');
    const borderOpacities = getOpacity('borderOpacity', 'border');
    const divideOpacities = getOpacity('divideOpacity', 'divide');
    const placeholderOpacities = getOpacity('placeholderOpacity', 'placeholder');

    const breakpoints: string[] = themeScanner.getThemeBreakpoints();

    const breakpointExportStatements: string[] = [];
    const breakpointCreateCustomParams: string[] = [];
    const breakpointCreateCustomReturns: string[] = [];
    const maxWidthByBreakpoints: string[] = [];

    breakpoints.map((breakpoint: string) => {
      breakpointExportStatements.push(
        `export const ${breakpoint}: TPseudoClass = className => {
          console.warn("Calling ${breakpoint}() pseudoselector method is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13")
          return ('${prefix}${breakpoint}${separator}' + className) as TTailwindString;
        }`,
      );
      breakpointCreateCustomParams.push(`${breakpoint}: TPseudoClass<T>;`);
      breakpointCreateCustomReturns.push(`${breakpoint},`);
      maxWidthByBreakpoints.push(`${prefix}max-w-screen-${breakpoint}`);
    });

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

    const { spacingKeys, spacingValues } = themeScanner.getThemeSpacing();

    spacingKeys.map((spacing, i) => {
      widths.push(`w-${spacing}`);
      heights.push(`h-${spacing}`);
      sides.map(side => {
        paddings.push(`p${side}-${spacing}`);
        margins.push(`m${side}-${spacing}`);
        if (parseInt(spacing, 10) !== 0 && spacingValues[i] !== 0) {
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

    breakpoints.map((breakpoint: string) => {
      maxWidthByBreakpoints.push(`${prefix}max-w-screen-${breakpoint}`);
    });

    // theme: {
    //   variants: {
    //     variantsObjKey: variantsObjValue => ['responsive', 'hover', 'focus'],
    //   }
    // }
    const themeVariants = isEmpty(tailwindConfig?.variants) ? defaultVariants : tailwindConfig?.variants;
    Object.keys(themeVariants).map(key => {
      if (Object.keys(defaultVariants).includes(key)) {
        delete defaultVariants[key];
      }
    });
    const allPseudoClassVariants: { [key: string]: string[] } = {
      ...defaultVariants,
      ...themeVariants,
    };

    const pseudoClasses: string[] = [];

    Object.keys(allPseudoClassVariants).map((k, i) => {
      const key = k as PseudoclassVariantKey;
      let classesOfCategoryKey: string[];
      const variants = Object.values(allPseudoClassVariants)[i];

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
          const configHasOtherTransforms: boolean = Object.keys(allPseudoClassVariants).some(
            v => Object.keys(Transforms).indexOf(v) >= 0,
          );
          if (configHasOtherTransforms) {
            const transformsNotInConfig = Object.keys(Transforms).filter(
              el => !Object.keys(allPseudoClassVariants).includes(el),
            );
            transformsNotInConfig.map(transformClass => {
              variants.map(variant => {
                if (variant === 'responsive') {
                  breakpoints.map((breakpointVariant: string) => {
                    pseudoClasses.push(prefix + breakpointVariant + separator + transformClass);
                  });
                } else {
                  pseudoClasses.push(prefix + variant + separator + transformClass);
                }
              });
            });
          } else {
            classesOfCategoryKey = allTransformClasses;
          }
          break;
        case 'backgroundColor':
          classesOfCategoryKey = getClassesWithColors('bg');
          break;
        case 'placeholderColor':
          classesOfCategoryKey = getClassesWithColors('placeholder');
          break;
        case 'borderColor':
          classesOfCategoryKey = getClassesWithColors('border');
          break;
        case 'textColor':
          classesOfCategoryKey = getClassesWithColors('text');
          break;
        case 'divideColor':
          classesOfCategoryKey = getClassesWithColors('divide');
          break;
        case 'textOpacity':
          classesOfCategoryKey = opacities;
          break;
        case 'textOpacity':
          classesOfCategoryKey = textOpacities;
          break;
        case 'backgroundOpacity':
          classesOfCategoryKey = backgroundOpacities;
          break;
        case 'borderOpacity':
          classesOfCategoryKey = borderOpacities;
          break;
        case 'divideOpacity':
          classesOfCategoryKey = divideOpacities;
          break;
        case 'placeholderOpacity':
          classesOfCategoryKey = placeholderOpacities;
          break;
        case 'width':
          classesOfCategoryKey = widths;
          break;
        case 'height':
          classesOfCategoryKey = heights;
          break;
        case 'margin':
          classesOfCategoryKey = margins;
          break;
        case 'padding':
          classesOfCategoryKey = paddings;
          break;
        case 'space':
          classesOfCategoryKey = spaceBetweens;
          break;
        default:
          classesOfCategoryKey = AllClasses[key];
          break;
      }

      classesOfCategoryKey.map(c => {
        variants.map(variant => {
          if (variant === 'responsive') {
            breakpoints.map((breakpointVariant: string) => {
              pseudoClasses.push(prefix + breakpointVariant + separator + c);
            });
          } else {
            pseudoClasses.push(prefix + variant + separator + c);
          }
        });
      });
    });

    const result = baseTemplateString
      .replace(/_PREFIX_/g, prefix)
      .replace(/_SEPARATOR_/g, separator)
      .replace(/MAX_WIDTH_BY_BREAKPOINTS/g, generateTypes(maxWidthByBreakpoints))
      .replace(/PADDINGS/g, generateTypes(paddings, prefix))
      .replace(/MARGINS/g, generateTypes(margins, prefix))
      .replace(/WIDTH_SPACINGS/g, generateTypes(widths, prefix))
      .replace(/HEIGHT_SPACINGS/g, generateTypes(heights, prefix))
      .replace(/SPACE_BETWEEN/g, generateTypes(spaceBetweens, prefix))
      .replace(/BACKGROUND_COLORS/g, generateTypes(getClassesWithColors('bg'), prefix))
      .replace(/PLACEHOLDER_COLORS/g, generateTypes(getClassesWithColors('placeholder'), prefix))
      .replace(/BORDER_COLORS/g, generateTypes(getClassesWithColors('border'), prefix))
      .replace(/TEXT_COLORS/g, generateTypes(getClassesWithColors('text'), prefix))
      .replace(/DIVIDE_COLORS/g, generateTypes(getClassesWithColors('divide'), prefix))
      .replace(/BACKGROUND_OPACITIES/g, generateTypes(backgroundOpacities, prefix))
      .replace(/TEXT_OPACITIES/g, generateTypes(textOpacities, prefix))
      .replace(/BORDER_OPACITIES/g, generateTypes(borderOpacities, prefix))
      .replace(/DIVIDE_OPACITIES/g, generateTypes(divideOpacities, prefix))
      .replace(/PLACERHOLDER_OPACITIES/g, generateTypes(placeholderOpacities, prefix))
      .replace(/OPACITIES/g, generateTypes(opacities, prefix))
      .replace(/BREAKPOINT_EXPORT_STATEMENTS/g, breakpointExportStatements.join('\n\n'))
      .replace(/BREAKPOINTS_CREATE_CUSTOM_PARAMS/g, breakpointCreateCustomParams.join('\n'))
      .replace(/BREAKPOINTS_CREATE_CUSTOM_RETURNS/g, breakpointCreateCustomReturns.join('\n'))
      .replace(/PSEUDO_CLASSES_VARIANTS/g, generateTypes(pseudoClasses));

    fs.writeFile(`${outputFilename}`, result, 'utf8', error => {
      if (error) {
        console.error(error);
      }
    });
  });
}
