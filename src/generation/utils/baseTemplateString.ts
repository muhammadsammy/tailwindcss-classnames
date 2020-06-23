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

export type TFontFamily = '_PREFIX_font-sans' | '_PREFIX_font-serif' | '_PREFIX_font-mono';

export type TFontSize =
  | '_PREFIX_text-xs'
  | '_PREFIX_text-sm'
  | '_PREFIX_text-base'
  | '_PREFIX_text-lg'
  | '_PREFIX_text-xl'
  | '_PREFIX_text-2xl'
  | '_PREFIX_text-3xl'
  | '_PREFIX_text-4xl'
  | '_PREFIX_text-5xl'
  | '_PREFIX_text-6xl';

export type TFontSmoothing = '_PREFIX_antialiased' | '_PREFIX_subpixel-antialiased';

export type TFontStyle = '_PREFIX_italic' | '_PREFIX_non-italic';

export type TFontWeight =
  | '_PREFIX_font-hairline'
  | '_PREFIX_font-thin'
  | '_PREFIX_font-light'
  | '_PREFIX_font-normal'
  | '_PREFIX_font-medium'
  | '_PREFIX_font-semibold'
  | '_PREFIX_font-bold'
  | '_PREFIX_font-extrabold'
  | '_PREFIX_font-black';

export type TLetterSpacing =
  | '_PREFIX_tracking-tighter'
  | '_PREFIX_tracking-tight'
  | '_PREFIX_tracking-normal'
  | '_PREFIX_tracking-wide'
  | '_PREFIX_tracking-wider'
  | '_PREFIX_tricking-widest';

export type TLineHeight =
  | '_PREFIX_leading-none'
  | '_PREFIX_leading-tight'
  | '_PREFIX_leading-snug'
  | '_PREFIX_leading-normal'
  | '_PREFIX_leading-relaxed'
  | '_PREFIX_leading-loose'
  | '_PREFIX_leading-3'
  | '_PREFIX_leading-4'
  | '_PREFIX_leading-5'
  | '_PREFIX_leading-6'
  | '_PREFIX_leading-7'
  | '_PREFIX_leading-8'
  | '_PREFIX_leading-9'
  | '_PREFIX_leading-10';

export type TListStyleType = '_PREFIX_line-none' | '_PREFIX_list-disc' | '_PREFIX_list-decimal';

export type TListStylePosition = '_PREFIX_list-inside' | '_PREFIX_list-outside';

export type TPlaceholderColor =PLACEHOLDER_COLORS;

export type TPlaceholderOpacity =PLACERHOLDER_OPACITIES;

export type TTextAlign = '_PREFIX_text-left' | '_PREFIX_text-center' | '_PREFIX_text-right' | '_PREFIX_text-justify';

export type TTextColor =TEXT_COLORS;

export type TTextDecoration = '_PREFIX_underline' | '_PREFIX_line-through' | '_PREFIX_no-underline';

export type TTextTransform = '_PREFIX_uppercase' | '_PREFIX_lowercase' | '_PREFIX_capitalize' | '_PREFIX_normal-case';

export type TVerticalAlign =
  | '_PREFIX_align-baseline'
  | '_PREFIX_align-top'
  | '_PREFIX_align-middle'
  | '_PREFIX_align-bottom'
  | '_PREFIX_align-text-top'
  | '_PREFIX_align-text-bottom';

export type TWhitespace =
  | '_PREFIX_whitespace-normal'
  | '_PREFIX_whitespace-no-wrap'
  | '_PREFIX_whitespace-pre'
  | '_PREFIX_whitespace-pre-line'
  | '_PREFIX_whitespace-pre-wrap';

export type TWordBreak = '_PREFIX_break-normal' | '_PREFIX_break-words' | '_PREFIX_break-all' | '_PREFIX_truncate';

export type TTextOpacity =TEXT_OPACITIES;

export type TTypography =
  | TFontFamily
  | TFontSize
  | TFontSmoothing
  | TFontStyle
  | TFontWeight
  | TLetterSpacing
  | TLineHeight
  | TListStyleType
  | TListStylePosition
  | TPlaceholderColor
  | TPlaceholderOpacity
  | TTextAlign
  | TTextColor
  | TTextDecoration
  | TTextTransform
  | TVerticalAlign
  | TWhitespace
  | TWordBreak
  | TTextOpacity;

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

export type TBorderCollapse = '_PREFIX_border-collapse' | '_PREFIX_border-separate';

export type TTableLayout = '_PREFIX_table-auto' | '_PREFIX_table-fixed';

export type TTables = TBorderCollapse | TTableLayout;

___EFFECTS___

