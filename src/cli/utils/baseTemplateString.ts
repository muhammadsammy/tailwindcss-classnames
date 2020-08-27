export const baseTemplateString = `/* eslint-disable */
/* tslint:disable */
import classnamesLib from 'classnames';
T_CUSTOM_CLASSES_IMPORT_STATEMENT
___ALL_CLASSES___

export type TCustomFormsPluginClasses =
  | 'form-input'
  | 'form-textarea'
  | 'form-select'
  | 'form-multiselect'
  | 'form-checkbox'
  | 'form-radio'

export type TClasses =
  | TLayout
  | TTypography
  | TBackgrounds
  | TBorders
  | TFlexBox
  | TGrid
  | TSpacing
  | TSizing
  | TTables
  | TEffects
  | TTransforms
  | TTransitionsAndAnimations
  | TInteractivity
  | TSVG
  | TAccessibility CUSTOM_FORMS_PLUGIN_TYPE IMPORTED_T_CUSTOM_CLASSES
  | TPseudoClasses;


export type TTailwindString = "TAILWIND_STRING"

export type TArg =
  | TClasses
  | null
  | undefined
  | {[key in TClasses]?: boolean}
  | TTailwindString

export type TTailwind = (...args: TArg[]) => TTailwindString

export const classnames: TTailwind = classnamesLib as any

export const tw = classnames
`;
