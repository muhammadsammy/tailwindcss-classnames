#!/usr/bin/env node

import commander from 'commander';
import inquirer from 'inquirer';
import colors from 'colors';
import {createFileWithGeneratedTypes} from './generation/createFile';

interface InquirerAnswers {
  configFilename: string;
  customClassesTypeName: string | void;
  cutomClassesFilename: string | void;
  outputFilename: string | void;
}

commander
  .option('-c, --config <config>', 'Name or relative path of the TailwindCSS config file')
  .option(
    '-o, --output <output>',
    'Name or relative path of the generated types file',
    'tailwindcss-classnames.ts',
  )
  .option(
    '-f, --classesFile <classesFile>',
    'Name or relative path of the file with the custom types',
    'none',
  )
  .option(
    '-t, --typeName <typeName>',
    'Name of the type exported from file containing the custom classes',
    'none',
  )
  .action(({config, output, classesFile, typeName}: {[key: string]: string | void}) => {
    if (config) {
      createFileWithGeneratedTypes({
        configFilename: config,
        outputFilename: output,
        customClassesFilename: classesFile,
        customClassesTypeName: typeName,
      });
    } else {
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
            name: 'cutomClassesFilename',
            type: 'input',
            default: 'none',
            message: 'Name or path of the file with the custom types',
          },
          {
            name: 'customClassesTypeName',
            type: 'input',
            default: 'none',
            message: 'Name of the type exported from file containing the custom classes',
          },
        ])
        .then((answers: InquirerAnswers) => {
          createFileWithGeneratedTypes({
            configFilename: answers.configFilename,
            outputFilename: answers.outputFilename,
            customClassesFilename: answers.cutomClassesFilename,
            customClassesTypeName: answers.customClassesTypeName,
          });
        })
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
