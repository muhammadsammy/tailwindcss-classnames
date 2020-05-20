import fs from 'fs';
import isEmpty from 'lodash.isempty';
import { AllClasses } from './classes/all';
import { allTransformClasses, Transforms } from './classes/Transforms';
import {
  baseTemplateString,
  defaultColors,
  defaultOpacities,
  defaultScreens,
  defaultSpacing,
  defaultVariants,
  generateTypes,
  generateOpacities,
  PseudoclassVariantKey,
} from './utils';

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

    const CONFIG = eval(data);
    const THEME_CONFIG = CONFIG.theme;
    const PREFIX_CONFIG = CONFIG.prefix;
    const SEPARATOR_CONFIG = CONFIG.separator;

    const prefix = isEmpty(PREFIX_CONFIG) ? '' : PREFIX_CONFIG;
    const separator = isEmpty(SEPARATOR_CONFIG) ? ':' : SEPARATOR_CONFIG;

    const themeColors = isEmpty(THEME_CONFIG?.colors) ? defaultColors : THEME_CONFIG?.colors;
    const extendedThemeColors = THEME_CONFIG?.extend?.colors;
    const AllConfigColors = extendedThemeColors ? { ...themeColors, ...extendedThemeColors } : themeColors;

    // theme: {
    //   colors: {
    //     colorkey: colorVal => "#fff"
    //     colorKey2: colorVal2 => {light: "#fff", lighter: "#f0f0f0", default: "#fff", ...}
    //   }
    // }
    const getClassesWithColors = (classPayload: 'bg' | 'placeholder' | 'border' | 'text' | 'divide') => {
      const colorVals = Object.values(AllConfigColors);
      return Object.keys(AllConfigColors).flatMap((colorKey, i) => {
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

    const themeBreakpoints = isEmpty(THEME_CONFIG?.screens) ? defaultScreens : THEME_CONFIG?.screens;
    const extendedThemeBreakpoints = THEME_CONFIG?.extend?.screens;
    const allConfigBreakpoints = extendedThemeBreakpoints
      ? { ...themeBreakpoints, ...extendedThemeBreakpoints }
      : themeBreakpoints;
    const breakpoints = Object.keys(allConfigBreakpoints);

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
    const themeSpacing = isEmpty(THEME_CONFIG?.spacing) ? defaultSpacing : THEME_CONFIG?.spacing;
    const extendedThemeSpacing = THEME_CONFIG?.extend?.spacing;
    const allConfigSpacing = extendedThemeSpacing ? { ...themeSpacing, ...extendedThemeSpacing } : themeSpacing;

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

    Object.keys(allConfigSpacing).map((spacing, i) => {
      widths.push(`w-${spacing}`);
      heights.push(`h-${spacing}`);
      sides.map(side => {
        paddings.push(`p${side}-${spacing}`);
        margins.push(`m${side}-${spacing}`);
        if (parseInt(spacing, 10) !== 0 && Object.values(allConfigSpacing)[i] !== 0) {
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
    const themeVariantsObj = isEmpty(CONFIG?.variants) ? defaultVariants : CONFIG?.variants;
    const variantsObjKeys = Object.keys(themeVariantsObj);
    const variantsObjValues: string[][] = Object.values(themeVariantsObj);

    const pseudoClasses: string[] = [];

    variantsObjKeys.map((k, i) => {
      const key = k as PseudoclassVariantKey;
      let classesOfCategoryKey: string[];
      const variants = variantsObjValues[i];

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
          const configHasOtherTransforms: boolean = variantsObjKeys.some(v => Object.keys(Transforms).indexOf(v) >= 0);
          if (configHasOtherTransforms) {
            const transformsNotInConfig = Object.keys(Transforms).filter(el => !variantsObjKeys.includes(el));
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
