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
} from './utils';

interface IOptions {
  configFilename: string;
  outputFilename: string;
}

export function createFileWithGeneratedTypes({ configFilename, outputFilename }: IOptions) {
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

    const backgroundColors: string[] = [];
    const placeholderColors: string[] = [];
    const borderColors: string[] = [];
    const textColors: string[] = [];
    const divideColors: string[] = [];

    // theme: {
    //   colors: {
    //     colorkey: colorVal ( "#fff" | {light: "#fff", lighter: "#f0f0f0",...} )
    //   }
    // }
    const getBackgroundColors = () => {
      const colorVals = Object.values(AllConfigColors);
      return Object.keys(AllConfigColors).flatMap((colorKey, i) => {
        const colorVal = colorVals[i];
        if (colorVal instanceof Object) {
          return Object.keys(colorVal).map(
            colorValue => `bg-${colorKey}-${colorValue === 'default' ? '' : colorValue}`,
          );
        }
        return `bg-${colorKey}`;
      });
    };

    const colors = Object.keys(AllConfigColors);
    for (let i = 0; i < colors.length; i += 1) {
      const colorKey = colors[i];
      const colorVal = AllConfigColors[colorKey];
      if (colorVal instanceof Object) {
        const colorValues = Object.keys(colorVal);
        colorValues.map((colorValue: string) => {
          colorValue = colorValue === 'default' ? '' : `-${colorValue}`;
          // backgroundColors.push(`bg-${colorKey}${colorValue}`);
          placeholderColors.push(`${prefix}placeholder-${colorKey}${colorValue}`);
          borderColors.push(`${prefix}border-${colorKey}${colorValue}`);
          textColors.push(`${prefix}text-${colorKey}${colorValue}`);
          divideColors.push(`${prefix}divide-${colorKey}${colorValue}`);
        });
      } else {
        // backgroundColors.push(`bg-${colorKey}`);
        placeholderColors.push(`${prefix}placeholder-${colorKey}`);
        borderColors.push(`${prefix}border-${colorKey}`);
        textColors.push(`${prefix}text-${colorKey}`);
        divideColors.push(`${prefix}divide-${colorKey}`);
      }
    }

    const themeOpacities = isEmpty(THEME_CONFIG?.opacity) ? defaultOpacities : THEME_CONFIG?.opacity;
    const extendedThemeOpacities = THEME_CONFIG?.extend?.opacity;
    const allOpacities = extendedThemeOpacities ? { ...themeOpacities, ...extendedThemeOpacities } : themeOpacities;
    const opacities = Object.keys(allOpacities).map(opacity => `${prefix}opacity-${opacity}`);

    const getOpacity = (themePropertyName: string, outputNamePrefix: string) => {
      const generatedOpacities = generateOpacities(allOpacities, THEME_CONFIG, themePropertyName);
      return Object.keys(generatedOpacities).map(opacity => `${prefix}${outputNamePrefix}-opacity-${opacity}`);
    };
    const textOpacities = getOpacity('textOpacity', 'text');
    const backgroundOpacities = getOpacity('backgroundOpacity', 'bg');
    const borderOpacities = getOpacity('borderOpacity', 'border');
    const divideOpacities = getOpacity('divideOpacity', 'divide');
    const placeholderOpacities = getOpacity('placeholderOpacity', 'placeholder');

    const themeSpacings = isEmpty(THEME_CONFIG?.spacing) ? defaultSpacing : THEME_CONFIG?.spacing;
    const extendedThemeSpacings = THEME_CONFIG?.extend?.spacing;
    const allSpacings = extendedThemeSpacings ? { ...themeSpacings, ...extendedThemeSpacings } : themeSpacings;

    const paddingSpacings: string[] = [];
    const marginSpacings: string[] = [];
    const widthSpacings: string[] = [];
    const heightSpacings: string[] = [];
    const spaceBetweenSpacings: string[] = [`${prefix}space-x-reverse`, `${prefix}space-y-reverse`];

    const sides = ['', 'y', 'x', 't', 'r', 'b', 'l'];

    sides.map(side => {
      paddingSpacings.push(`${prefix}p${side}-auto`);
      marginSpacings.push(`${prefix}m${side}-auto`);
    });

    Object.keys(allSpacings).map((spacing, i) => {
      widthSpacings.push(`${prefix}w-${spacing}`);
      heightSpacings.push(`${prefix}h-${spacing}`);
      sides.map(side => {
        paddingSpacings.push(`${prefix}p${side}-${spacing}`);
        marginSpacings.push(`${prefix}m${side}-${spacing}`);
        if (parseInt(spacing, 10) !== 0 && Object.values(allSpacings)[i] !== 0) {
          paddingSpacings.push(`${prefix}-p${side}-${spacing}`);
          marginSpacings.push(`${prefix}-m${side}-${spacing}`);
        }
      });

      ['', '-'].map(spaceBetweenPrefix => {
        ['x', 'y'].map(axis => {
          spaceBetweenSpacings.push(`${prefix}${spaceBetweenPrefix}space-${axis}-${spacing}`);
        });
      });
    });

    const themeBreakpoints = isEmpty(THEME_CONFIG?.screens) ? defaultScreens : THEME_CONFIG?.screens;
    const extendedThemeBreakpoints = THEME_CONFIG?.extend?.screens;
    const breakpoints = Object.keys(
      extendedThemeBreakpoints ? { ...themeBreakpoints, ...extendedThemeBreakpoints } : themeBreakpoints,
    );

    const maxWidthByBreakpoints: string[] = [];

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

    variantsObjKeys.map((key, i) => {
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
          const configHasOtherTransforms: boolean = variantsObjKeys.some(k => Object.keys(Transforms).indexOf(k) >= 0);
          if (configHasOtherTransforms) {
            const transformsNotInConfig = Object.keys(Transforms).filter(el => !variantsObjKeys.includes(el));
            transformsNotInConfig.map(transformClass => {
              variants.map(variant => {
                if (variant === 'responsive') {
                  breakpoints.map(breakpointVariant => {
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
          classesOfCategoryKey = getBackgroundColors();
          break;
        default:
          classesOfCategoryKey = AllClasses[key];
          break;
      }

      classesOfCategoryKey.map(c => {
        variants.map(variant => {
          if (variant === 'responsive') {
            breakpoints.map(breakpointVariant => {
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
      .replace(/PADDINGS/g, generateTypes(paddingSpacings))
      .replace(/MARGINS/g, generateTypes(marginSpacings))
      .replace(/WIDTH_SPACINGS/g, generateTypes(widthSpacings))
      .replace(/HEIGHT_SPACINGS/g, generateTypes(heightSpacings))
      .replace(/SPACE_BETWEEN/g, generateTypes(spaceBetweenSpacings))
      .replace(/BACKGROUND_COLORS/g, generateTypes(backgroundColors, prefix))
      .replace(/PLACEHOLDER_COLORS/g, generateTypes(placeholderColors))
      .replace(/BORDER_COLORS/g, generateTypes(borderColors))
      .replace(/TEXT_COLORS/g, generateTypes(textColors))
      .replace(/DIVIDE_COLORS/g, generateTypes(divideColors))
      .replace(/BACKGROUND_OPACITIES/g, generateTypes(backgroundOpacities))
      .replace(/TEXT_OPACITIES/g, generateTypes(textOpacities))
      .replace(/PSEUDO_CLASSES_VARIANTS/g, generateTypes(pseudoClasses))
      .replace(/BORDER_OPACITIES/g, generateTypes(borderOpacities))
      .replace(/DIVIDE_OPACITIES/g, generateTypes(divideOpacities))
      .replace(/PLACERHOLDER_OPACITIES/g, generateTypes(placeholderOpacities))
      .replace(/OPACITIES/g, generateTypes(opacities));

    fs.writeFile(`${outputFilename}`, result, 'utf8', error => {
      if (error) {
        console.error(error);
      }
    });
  });
}
