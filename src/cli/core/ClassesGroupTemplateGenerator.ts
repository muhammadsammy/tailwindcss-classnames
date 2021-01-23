import {capitalizeFirstLetter, generateTypes} from '../utils';

type ClassesGroup = {[key: string]: string[]};

/**
 * Responsible for template string generation for a utility classes group object.
 *
 *
 * ### example:
 *
 * A utility group object as:
 *
 * ```js
 * const FlexBox = {
 *   alignSelf: ['self-auto', 'self-start', 'self-center'],
 *   flexWrap: ['flex-nowrap', 'flex-wrap'],
 * }
 *```
 *
 * will produce a template which looks like this:
 *
 * ```ts
 * export type TFlexWrap =
 * | 'flex-nowrap'
 * | 'flex-wrap';
 *
 * export type TAlignSelf =
 * | 'self-auto'
 * | 'self-start'
 * | 'self-center';
 *
 * export type TFlexBox = TFlexWrap | TAlignSelf;
 * ```
 */
export class ClassesGroupTemplateGenerator {
  private readonly _group: ClassesGroup;
  private readonly _groupName: string;
  private readonly _configPrefix: string;
  private _members: string[];

  /**
   * Initializes a new instance of the `ClassesGroupTemplateGenerator` class.
   * @param group The group of the utility classes.
   * @param groupName The name of the group.
   * @param configPrefix The value of TailwindCSS config prefix property.
   */
  constructor(group: ClassesGroup, groupName: string, configPrefix: string) {
    this._group = group;
    this._groupName = groupName;
    this._configPrefix = configPrefix;
    this._members = Object.keys(this._group);
  }

  /**
   * Generates the template for the provided group.
   */
  public generate = (): string => {
    return this.generateMembersStatements().join('\n\n') + '\n\n' + this.generateGroupStatement();
  };

  private generateMembersStatements = (): string[] => {
    return this._members.map(member => {
      return `export type T${capitalizeFirstLetter(member)} = ${generateTypes(
        this._group[member],
        this._configPrefix,
      )};`;
    });
  };

  private generateGroupStatement = (): string => {
    const getMembersStatementsReferences = (): string =>
      this._members.map(member => 'T' + capitalizeFirstLetter(member)).join('\n  | ');

    return (
      `export type T${capitalizeFirstLetter(this._groupName)} =` +
      '\n  | ' +
      getMembersStatementsReferences() +
      '\n'
    );
  };
}
