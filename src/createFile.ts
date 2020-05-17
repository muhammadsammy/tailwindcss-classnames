/* tslint:disable:no-eval no-console */

import fs from 'fs';
import isEmpty from 'lodash.isempty';
import {
  baseTemplateString,
  defaultColors,
  defaultScreens,
  defaultSpacing,
  defaultOpacities,
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
    const AllColors = extendedThemeColors ? { ...themeColors, ...extendedThemeColors } : themeColors;

    const backgroundColors: string[] = [];
    const placeholderColors: string[] = [];
    const borderColors: string[] = [];
    const textColors: string[] = [];
    // theme: {
    //   colors: {
    //     colorkey: colorVal ( "#fff" | {light: "#fff", lighter: "#f0f0f0",...} )
    //   }
    // }
    const colors = Object.keys(AllColors);
    for (let i = 0; i < colors.length; i += 1) {
      const colorKey = colors[i];
      const colorVal = AllColors[colorKey];
      if (colorVal instanceof Object) {
        const colorVariants = Object.keys(colorVal);
        colorVariants.map((variant: string) => {
          variant = variant === 'default' ? '' : `-${variant}`;
          backgroundColors.push(`${prefix}bg-${colorKey}${variant}`);
          placeholderColors.push(`${prefix}placeholder-${colorKey}${variant}`);
          borderColors.push(`${prefix}border-${colorKey}${variant}`);
          textColors.push(`${prefix}text-${colorKey}${variant}`);
        });
      } else {
        backgroundColors.push(`${prefix}bg-${colorKey}`);
        placeholderColors.push(`${prefix}placeholder-${colorKey}`);
        borderColors.push(`${prefix}border-${colorKey}`);
        textColors.push(`${prefix}text-${colorKey}`);
      }
    }

    const themeOpacities = isEmpty(THEME_CONFIG?.opacity) ? defaultOpacities : THEME_CONFIG?.opacity;
    const extendedThemeOpacities = THEME_CONFIG?.extend?.opacity;
    const allOpacities = extendedThemeOpacities ? { ...themeOpacities, ...extendedThemeOpacities } : themeOpacities;
    const opacities = Object.keys(allOpacities).map(opacity => `${prefix}opacity-${opacity}`);

    const getOpacity = (themePropertyName: string, outputNamePrefix: string) => {
      const opacities = generateOpacities(allOpacities, THEME_CONFIG, themePropertyName);
      return Object.keys(opacities).map(opacity => `${prefix}${outputNamePrefix}-opacity-${opacity}`);
    };
    const textOpacities = getOpacity('textOpacity', 'text');
    const backgroundOpacities = getOpacity('backgroundOpacity', 'bg');
    const borderOpacities = getOpacity('borderOpacity', 'border');
    const divideOpacities = getOpacity('divideOpacity', 'divide');
    const placeholderOpacities = getOpacity('placeholderOpacity', 'placeholder');

    const themeBreakpoints = isEmpty(THEME_CONFIG?.screens) ? defaultScreens : THEME_CONFIG?.screens;
    const extendedThemeBreakpoints = THEME_CONFIG?.extend?.screens;
    const breakpoints = extendedThemeBreakpoints
      ? { ...themeBreakpoints, ...extendedThemeBreakpoints }
      : themeBreakpoints;

    const breakpointExportStatements: string[] = [];
    const breakpointCreateCustomParams: string[] = [];
    const breakpointCreateCustomReturns: string[] = [];
    const maxWidthByBreakpoints: string[] = [];

    Object.keys(breakpoints).map((breakpoint: string) => {
      breakpointExportStatements.push(
        `export const ${breakpoint}: TPseudoClass = className => ('${prefix}${breakpoint}${separator}' + className) as TTailwindString;`,
      );
      breakpointCreateCustomParams.push(`${breakpoint}: TPseudoClass<T>;`);
      breakpointCreateCustomReturns.push(`${breakpoint},`);
      maxWidthByBreakpoints.push(`${prefix}max-w-screen-${breakpoint}`);
    });

    const themeSpacings = isEmpty(THEME_CONFIG?.spacing) ? defaultSpacing : THEME_CONFIG?.spacing;
    const extendedThemeSpacings = THEME_CONFIG?.extend?.spacing;
    const allSpacings = extendedThemeSpacings ? { ...themeSpacings, ...extendedThemeSpacings } : themeSpacings;

    const paddingSpacings: string[] = [];
    const marginSpacings: string[] = [];
    const widthSpacings: string[] = [];
    const heightSpacings: string[] = [];

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
    });

    const result = baseTemplateString
      .replace(/_PREFIX_/g, prefix)
      .replace(/_SEPARATOR_/g, separator)
      .replace(/MAX_WIDTH_BY_BREAKPOINTS/g, generateTypes(maxWidthByBreakpoints))
      .replace(/BREAKPOINT_EXPORT_STATEMENTS/g, breakpointExportStatements.join('\n\n'))
      .replace(/BREAKPOINTS_CREATE_CUSTOM_PARAMS/g, breakpointCreateCustomParams.join('\n  '))
      .replace(/BREAKPOINTS_CREATE_CUSTOM_RETURNS/g, breakpointCreateCustomReturns.join('\n  '))
      .replace(/PADDINGS/g, generateTypes(paddingSpacings))
      .replace(/MARGINS/g, generateTypes(marginSpacings))
      .replace(/WIDTH_SPACINGS/g, generateTypes(widthSpacings))
      .replace(/HEIGHT_SPACINGS/g, generateTypes(heightSpacings))
      .replace(/BACKGROUND_COLORS/g, generateTypes(backgroundColors))
      .replace(/PLACEHOLDER_COLORS/g, generateTypes(placeholderColors))
      .replace(/BORDER_COLORS/g, generateTypes(borderColors))
      .replace(/TEXT_COLORS/g, generateTypes(textColors))
      .replace(/BACKGROUND_OPACITIES/g, generateTypes(backgroundOpacities))
      .replace(/TEXT_OPACITIES/g, generateTypes(textOpacities))
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
