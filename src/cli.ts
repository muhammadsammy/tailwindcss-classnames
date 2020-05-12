#!/usr/bin/env node

import commander from 'commander';
import inquirer from 'inquirer';
import { createFileWithGeneratedTypes } from './createFile';

commander
  .option('-c, --config <config>', 'Name of the TailwindCSS config file')
  .option('-o, --output <output>', 'Name of the file with the generated types', 'tailwindcss-classnames.ts')
  .action(({ config, output }) => {
    if (config) {
      createFileWithGeneratedTypes({
        configFilename: config,
        outputFilename: output,
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
        ])
        .then(answers => {
          createFileWithGeneratedTypes({
            configFilename: answers.configFilename,
            outputFilename: answers.outputFilename,
          });
        })
        .catch(error => {
          if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment");
          } else {
            console.error('Something went wrong with the prompt');
          }
        });
    }
  });

commander.parse(process.argv);
