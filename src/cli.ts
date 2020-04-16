/* tslint:disable */

import fs from 'fs';
import inquirer from 'inquirer';
import { baseTemplateString, generateTypes, defaultColors, defaultScreens } from './utils';
import isEmpty from 'lodash.isempty';

inquirer
  .prompt([
    {
      name: 'configFilename',
      type: 'input',
      default: 'tailwind.config.js',
      message: 'Tailwind configuration filename',
    },
    {
      name: 'outputFilename',
      type: 'input',
      default: 'tailwindcss-classnames.ts',
      message: 'Name of the file with generated types',
    },
  ])
  .then(answers => {
    fs.readFile(`./${answers.configFilename}`, { encoding: 'utf-8' }, (err, data) => {
      if (err) throw err;

      const TAILWIND_CONFIG = eval(data);
      let backgroundColors: Array<string> = [];
      let placeholderColors: Array<string> = [];
      let borderColors: Array<string> = [];
      let textColors: Array<string> = [];

      const prefix = isEmpty(TAILWIND_CONFIG?.prefix) ? '' : TAILWIND_CONFIG?.prefix;
      const separator = isEmpty(TAILWIND_CONFIG?.separator) ? ':' : TAILWIND_CONFIG?.separator;

      // prettier-ignore
      const themeColors = isEmpty(TAILWIND_CONFIG?.theme?.colors)
        ? defaultColors
        : TAILWIND_CONFIG?.theme?.colors;
      const extendedThemeColors = TAILWIND_CONFIG?.theme?.extend?.colors;
      const colors = extendedThemeColors ? { ...themeColors, ...extendedThemeColors } : themeColors;

      const colorsKeys = Object.keys(colors);
      for (let i = 0; i < colorsKeys.length; i += 1) {
        const color = colorsKeys[i];
        const colorVal = colors[color];
        if (colorVal instanceof Object) {
          const colorVariants = Object.keys(colorVal);
          colorVariants.map(variant => {
            backgroundColors.push(`${prefix}bg-${color}-${variant}`);
            placeholderColors.push(`${prefix}placeholder-${color}-${variant}`);
            borderColors.push(`${prefix}border-${color}-${variant}`);
            textColors.push(`${prefix}text-${color}-${variant}`);
          });
        } else {
          backgroundColors.push(`${prefix}bg-${color}`);
          placeholderColors.push(`${prefix}placeholder-${color}`);
          borderColors.push(`${prefix}border-${color}`);
          textColors.push(`${prefix}text-${color}`);
        }
      }

      const themeBreakpoints = isEmpty(TAILWIND_CONFIG?.theme?.screens)
        ? defaultScreens
        : TAILWIND_CONFIG?.theme?.screens;
      const extendedThemeBreakpoints = TAILWIND_CONFIG?.theme?.extend?.screens;
      const breakpoints = extendedThemeBreakpoints
        ? { ...themeBreakpoints, ...extendedThemeBreakpoints }
        : themeBreakpoints;

      console.log(breakpoints);

      let breakpointExportStatements: Array<string> = [];
      let breakpointCreateCustomParams: Array<string> = [];
      let breakpointCreateCustomReturns: Array<string> = [];

      Object.keys(breakpoints).map(breakpoint => {
        breakpointExportStatements.push(
          `export const ${breakpoint}: TPseudoClass = className => ('${prefix}${breakpoint}${separator}' + className) as TTailwindString;`,
        );
        breakpointCreateCustomParams.push(`${breakpoint}: TPseudoClass<T>;`);
        breakpointCreateCustomReturns.push(`${breakpoint},`);
      });

      const result = baseTemplateString
        .replace(/_PREFIX_/g, prefix)
        .replace(/_SEPARATOR_/g, separator)
        .replace(/BREAKPOINT_EXPORT_STATEMENTS/g, breakpointExportStatements.join('\n\n'))
        .replace(/BREAKPOINTS_CREATE_CUSTOM_PARAMS/g, breakpointCreateCustomParams.join('\n  '))
        .replace(/BREAKPOINTS_CREATE_CUSTOM_RETURNS/g, breakpointCreateCustomReturns.join('\n  '))
        .replace(/BACKGROUND_COLORS/g, generateTypes(backgroundColors))
        .replace(/PLACEHOLDER_COLORS/g, generateTypes(placeholderColors))
        .replace(/BORDER_COLORS/g, generateTypes(borderColors))
        .replace(/TEXT_COLORS/g, generateTypes(textColors));

      fs.writeFile(`${answers.outputFilename}`, result, 'utf8', err => {
        if (err) {
          throw err;
        }
      });
    });
  })
  .catch(error => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log('Something went wrong with the prompt');
    }
  });
