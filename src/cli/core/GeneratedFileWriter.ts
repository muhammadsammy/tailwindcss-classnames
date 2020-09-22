/* eslint-disable @typescript-eslint/restrict-template-expressions */

import {promises as fs} from 'fs';
import colors from 'colors';
import {baseTemplateString} from '../lib/baseTemplateString';
import {ClassesGenerator} from './ClassesGenerator';

type CliArguments = {
  configFilename: string | void;
  outputFilename: string | void;
  customClassesFilename: string | void;
  customClassesTypeName: string | void;
};

export class GeneratedFileWriter {
  private readonly configFilename: string | void;
  private readonly outputFilename: string | void;
  private readonly customClassesFilename: string | void;
  private readonly customClassesTypeName: string | void;
  private readonly isCustomClassesAdded: boolean;
  private configFileData = '';

  constructor(options: CliArguments) {
    this.configFilename = options.configFilename;
    this.outputFilename = options.outputFilename;
    this.customClassesFilename = options.customClassesFilename;
    this.customClassesTypeName = options.customClassesTypeName;
    this.isCustomClassesAdded = !!(this.customClassesFilename && this.customClassesTypeName);
  }

  public write = async (): Promise<void> => {
    if (this.missingCliOptionError().length > 0)
      return console.error(this.missingCliOptionError().red);

    await this.readTailwindConfigFile();

    fs.writeFile(`${this.outputFilename}`, this.generateFileContent(), 'utf8').catch(error => {
      console.error(colors.red(error));
    });
  };

  private missingCliOptionError = (): string => {
    if (!this.configFilename) return 'tailwindcss config file name or path is not provided';
    if (!this.outputFilename) return 'Please provide a valid filename to add generated types to it';
    if (this.customClassesTypeName && !this.customClassesFilename)
      return 'Please provide the file containing custom classes';
    if (this.customClassesFilename && !this.customClassesTypeName)
      return 'Please provide the name of the exported custom type';

    return '';
  };

  private readTailwindConfigFile = async (): Promise<void> => {
    try {
      this.configFileData = await fs.readFile(`./${this.configFilename}`, {encoding: 'utf-8'});
    } catch (err) {
      console.error(`Error Reading: "./${this.configFilename}"`.red);
    }
  };

  private generateFileContent = (): string => {
    return baseTemplateString
      .replace(
        /___ALL_CLASSES___/g,
        new ClassesGenerator(
          eval(this.configFileData.replace(/(['"])?plugins(['"])? *: *\[(.*|\n)*?],?/g, '')),
        ).generate(),
      )
      .replace(
        /CUSTOM_FORMS_PLUGIN_TYPE/g,
        this.configFileData.includes('@tailwindcss/custom-forms')
          ? '\n  | TCustomFormsPluginClasses'
          : '',
      )
      .replace(
        /TYPOGRAPHY_PLUGIN_TYPE/g,
        this.configFileData.includes('@tailwindcss/typography')
          ? '\n  | TTypographyPluginClasses'
          : '',
      )
      .replace(
        /IMPORTED_T_CUSTOM_CLASSES/g,
        this.isCustomClassesAdded ? '\n  | TCustomClassesFromExternalFile' : '',
      )
      .replace(
        /T_CUSTOM_CLASSES_IMPORT_STATEMENT/g,
        this.isCustomClassesAdded
          ? `import {${this.customClassesTypeName} as TCustomClassesFromExternalFile} from './${this.customClassesFilename}';`
          : '',
      );
  };
}
