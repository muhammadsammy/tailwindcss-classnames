import fs from 'fs';
import isEmpty from 'lodash.isempty';
import { AllClasses } from './classes/all';
import { allTransformClasses, Transforms } from './classes/Transforms';
import { baseTemplateString, defaultOpacities, generateTypes, generateOpacities, PseudoclassVariantKey } from './utils';
import { ConfigScanner } from './generation/ConfigScanner';
import { ClassesGenerator } from './generation/ClassesGenerator';

interface Options {
  configFilename: string;
  outputFilename: string;
}

export function createFileWithGeneratedTypes({ configFilename, outputFilename }: Options) {
  fs.readFile(`./${configFilename}`, { encoding: 'utf-8' }, (err, data: any) => {
    if (err) {
      console.error(err);
    }

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

    const result = baseTemplateString
      .replace(/_PREFIX_/g, prefix)
      .replace(/_SEPARATOR_/g, separator)
      .replace(/MAX_WIDTH_BY_BREAKPOINTS/g, generateTypes(classesGenerator.getGeneratedMaxWidthClasses()))
      .replace(/PADDINGS/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().paddings, prefix))
      .replace(/MARGINS/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().margins, prefix))
      .replace(/WIDTH_SPACINGS/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().widths, prefix))
      .replace(/HEIGHT_SPACINGS/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().heights, prefix))
      .replace(/SPACE_BETWEEN/g, generateTypes(classesGenerator.getGeneratedClassesWithSpacing().spaceBetweens, prefix))
      .replace(/BACKGROUND_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('bg'), prefix))
      .replace(
        /PLACEHOLDER_COLORS/g,
        generateTypes(classesGenerator.getGeneratedClassesWithColors('placeholder'), prefix),
      )
      .replace(/BORDER_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('border'), prefix))
      .replace(/TEXT_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('text'), prefix))
      .replace(/DIVIDE_COLORS/g, generateTypes(classesGenerator.getGeneratedClassesWithColors('divide'), prefix))
      .replace(
        /BACKGROUND_OPACITIES/g,
        generateTypes(classesGenerator.getGeneratedClassesWithOpacities().backgroundOpacities, prefix),
      )
      .replace(
        /TEXT_OPACITIES/g,
        generateTypes(classesGenerator.getGeneratedClassesWithOpacities().textOpacities, prefix),
      )
      .replace(
        /BORDER_OPACITIES/g,
        generateTypes(classesGenerator.getGeneratedClassesWithOpacities().borderOpacities, prefix),
      )
      .replace(
        /DIVIDE_OPACITIES/g,
        generateTypes(classesGenerator.getGeneratedClassesWithOpacities().divideOpacities, prefix),
      )
      .replace(
        /PLACERHOLDER_OPACITIES/g,
        generateTypes(classesGenerator.getGeneratedClassesWithOpacities().placeholderOpacities, prefix),
      )
      .replace(/OPACITIES/g, generateTypes(classesGenerator.getGeneratedClassesWithOpacities().opacities, prefix))
      .replace(/BREAKPOINT_EXPORT_STATEMENTS/g, breakpointsExportStatements.join('\n\n'))
      .replace(/PSEUDO_CLASSES_VARIANTS/g, generateTypes(classesGenerator.getGeneratedPseudoClasses()));

    fs.writeFile(`${outputFilename}`, result, 'utf8', error => {
      if (error) {
        console.error(error);
      }
    });
  });
}
