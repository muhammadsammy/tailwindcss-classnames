import { IGenerator } from './IGenerator';
import { capitalizeFirstLetter, generateTypes } from './utils/utils';

type ClassesGroup = { [key: string]: string[] };

export class ClassesGroupTemplateGenerator implements IGenerator {
  private readonly group: ClassesGroup;
  private readonly groupName: string;
  private readonly configPrefix: string;
  private members: string[];

  constructor(group: ClassesGroup, groupName: string, configPrefix: string) {
    this.group = group;
    this.groupName = groupName;
    this.configPrefix = configPrefix;
    this.members = Object.keys(this.group);
  }

  public generate = (): string => {
    return this.generateMembersStatements().join('\n\n') + '\n\n' + this.generateGroupStatement();
  };

  private generateMembersStatements = (): string[] => {
    return this.members.map(member => {
      return `export type T${capitalizeFirstLetter(member)} = ${generateTypes(
        this.group[member],
        this.configPrefix,
      )};`;
    });
  };

  private generateGroupStatement = (): string => {
    const getMembersStatementsReferences = (): string =>
      this.members.map(member => 'T' + capitalizeFirstLetter(member)).join('\n  | ');

    return (
      `export type T${capitalizeFirstLetter(this.groupName)} =` +
      '\n  | ' +
      getMembersStatementsReferences() +
      '\n'
    );
  };
}
