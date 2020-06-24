import fs from 'fs';
import colors from 'colors';
import { generateTypes } from './utils/utils';
import { baseTemplateString } from './utils/baseTemplateString';
import { ConfigScanner } from './ConfigScanner';
import { ClassesGenerator } from './ClassesGenerator';

interface Options {
  configFilename: string | void;
  outputFilename: string | void;
  customClassesFilename: string | 'none' | void;
  customClassesTypeName: string | 'none' | void;
}

export function createFileWithGeneratedTypes(options: Options): void {
  const { configFilename, outputFilename, customClassesFilename, customClassesTypeName } = options;

  if (!configFilename) return console.error('tailwindcss config file is not provided'.red);
  if (!outputFilename) return console.error('Please provide a valid filename to add generated types to it'.red);
  if (!customClassesFilename) return console.error('Please provide the file containing the custom classes'.red);
  if (!customClassesTypeName) return console.error('Please provide the name of exported custom classes type'.red);

  fs.readFile(`./${configFilename}`, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.error(`Error Reading: "./${configFilename}"`.red);
      console.error(err);
    }

    const customFormsPluginClassesType = data.includes('@tailwindcss/custom-forms')
      ? '  | TCustomFormsPluginClasses'
      : '';

    data = data.replace(/(['"])?plugins(['"])? *: *\[(.*|\n)*?],?/g, '');

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
      typeof customClassesFilename !== 'undefined' &&
      customClassesTypeName !== 'none' &&
      customClassesFilename !== 'none';

    const importedTCustomClasses = isCustomClassesAdded ? '  | TCustomClassesFromExternalFile' : '';
    const TCustomClassesImportStatement = isCustomClassesAdded
      ? `import {${customClassesTypeName} as TCustomClassesFromExternalFile} from './${customClassesFilename}';`
      : '';

    // prettier-ignore
    const result = baseTemplateString
      .replace(/_PREFIX_/g, prefix)
      .replace(/_SEPARATOR_/g, separator)
      .replace(/CUSTOM_FORMS_PLUGIN_TYPE/g, customFormsPluginClassesType)
      .replace(/___BACKGROUNDS___/g, classesGenerator.backgrounds)
      .replace(/___BORDERS___/g, classesGenerator.borders)
      .replace(/___EFFECTS___/g, classesGenerator.effects)
      .replace(/___FLEXBOX___/g, classesGenerator.flexBox)
      .replace(/___SPACING___/g, classesGenerator.spacing)
      .replace(/___GRID___/g, classesGenerator.grid)
      .replace(/___TYPOGRAPHY___/g, classesGenerator.typography)
      .replace(/___TABLES___/g, classesGenerator.tables)
      .replace(/___TRANSITIONS___/g, classesGenerator.transitions)

      .replace(/MAX_WIDTH_BY_BREAKPOINTS/g, generateTypes(classesGenerator.getGeneratedMaxWidthByBreakpointsClasses()))
      .replace(/WIDTH_SPACINGS/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().widths, prefix))
      .replace(/HEIGHT_SPACINGS/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().heights, prefix))
      .replace(/PLACEHOLDER_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('placeholder'), prefix))
      .replace(/TEXT_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('text'), prefix))
      .replace(/TEXT_OPACITIES/g, generateTypes(classesGenerator.getGeneratedClassesWithOpacities().textOpacities, prefix))
      .replace(/PLACERHOLDER_OPACITIES/g, generateTypes(classesGenerator.getGeneratedClassesWithOpacities().placeholderOpacities, prefix))
      .replace(/BREAKPOINT_EXPORT_STATEMENTS/g, breakpointsExportStatements.join('\n\n'))
      .replace(/PSEUDO_CLASSES_VARIANTS/g, generateTypes(classesGenerator.getGeneratedPseudoClasses()))
      .replace(/IMPORTED_T_CUSTOM_CLASSES/g, importedTCustomClasses)
      .replace(/T_CUSTOM_CLASSES_IMPORT_STATEMENT/g, TCustomClassesImportStatement);

    fs.writeFile(`${outputFilename}`, result, 'utf8', error => {
      if (error) {
        console.error(colors.red(error.toString()));
      }
    });
  });
}
