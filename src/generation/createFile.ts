import fs from 'fs';
import { generateTypes } from './utils/utils';
import { baseTemplateString } from './utils/baseTemplateString';
import { ConfigScanner } from './ConfigScanner';
import { ClassesGenerator } from './ClassesGenerator';

interface Options {
  configFilename: string | void;
  outputFilename: string | void;
  cutomClassesFilename: string | 'none' | void;
  customClassesTypeName: string | 'none' | void;
}

export function createFileWithGeneratedTypes(options: Options): void {
  const { configFilename, outputFilename, cutomClassesFilename, customClassesTypeName } = options;

  if (!configFilename) return console.error('tailwindcss config file is not provided');
  if (!outputFilename) return console.error('Please provide a valid filename to add generated types to it');
  if (!cutomClassesFilename) return console.error('Please provide the file containing the custom classes');
  if (!customClassesTypeName) return console.error('Please provide the name of exported custom classes type');

  fs.readFile(`./${configFilename}`, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.error(`Error Reading: "./${configFilename}"`);
      console.error(err);
    }

    const customFormsPluginClassesType = data.includes('@tailwindcss/custom-forms')
      ? '  | TCustomFormsPluginClasses'
      : '';

    data = data.replace(/('|")?plugins('|")? *: *\[(.*|\n)*?\],?/g, '');

    const configScanner = new ConfigScanner(eval(data));

    const classesGenerator = new ClassesGenerator(eval(data));

    const prefix = configScanner.prefix;
    const separator = configScanner.separator;

    const breakpointsExportStatements = configScanner.getThemeBreakpoints().map(breakpoint => {
      return `export const ${breakpoint}: TPseudoClass = className => {
  console.warn("Calling ${breakpoint}() pseudoselector method is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13")
  return ('${prefix}${breakpoint}${separator}' + className) as TTailwindString;
}`;
    });

    const isCustomClassesAdded: boolean =
      typeof customClassesTypeName !== 'undefined' &&
      typeof cutomClassesFilename !== 'undefined' &&
      customClassesTypeName !== 'none' &&
      cutomClassesFilename !== 'none';

    const importedTCustomClasses = isCustomClassesAdded ? '  | TCustomClassesFromExternalFile' : '';
    const TCustomClassesImportStatement = isCustomClassesAdded
      ? `import {${customClassesTypeName} as TCustomClassesFromExternalFile} from './${cutomClassesFilename}';`
      : '';

    // prettier-ignore
    const result = baseTemplateString
      .replace(/_PREFIX_/g, prefix)
      .replace(/_SEPARATOR_/g, separator)
      .replace(/CUSTOM_FORMS_PLUGIN_TYPE/g, customFormsPluginClassesType)
      .replace(/MAX_WIDTH_BY_BREAKPOINTS/g, generateTypes(classesGenerator.getGeneratedMaxWidthClasses()))
      .replace(/PADDINGS/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().paddings, prefix))
      .replace(/MARGINS/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().margins, prefix))
      .replace(/WIDTH_SPACINGS/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().widths, prefix))
      .replace(/HEIGHT_SPACINGS/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().heights, prefix))
      .replace(/SPACE_BETWEEN/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().spaceBetweens, prefix))
      .replace(/BACKGROUND_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('bg'), prefix))
      .replace(/PLACEHOLDER_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('placeholder'), prefix))
      .replace(/BORDER_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('border'), prefix))
      .replace(/TEXT_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('text'), prefix))
      .replace(/DIVIDE_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('divide'), prefix))
      .replace(/BACKGROUND_OPACITIES/g, generateTypes(classesGenerator.getGeneratedClassesWithOpacities().backgroundOpacities, prefix))
      .replace(/TEXT_OPACITIES/g, generateTypes(classesGenerator.getGeneratedClassesWithOpacities().textOpacities, prefix))
      .replace(/BORDER_OPACITIES/g, generateTypes(classesGenerator.getGeneratedClassesWithOpacities().borderOpacities, prefix))
      .replace(/DIVIDE_OPACITIES/g, generateTypes(classesGenerator.getGeneratedClassesWithOpacities().divideOpacities, prefix))
      .replace(/PLACERHOLDER_OPACITIES/g, generateTypes(classesGenerator.getGeneratedClassesWithOpacities().placeholderOpacities, prefix))
      .replace(/OPACITIES/g, generateTypes(classesGenerator.getGeneratedClassesWithOpacities().opacities, prefix))
      .replace(/BREAKPOINT_EXPORT_STATEMENTS/g, breakpointsExportStatements.join('\n\n'))
      .replace(/PSEUDO_CLASSES_VARIANTS/g, generateTypes(classesGenerator.getGeneratedPseudoClasses()))
      .replace(/IMPORTED_T_CUSTOM_CLASSES/g, importedTCustomClasses)
      .replace(/T_CUSTOM_CLASSES_IMPORT_STATEMENT/g, TCustomClassesImportStatement);

    fs.writeFile(`${outputFilename}`, result, 'utf8', error => {
      if (error) {
        console.error(error);
      }
    });
  });
}
