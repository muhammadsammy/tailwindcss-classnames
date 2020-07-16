import fs from 'fs';
import colors from 'colors';
import {baseTemplateString} from './utils/baseTemplateString';
import {ClassesGenerator} from './ClassesGenerator';

interface Options {
  configFilename: string | void;
  outputFilename: string | void;
  customClassesFilename: string | 'none' | void;
  customClassesTypeName: string | 'none' | void;
}

export function createFileWithGeneratedTypes(options: Options): void {
  const {configFilename, outputFilename, customClassesFilename, customClassesTypeName} = options;

  if (!configFilename)
    return console.error('tailwindcss config file name or path is not provided'.red);
  if (!outputFilename)
    return console.error('Please provide a valid filename to add generated types to it'.red);
  if (!customClassesFilename)
    return console.error('Please provide the file containing the custom classes'.red);
  if (!customClassesTypeName)
    return console.error('Please provide the name of exported custom classes type'.red);

  fs.readFile(`./${configFilename}`, {encoding: 'utf-8'}, (err, data) => {
    if (err) console.error(`Error Reading: "./${configFilename}"`.red);

    data = data.replace(/(['"])?plugins(['"])? *: *\[(.*|\n)*?],?/g, '');

    const isCustomClassesAdded: boolean =
      typeof customClassesTypeName !== 'undefined' &&
      typeof customClassesFilename !== 'undefined' &&
      customClassesTypeName !== 'none' &&
      customClassesFilename !== 'none';

    const generationResult = baseTemplateString
      .replace(/___ALL_CLASSES___/g, new ClassesGenerator(eval(data)).generate())
      .replace(
        /CUSTOM_FORMS_PLUGIN_TYPE/g,
        data.includes('@tailwindcss/custom-forms') ? '  | TCustomFormsPluginClasses' : '',
      )
      .replace(
        /IMPORTED_T_CUSTOM_CLASSES/g,
        isCustomClassesAdded ? '  | TCustomClassesFromExternalFile' : '',
      )
      .replace(
        /T_CUSTOM_CLASSES_IMPORT_STATEMENT/g,
        isCustomClassesAdded
          ? `import {${customClassesTypeName} as TCustomClassesFromExternalFile} from './${customClassesFilename}';`
          : '',
      );

    fs.writeFile(`${outputFilename}`, generationResult, 'utf8', error => {
      if (error) console.error(colors.red(error.toString()));
    });
  });
}
