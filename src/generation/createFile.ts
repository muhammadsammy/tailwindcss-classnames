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

  //prettier-ignore
  if (!configFilename)
    return console.error('tailwindcss config file is not provided'.red);
  if (!outputFilename)
    return console.error('Please provide a valid filename to add generated types to it'.red);
  if (!customClassesFilename)
    return console.error('Please provide the file containing the custom classes'.red);
  if (!customClassesTypeName)
    return console.error('Please provide the name of exported custom classes type'.red);

  fs.readFile(`./${configFilename}`, {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.error(`Error Reading: "./${configFilename}"`.red);
      console.error(err);
    }

    const customFormsPluginClassesType = data.includes('@tailwindcss/custom-forms')
      ? '  | TCustomFormsPluginClasses'
      : '';

    data = data.replace(/(['"])?plugins(['"])? *: *\[(.*|\n)*?],?/g, '');

    const classesGenerator = new ClassesGenerator(eval(data));

    const isCustomClassesAdded: boolean =
      typeof customClassesTypeName !== 'undefined' &&
      typeof customClassesFilename !== 'undefined' &&
      customClassesTypeName !== 'none' &&
      customClassesFilename !== 'none';

    const importedTCustomClasses = isCustomClassesAdded ? '  | TCustomClassesFromExternalFile' : '';
    const TCustomClassesImportStatement = isCustomClassesAdded
      ? `import {${customClassesTypeName} as TCustomClassesFromExternalFile} from './${customClassesFilename}';`
      : '';

    const result = baseTemplateString
      .replace(/___ALL_CLASSES___/g, classesGenerator.generate())

      .replace(/CUSTOM_FORMS_PLUGIN_TYPE/g, customFormsPluginClassesType)

      .replace(/IMPORTED_T_CUSTOM_CLASSES/g, importedTCustomClasses)
      .replace(/T_CUSTOM_CLASSES_IMPORT_STATEMENT/g, TCustomClassesImportStatement);

    fs.writeFile(`${outputFilename}`, result, 'utf8', error => {
      if (error) {
        console.error(colors.red(error.toString()));
      }
    });
  });
}
