import fs from 'fs';
import inquirer from 'inquirer';
import { baseTemplateString, generateTypes, defaultColors } from './utils';
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

      const themeColors = isEmpty(TAILWIND_CONFIG?.theme?.colors) ? defaultColors : TAILWIND_CONFIG?.theme?.colors;

      const colors = themeColors;

      const colorsKeys = Object.keys(colors);
      for (let i = 0; i < colorsKeys.length; i += 1) {
        const color = colorsKeys[i];
        const colorVal = colors[color];
        if (colorVal instanceof Object) {
          const colorVariants = Object.keys(colorVal);
          colorVariants.map(variant => {
            backgroundColors.push(`bg-${color}-${variant}`);
            placeholderColors.push(`placeholder-${color}-${variant}`);
            borderColors.push(`border-${color}-${variant}`);
            textColors.push(`text-${color}-${variant}`);
          });
        } else {
          backgroundColors.push(`bg-${color}`);
          placeholderColors.push(`placeholder-${color}`);
          borderColors.push(`border-${color}`);
          textColors.push(`text-${color}`);
        }
      }

      const result = baseTemplateString
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