export type TTransitionProperty =
  | '_PREFIX_transition-none'
  | '_PREFIX_transition-all'
  | '_PREFIX_transition'
  | '_PREFIX_transition-colors'
  | '_PREFIX_transition-opacity'
  | '_PREFIX_transition-shadow'
  | '_PREFIX_transition-transform';

export type TTransitionDuration =
  | '_PREFIX_duration-75'
  | '_PREFIX_duration-100'
  | '_PREFIX_duration-150'
  | '_PREFIX_duration-200'
  | '_PREFIX_duration-300'
  | '_PREFIX_duration-500'
  | '_PREFIX_duration-700'
  | '_PREFIX_duration-1000';

export type TTransitionTimingFunction = '_PREFIX_ease-linear' | '_PREFIX_ease-in' | '_PREFIX_ease-out' | '_PREFIX_ease-in-out';

export type TTransitionDelay =
  | '_PREFIX_delay-75'
  | '_PREFIX_delay-100'
  | '_PREFIX_delay-150'
  | '_PREFIX_delay-200'
  | '_PREFIX_delay-300'
  | '_PREFIX_delay-500'
  | '_PREFIX_delay-700'
  | '_PREFIX_delay-1000';

export type TTransitions =
  | TTransitionProperty
  | TTransitionDuration
  | TTransitionTimingFunction
  | TTransitionDelay;

export type TScale =
  | '_PREFIX_scale-0'
  | '_PREFIX_scale-50'
  | '_PREFIX_scale-75'
  | '_PREFIX_scale-90'
  | '_PREFIX_scale-95'
  | '_PREFIX_scale-100'
  | '_PREFIX_scale-105'
  | '_PREFIX_scale-110'
  | '_PREFIX_scale-125'
  | '_PREFIX_scale-150'
  | '_PREFIX_scale-x-0'
  | '_PREFIX_scale-x-50'
  | '_PREFIX_scale-x-75'
  | '_PREFIX_scale-x-90'
  | '_PREFIX_scale-x-95'
  | '_PREFIX_scale-x-100'
  | '_PREFIX_scale-x-105'
  | '_PREFIX_scale-x-110'
  | '_PREFIX_scale-x-125'
  | '_PREFIX_scale-x-150'
  | '_PREFIX_scale-y-0'
  | '_PREFIX_scale-y-50'
  | '_PREFIX_scale-y-75'
  | '_PREFIX_scale-y-90'
  | '_PREFIX_scale-y-95'
  | '_PREFIX_scale-y-100'
  | '_PREFIX_scale-y-105'
  | '_PREFIX_scale-y-110'
  | '_PREFIX_scale-y-125'
  | '_PREFIX_scale-y-150';

export type TRotate =
  | '_PREFIX_rotate-0'
  | '_PREFIX_rotate-45'
  | '_PREFIX_rotate-90'
  | '_PREFIX_rotate-180'
  | '_PREFIX_-rotate-180'
  | '_PREFIX_-rotate-90'
  | '_PREFIX_-rotate-45';

