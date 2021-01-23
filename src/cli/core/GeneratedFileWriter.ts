/* eslint-disable @typescript-eslint/restrict-template-expressions */

import {promises as fs} from 'fs';
import colors from 'colors';
import {baseTemplateString} from '../lib/baseTemplateString';
import {ClassesGenerator} from './ClassesGenerator';

type TCliOptions = {
  configFilename: string | void;
  outputFilename: string | void;
  customClassesFilename: string | void;
};

/**
 * Responsible for writing a file with the generated content to the disk.
 */
export class GeneratedFileWriter {
  private readonly _configFilename: string | void;
  private readonly _outputFilename: string | void;
  private readonly _customClassesFilename: string | void;
  private _configFileData = '';

  /**
   * Initializes a new instance of `GeneratedFileWriter` class.
   * @param options The parsed CLI options from user input.
   */
  constructor(options: TCliOptions) {
    this._configFilename = options.configFilename;
    this._outputFilename = options.outputFilename;
    this._customClassesFilename = options.customClassesFilename;
  }

  /**
   * Writes the generated file to disk.
   */
  public write = async (): Promise<void> => {
    // Check CLI inputs
    try {
      this.validateCliOptions();
    } catch (error) {
      return;
    }

    // If inputs are valid, read the tailwind config file
    await this.readTailwindConfigFile();

    // Then create a file with the generated types
    fs.writeFile(`${this._outputFilename}`, this.generateFileContent(), 'utf8')
      .then(() => {
        this.printCliMessage(
          'success',
          `Types has successfully been generated in ${this._outputFilename} file.`,
        );
      })
      .catch(error => {
        this.printCliMessage('error', error);
      });
  };

  private validateCliOptions = (): void => {
    // Check for missing cli options

    if (!this._configFilename) {
      this.printCliMessage('error', 'tailwindcss config file name or path is not provided');
      throw new Error();
    }
    if (!this._outputFilename) {
      this.printCliMessage('error', 'Please provide a valid filename to add generated types to it');
      throw new Error();
    }

    // Check for invalid custom classes file content
    if (!!this._customClassesFilename) {
      fs.readFile(`./${this._customClassesFilename}`)
        .then(data => {
          if (!data.toString().includes('export default')) {
            this.printCliMessage(
              'error',
              'The type having the custom classes must be a default export',
            );
          }
        })
        .catch(error => {
          this.printCliMessage('error', `Unable to read the file with custom types. ${error}`);
        });

      throw new Error();
    }
  };

  private readTailwindConfigFile = async (): Promise<void> => {
    try {
      this._configFileData = await fs.readFile(`./${this._configFilename}`, {encoding: 'utf-8'});
    } catch (err) {
      this.printCliMessage('error', `Error Reading: "./${this._configFilename}"`);
    }
  };

  private generateFileContent = (): string => {
    return (
      baseTemplateString
        // Add all generated classnames types
        .replace(
          /___ALL_CLASSES___/g,
          new ClassesGenerator(
            eval(this._configFileData.replace(/(['"])?plugins(['"])? *: *\[(.*|\n)*?],?/g, '')),
          ).generate(),
        )

        // Add typing support for first-party plugins if found in the config
        .replace(
          /CUSTOM_FORMS_PLUGIN_TYPE/g,
          this._configFileData.includes('@tailwindcss/custom-forms')
            ? '\n  | TCustomFormsPluginClasses'
            : '',
        )
        .replace(
          /TYPOGRAPHY_PLUGIN_TYPE/g,
          this._configFileData.includes('@tailwindcss/typography')
            ? '\n  | TTypographyPluginClasses'
            : '',
        )

        // Append the custom classes types from external file if provided.
        .replace(
          /IMPORTED_T_CUSTOM_CLASSES/g,
          !!this._customClassesFilename ? '\n  | TCustomClassesFromExternalFile' : '',
        )
        .replace(
          /T_CUSTOM_CLASSES_IMPORT_STATEMENT/g,
          !!this._customClassesFilename
            ? `import TCustomClassesFromExternalFile from './${this._customClassesFilename}';`
            : '',
        )
    );
  };

  private printCliMessage = (type: 'error' | 'success', message: string): void => {
    const formattedMessage = '\n\n' + message + '\n' + '\n\n';

    switch (type) {
      case 'success':
        console.log(colors.black.bgGreen(formattedMessage));
        break;
      case 'error':
        console.error(colors.white.bgRed(formattedMessage));
        break;
      default:
        console.log(formattedMessage);
        break;
    }
  };
}
