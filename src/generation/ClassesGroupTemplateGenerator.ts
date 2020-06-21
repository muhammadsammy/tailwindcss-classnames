import { IGenerator } from './IGenerator';
import { capitalizeFirstLetter, generateTypes } from './utils/utils';

type ClassesGroup = { [key: string]: string[] };

export class ClassesGroupTemplateGenerator implements IGenerator {
  private readonly group: ClassesGroup;
  private readonly groupName: string;
  private readonly configPrefix: string;
  private members: string[];

  constructor(classesGroup: ClassesGroup, classesGroupName: string, configPrefix: string) {
    this.group = classesGroup;
    this.groupName = classesGroupName;
    this.configPrefix = configPrefix;
    this.members = Object.keys(this.group);
  }

  private generateMembersStatements = (): string[] => {
    return this.members.map(member => {
      return `export type T${capitalizeFirstLetter(member)} = ${generateTypes(this.group[member], this.configPrefix)};`;
    });
  };

  private generateGroupStatement = (): string => {
    return (
      `export type T${capitalizeFirstLetter(this.groupName)} =` +
      '\n  | ' +
      this.members
        .map(member => {
          return 'T' + capitalizeFirstLetter(member);
        })
        .join('\n  | ')
    );
  };

  public generate(): string {
    return this.generateMembersStatements().join('\n\n') + '\n\n' + this.generateGroupStatement();
  }
}