export type TTranslate =
  | '_PREFIX_translate-x-0'
  | '_PREFIX_translate-x-1'
  | '_PREFIX_translate-x-2'
  | '_PREFIX_translate-x-3'
  | '_PREFIX_translate-x-4'
  | '_PREFIX_translate-x-5'
  | '_PREFIX_translate-x-6'
  | '_PREFIX_translate-x-8'
  | '_PREFIX_translate-x-10'
  | '_PREFIX_translate-x-12'
  | '_PREFIX_translate-x-16'
  | '_PREFIX_translate-x-20'
  | '_PREFIX_translate-x-24'
  | '_PREFIX_translate-x-32'
  | '_PREFIX_translate-x-40'
  | '_PREFIX_translate-x-48'
  | '_PREFIX_translate-x-56'
  | '_PREFIX_translate-x-64'
  | '_PREFIX_translate-x-px'
  | '_PREFIX_-translate-x-1'
  | '_PREFIX_-translate-x-2'
  | '_PREFIX_-translate-x-3'
  | '_PREFIX_-translate-x-4'
  | '_PREFIX_-translate-x-5'
  | '_PREFIX_-translate-x-6'
  | '_PREFIX_-translate-x-8'
  | '_PREFIX_-translate-x-10'
  | '_PREFIX_-translate-x-12'
  | '_PREFIX_-translate-x-16'
  | '_PREFIX_-translate-x-20'
  | '_PREFIX_-translate-x-24'
  | '_PREFIX_-translate-x-32'
  | '_PREFIX_-translate-x-40'
  | '_PREFIX_-translate-x-48'
  | '_PREFIX_-translate-x-56'
  | '_PREFIX_-translate-x-64'
  | '_PREFIX_-translate-x-px'
  | '_PREFIX_-translate-x-full'
  | '_PREFIX_-translate-x-1/2'
  | '_PREFIX_translate-x-1/2'
  | '_PREFIX_translate-x-full'
  | '_PREFIX_translate-y-0'
  | '_PREFIX_translate-y-1'
  | '_PREFIX_translate-y-2'
  | '_PREFIX_translate-y-3'
  | '_PREFIX_translate-y-4'
  | '_PREFIX_translate-y-5'
  | '_PREFIX_translate-y-6'
  | '_PREFIX_translate-y-8'
  | '_PREFIX_translate-y-10'
  | '_PREFIX_translate-y-12'
  | '_PREFIX_translate-y-16'
  | '_PREFIX_translate-y-20'
  | '_PREFIX_translate-y-24'
  | '_PREFIX_translate-y-32'
  | '_PREFIX_translate-y-40'
  | '_PREFIX_translate-y-48'
  | '_PREFIX_translate-y-56'
  | '_PREFIX_translate-y-64'
  | '_PREFIX_translate-y-px'
  | '_PREFIX_-translate-y-1'
  | '_PREFIX_-translate-y-2'
  | '_PREFIX_-translate-y-3'
  | '_PREFIX_-translate-y-4'
  | '_PREFIX_-translate-y-5'
  | '_PREFIX_-translate-y-6'
  | '_PREFIX_-translate-y-8'
  | '_PREFIX_-translate-y-10'
  | '_PREFIX_-translate-y-12'
  | '_PREFIX_-translate-y-16'
  | '_PREFIX_-translate-y-20'
  | '_PREFIX_-translate-y-24'
  | '_PREFIX_-translate-y-32'
  | '_PREFIX_-translate-y-40'
  | '_PREFIX_-translate-y-48'
  | '_PREFIX_-translate-y-56'
  | '_PREFIX_-translate-y-64'
  | '_PREFIX_-translate-y-px'
  | '_PREFIX_-translate-y-full'
  | '_PREFIX_-translate-y-1/2'
  | '_PREFIX_translate-y-1/2'
  | '_PREFIX_translate-y-full';

export type TSkew =
  | '_PREFIX_skew-x-0'
  | '_PREFIX_skew-x-3'
  | '_PREFIX_skew-x-6'
  | '_PREFIX_skew-x-12'
  | '_PREFIX_-skew-x-0'
  | '_PREFIX_-skew-x-3'
  | '_PREFIX_-skew-x-6'
  | '_PREFIX_-skew-x-12'
  | '_PREFIX_skew-y-0'
  | '_PREFIX_skew-y-3'
  | '_PREFIX_skew-y-6'
  | '_PREFIX_skew-y-12'
  | '_PREFIX_-skew-y-0'
  | '_PREFIX_-skew-y-3'
  | '_PREFIX_-skew-y-6'
  | '_PREFIX_-skew-y-12';

export type TTransformOrigin =
  | '_PREFIX_origin-center'
  | '_PREFIX_origin-top'
  | '_PREFIX_origin-top-right'
  | '_PREFIX_origin-right'
  | '_PREFIX_origin-bottom-right'
  | '_PREFIX_origin-bottom'
  | '_PREFIX_origin-bottom-left'
  | '_PREFIX_origin-left'
  | '_PREFIX_origin-top-left';

export type TTransforms = '_PREFIX_transform' | TScale | TRotate | TTranslate | TSkew | TTransformOrigin;

export type TAppearance = '_PREFIX_appearance-none';

export type TCursor =
  | '_PREFIX_cursor-auto'
  | '_PREFIX_cursor-default'
  | '_PREFIX_cursor-pointer'
  | '_PREFIX_cursor-wait'
  | '_PREFIX_cursor-text'
  | '_PREFIX_cursor-move'
  | '_PREFIX_cursor-not-allowed';

export type TOutline = '_PREFIX_outline-none';

export type TPointerEvents = '_PREFIX_pointer-events-none' | '_PREFIX_pointer-events-auto';

export type TResize = '_PREFIX_resize-none' | '_PREFIX_resize' | '_PREFIX_resize-y' | '_PREFIX_resize-x';

export type TUserSelect = '_PREFIX_select-none' | '_PREFIX_select-text' | '_PREFIX_select-all' | '_PREFIX_select-auto';

export type TInteractivity = TAppearance | TCursor | TOutline | TPointerEvents | TResize | TUserSelect;

export type TFill = '_PREFIX_fill-current';

export type TStroke = '_PREFIX_stroke-current';

export type TStrokeWidth = '_PREFIX_stroke-0' | '_PREFIX_stroke-1' | '_PREFIX_stroke- 2';

export type TSvg = TFill | TStroke | TStrokeWidth;

export type TScreenReaders = '_PREFIX_sr-only' | '_PREFIX_not-sr-only';

export type TAccessibility = TSvg | TScreenReaders;

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
