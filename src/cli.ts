#!/usr/bin/env node

/* tslint:disable:no-eval no-console */
import fs from 'fs';
import inquirer from 'inquirer';
import isEmpty from 'lodash.isempty';

import { baseTemplateString, defaultColors, defaultScreens, generateTypes } from './utils';

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
    fs.readFile(`./${answers.configFilename}`, { encoding: 'utf-8' }, (err, data: any) => {
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
            backgroundColors.push(`${prefix}bg-${colorKey}-${variant}`);
            placeholderColors.push(`${prefix}placeholder-${colorKey}-${variant}`);
            borderColors.push(`${prefix}border-${colorKey}-${variant}`);
            textColors.push(`${prefix}text-${colorKey}-${variant}`);
          });
        } else {
          backgroundColors.push(`${prefix}bg-${colorKey}`);
          placeholderColors.push(`${prefix}placeholder-${colorKey}`);
          borderColors.push(`${prefix}border-${colorKey}`);
          textColors.push(`${prefix}text-${colorKey}`);
        }
      }

      const themeBreakpoints = isEmpty(THEME_CONFIG?.screens) ? defaultScreens : THEME_CONFIG?.screens;
      const extendedThemeBreakpoints = THEME_CONFIG?.extend?.screens;
      const breakpoints = extendedThemeBreakpoints
        ? { ...themeBreakpoints, ...extendedThemeBreakpoints }
        : themeBreakpoints;

      const breakpointExportStatements: string[] = [];
      const breakpointCreateCustomParams: string[] = [];
      const breakpointCreateCustomReturns: string[] = [];

      Object.keys(breakpoints).map((breakpoint: string) => {
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

      fs.writeFile(`${answers.outputFilename}`, result, 'utf8', error => {
        if (error) {
          console.error(error);
        }
      });
    });
  })
  .catch(error => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error('Something went wrong with the prompt');
    }
  });
