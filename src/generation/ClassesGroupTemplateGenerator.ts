import { IGenerator } from './IGenerator';
import { capitalizeFirstLetter, generateTypes } from './utils/utils';

type ClassesGroup = { [key: string]: string[] };

export class ClassesGroupTemplateGenerator implements IGenerator {
  public generate(classesGroup: ClassesGroup, classesGroupName: string, configPrefix: string): string {
    const members: string[] = Object.keys(classesGroup);

    const generateMembersStatements = (): string[] => {
      return members.map(member => {
        return `export type T${capitalizeFirstLetter(member)} = ${generateTypes(classesGroup[member], configPrefix)};`;
      });
    };

    const generateGroupStatement = (): string => {
      return (
        `export type T${capitalizeFirstLetter(classesGroupName)} =` +
        '\n  | ' +
        members
          .map(member => {
            return 'T' + capitalizeFirstLetter(member);
          })
          .join('\n  | ')
      );
    };

    return generateMembersStatements().join('\n\n') + '\n\n' + generateGroupStatement();
  }
}
