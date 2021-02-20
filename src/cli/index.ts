#!/usr/bin/env node

import commander from 'commander';
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

import {GeneratedFileWriter} from './core/GeneratedFileWriter';

type TInquirerAnswers = {
  configFilename: string;
  outputFilename: string | void;
  customClassesFilename: string | void;
};

commander
  // Configure CLI options
  .option('-i, --input <input>', 'Name or relative path of the TailwindCSS config file')
  .option(
    '-o, --output <output>',
    'Name or relative path of the generated types file',
    'tailwindcss-classnames.ts',
  )
  .option('-x, --extra <extra>', 'Name or relative path of the file with the custom extra types')

  // Define the action of the CLI
  .action(({input, output, extra}: {[key: string]: string | void}) => {
    const isConfigFileFound: boolean = fs.existsSync('./tailwind.config.js');
    // If the config file is found or provided explicitly by the user...
    if (isConfigFileFound || !!input) {
      // Generate the types and write them to a file on disk
      return new GeneratedFileWriter({
        configFilename: isConfigFileFound ? 'tailwind.config.js' : input,
        outputFilename: output,
        customClassesFilename: extra,
      }).write();
    }
    // Otherwise...
    else {
      // Prompt the user and ask to enter required information
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
          {
            name: 'customClassesFilename',
            type: 'input',
            default: null,
            message: 'Name or path of the file with the custom types',
          },
        ])
        .then((answers: TInquirerAnswers) => {
          // Get the answers and use them to create the file with generated types
          return new GeneratedFileWriter({
            configFilename: answers.configFilename,
            outputFilename: answers.outputFilename,
            customClassesFilename: answers.customClassesFilename,
          }).write();
        })
        // Catch any errors that occur when prompting the user...
        .catch(error => {
          if (error.isTtyError) {
            console.error(colors.red("Prompt couldn't be rendered in the current environment"));
          } else {
            console.error(colors.red('Something went wrong with the prompt'));
          }
        });
    }
  });

commander.parse(process.argv);
