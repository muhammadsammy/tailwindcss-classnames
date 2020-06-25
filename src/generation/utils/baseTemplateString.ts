export const baseTemplateString = `/* eslint-disable */
/* tslint:disable */
import classnamesLib from 'classnames';

T_CUSTOM_CLASSES_IMPORT_STATEMENT

export type TBoxSizing = '_PREFIX_box-border' | '_PREFIX_box-content';

export type TDisplay =
  | '_PREFIX_block'
  | '_PREFIX_inline-block'
  | '_PREFIX_inline'
  | '_PREFIX_flex'
  | '_PREFIX_inline-flex'
  | '_PREFIX_grid'
  | '_PREFIX_inline-grid'
  | '_PREFIX_table'
  | '_PREFIX_table-row'
  | '_PREFIX_table-cell'
  | '_PREFIX_hidden';

export type TContainer = '_PREFIX_container';

export type TFloat = '_PREFIX_float-right' | '_PREFIX_float-left' | '_PREFIX_float-none' | '_PREFIX_clearfix';

export type TClear = '_PREFIX_clear-left' | '_PREFIX_clear-right' | '_PREFIX_clear-both' | '_PREFIX_clear-none';

export type TObjectFit = '_PREFIX_object-contain' | '_PREFIX_object-cover' | '_PREFIX_object-fill' | '_PREFIX_object-none' | '_PREFIX_object-scale-down';

export type TObjectPosition =
  | '_PREFIX_object-bottom'
  | '_PREFIX_object-center'
  | '_PREFIX_object-left'
  | '_PREFIX_object-left-bottom'
  | '_PREFIX_object-left-top'
  | '_PREFIX_object-right'
  | '_PREFIX_object-right-bottom'
  | '_PREFIX_object-right-top'
  | '_PREFIX_object-top';

export type TOverflow =
  | '_PREFIX_overflow-auto'
  | '_PREFIX_overflow-hidden'
  | '_PREFIX_overflow-visible'
  | '_PREFIX_overflow-scroll'
  | '_PREFIX_overflow-x-auto'
  | '_PREFIX_overflow-y-auto'
  | '_PREFIX_overflow-x-hidden'
  | '_PREFIX_overflow-y-hidden'
  | '_PREFIX_overflow-x-visible'
  | '_PREFIX_overflow-y-visible'
  | '_PREFIX_overflow-x-scroll'
  | '_PREFIX_overflow-y-scroll'
  | '_PREFIX_scrolling-touch'
  | '_PREFIX_scrolling-auto';

export type TPosition = '_PREFIX_static' | '_PREFIX_fixed' | '_PREFIX_absolute' | '_PREFIX_relative' | '_PREFIX_sticky';

export type TTopRightBottomLeft =
  | '_PREFIX_inset-0'
  | '_PREFIX_inset-y-0'
  | '_PREFIX_inset-x-0'
  | '_PREFIX_inset-x-y'
  | '_PREFIX_top-0'
  | '_PREFIX_right-0'
  | '_PREFIX_bottom-0'
  | '_PREFIX_left-0'
  | '_PREFIX_inset-auto'
  | '_PREFIX_inset-y-auto'
  | '_PREFIX_inset-x-auto'
  | '_PREFIX_top-auto'
  | '_PREFIX_bottom-auto'
  | '_PREFIX_left-auto'
  | '_PREFIX_right-auto';

export type TVisibility = '_PREFIX_visible' | '_PREFIX_invisible';

export type TZIndex = '_PREFIX_z-0' | '_PREFIX_z-10' | '_PREFIX_z-20' | '_PREFIX_z-30' | '_PREFIX_z-40' | '_PREFIX_z-50' | '_PREFIX_z-auto';

export type TLayout =
  | TBoxSizing
  | TDisplay
  | TContainer
  | TFloat
  | TClear
  | TObjectFit
  | TObjectPosition
  | TOverflow
  | TPosition
  | TTopRightBottomLeft
  | TVisibility
  | TZIndex;

___TYPOGRAPHY___

___BACKGROUNDS___

___BORDERS___

___FLEXBOX___

___GRID___

___SPACING___

export type TWidth =WIDTH_SPACINGS;

export type TMinWidth = '_PREFIX_min-w-0' | '_PREFIX_min-w-full';

export type TMaxWidth =MAX_WIDTH_BY_BREAKPOINTS
  | '_PREFIX_max-w-xs'
  | '_PREFIX_max-w-sm'
  | '_PREFIX_max-w-md'
  | '_PREFIX_max-w-lg'
  | '_PREFIX_max-w-xl'
  | '_PREFIX_max-w-2xl'
  | '_PREFIX_max-w-3xl'
  | '_PREFIX_max-w-4xl'
  | '_PREFIX_max-w-5xl'
  | '_PREFIX_max-w-6xl'
  | '_PREFIX_max-w-none'
  | '_PREFIX_max-w-full';

export type THeight =HEIGHT_SPACINGS;

export type TMinHeight = '_PREFIX_min-h-0' | '_PREFIX_min-h-full' | '_PREFIX_min-h-screen';

export type TMaxHeight = '_PREFIX_max-h-full' | '_PREFIX_max-h-screen';

export type TSizing = TWidth | TMinWidth | TMaxWidth | THeight | TMinHeight | TMaxHeight;

___TABLES___

___EFFECTS___

___TRANSITIONS___

___TRANSFORMS___

___INTERACTIVITY___

___SVG___

___ACCESSIBILITY___

export type TPseudoClasses =PSEUDO_CLASSES_VARIANTS;

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
  | TTransitions
  | TInteractivity
  | TSVG
  | TAccessibility
CUSTOM_FORMS_PLUGIN_TYPE
IMPORTED_T_CUSTOM_CLASSES
  | TPseudoClasses;


export type TTailwindString = string & 'TAILWIND_CLASS';

export type TArgs<T extends TClasses> = T | null | undefined | { [key in T]?: boolean } | TTailwindString;

export type TTailwind<T extends TClasses = TClasses> = (...args: Array<TArgs<T>>) => TTailwindString;

export const classnames: TTailwind = classnamesLib as any;

export const tw = classnames;


/*
 * Deprecated, TODO: Remove them ***************************************************************************************
 */

export type TPseudoClass<T extends TClasses = TClasses> = (className: T) => TTailwindString;

export const hover: TPseudoClass = className => {
  console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_hover_SEPARATOR_' + className) as TTailwindString;
}

BREAKPOINT_EXPORT_STATEMENTS

export const focus: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_focus_SEPARATOR_' + className) as TTailwindString;
}

export const active: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_active_SEPARATOR_' + className) as TTailwindString;
}

export const disabled: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_disabled_SEPARATOR_' + className) as TTailwindString;
}

export const visited: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_visited_SEPARATOR_' + className) as TTailwindString;
}

export const firstChild: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_first-child_SEPARATOR_' + className) as TTailwindString;
}

export const lastChild: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_last-child_SEPARATOR_' + className) as TTailwindString;
}

export const oddChild: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_odd-child_SEPARATOR_' + className) as TTailwindString;
}

export const evenChild: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_even-child_SEPARATOR_' + className) as TTailwindString;
}

export const groupHover: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_group-hover_SEPARATOR_' + className) as TTailwindString;
}

export const groupFocus: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_group-focus_SEPARATOR_' + className) as TTailwindString;
}

export const focusWithin: TPseudoClass = className => {
console.warn("Calling pseudoselectors as methods is deprecated. use regular tailwindcss classes instead. See https://github.com/muhammadsammy/tailwindcss-classnames/issues/13");
  return ('_PREFIX_focus-within_SEPARATOR_' + className) as TTailwindString;
}
`;
