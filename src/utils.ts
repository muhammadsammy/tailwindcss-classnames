/* tslint:disable: prefer-template */
import isEmpty from 'lodash.isempty';

export function generateTypes(arr: string[]) {
  return '\n  | ' + arr.map(n => `'${n}'`).join('\n  | ');
}

export function generateOpacities(
  defaultOpacities: { [key: string]: string },
  theme: { [key: string]: any },
  property: string,
): { [key: string]: string } {
  const themeOpacities = isEmpty(theme[property]) ? defaultOpacities : theme[property];
  const extendedThemeOpacities = theme.extend?.[property];
  return extendedThemeOpacities ? { ...themeOpacities, ...extendedThemeOpacities } : themeOpacities;
}

export const defaultScreens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const defaultColors = {
  transparent: 'transparent',

  black: '#000',
  white: '#fff',

  gray: {
    100: '#f7fafc',
    200: '#edf2f7',
    300: '#e2e8f0',
    400: '#cbd5e0',
    500: '#a0aec0',
    600: '#718096',
    700: '#4a5568',
    800: '#2d3748',
    900: '#1a202c',
  },
  red: {
    100: '#fff5f5',
    200: '#fed7d7',
    300: '#feb2b2',
    400: '#fc8181',
    500: '#f56565',
    600: '#e53e3e',
    700: '#c53030',
    800: '#9b2c2c',
    900: '#742a2a',
  },
  orange: {
    100: '#fffaf0',
    200: '#feebc8',
    300: '#fbd38d',
    400: '#f6ad55',
    500: '#ed8936',
    600: '#dd6b20',
    700: '#c05621',
    800: '#9c4221',
    900: '#7b341e',
  },
  yellow: {
    100: '#fffff0',
    200: '#fefcbf',
    300: '#faf089',
    400: '#f6e05e',
    500: '#ecc94b',
    600: '#d69e2e',
    700: '#b7791f',
    800: '#975a16',
    900: '#744210',
  },
  green: {
    100: '#f0fff4',
    200: '#c6f6d5',
    300: '#9ae6b4',
    400: '#68d391',
    500: '#48bb78',
    600: '#38a169',
    700: '#2f855a',
    800: '#276749',
    900: '#22543d',
  },
  teal: {
    100: '#e6fffa',
    200: '#b2f5ea',
    300: '#81e6d9',
    400: '#4fd1c5',
    500: '#38b2ac',
    600: '#319795',
    700: '#2c7a7b',
    800: '#285e61',
    900: '#234e52',
  },
  blue: {
    100: '#ebf8ff',
    200: '#bee3f8',
    300: '#90cdf4',
    400: '#63b3ed',
    500: '#4299e1',
    600: '#3182ce',
    700: '#2b6cb0',
    800: '#2c5282',
    900: '#2a4365',
  },
  indigo: {
    100: '#ebf4ff',
    200: '#c3dafe',
    300: '#a3bffa',
    400: '#7f9cf5',
    500: '#667eea',
    600: '#5a67d8',
    700: '#4c51bf',
    800: '#434190',
    900: '#3c366b',
  },
  purple: {
    100: '#faf5ff',
    200: '#e9d8fd',
    300: '#d6bcfa',
    400: '#b794f4',
    500: '#9f7aea',
    600: '#805ad5',
    700: '#6b46c1',
    800: '#553c9a',
    900: '#44337a',
  },
  pink: {
    100: '#fff5f7',
    200: '#fed7e2',
    300: '#fbb6ce',
    400: '#f687b3',
    500: '#ed64a6',
    600: '#d53f8c',
    700: '#b83280',
    800: '#97266d',
    900: '#702459',
  },
};

export const defaultSpacing = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
};

export const defaultOpacities = {
  '0': '0',
  '25': '0.25',
  '50': '0.5',
  '75': '0.75',
  '100': '1',
};

export const baseTemplateString = `
import classnamesLib from 'classnames';

export type TUtility = '_PREFIX_mx-auto';

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

export type TBackgroundAttachment = '_PREFIX_bg-fixed' | '_PREFIX_bg-local' | '_PREFIX_bg-scroll';

export type TBackgroundColor =BACKGROUND_COLORS;

export type TBackgroundPosition =
  | '_PREFIX_bg-bottom'
  | '_PREFIX_bg-center'
  | '_PREFIX_bg-left'
  | '_PREFIX_bg-left-bottom'
  | '_PREFIX_bg-left-top'
  | '_PREFIX_bg-right'
  | '_PREFIX_bg-right-bottom'
  | '_PREFIX_bg-right-top'
  | '_PREFIX_bg-top';

export type TBackgroundRepeat =
  | '_PREFIX_bg-repeat'
  | '_PREFIX_bg-no-repeat'
  | '_PREFIX_bg-repeat-x'
  | '_PREFIX_bg-repeat-y'
  | '_PREFIX_bg-repeat-round'
  | '_PREFIX_bg-repeat-space';

export type TBackgroundSize = '_PREFIX_bg-auto' | '_PREFIX_bg-cover' | '_PREFIX_bg-contain';

export type TBackgroundOpacity =BACKGROUND_OPACITIES;

export type TBackgrounds =
  | TBackgroundAttachment
  | TBackgroundColor
  | TBackgroundPosition
  | TBackgroundRepeat
  | TBackgroundSize
  | TBackgroundOpacity;

export type TBorderColor =BORDER_COLORS;

export type TBorderStyle = '_PREFIX_border-solid' | '_PREFIX_border-dashed' | '_PREFIX_border-dotted' | '_PREFIX_border-double' | '_PREFIX_border-none';

export type TBorderWidth =
  | '_PREFIX_border'
  | '_PREFIX_border-0'
  | '_PREFIX_border-2'
  | '_PREFIX_border-4'
  | '_PREFIX_border-8'
  | '_PREFIX_border-t'
  | '_PREFIX_border-r'
  | '_PREFIX_border-b'
  | '_PREFIX_border-l'
  | '_PREFIX_border-t-0'
  | '_PREFIX_border-r-0'
  | '_PREFIX_border-b-0'
  | '_PREFIX_border-l-0'
  | '_PREFIX_border-t-2'
  | '_PREFIX_border-r-2'
  | '_PREFIX_border-b-2'
  | '_PREFIX_border-l-2'
  | '_PREFIX_border-t-4'
  | '_PREFIX_border-r-4'
  | '_PREFIX_border-b-4'
  | '_PREFIX_border-l-4'
  | '_PREFIX_border-t-8'
  | '_PREFIX_border-r-8'
  | '_PREFIX_border-b-8'
  | '_PREFIX_border-l-8';

export type TBorderRadius =
  | '_PREFIX_rounded-none'
  | '_PREFIX_rounded-sm'
  | '_PREFIX_rounded'
  | '_PREFIX_rounded-md'
  | '_PREFIX_rounded-lg'
  | '_PREFIX_rounded-full'
  | '_PREFIX_rounded-t-none'
  | '_PREFIX_rounded-r-none'
  | '_PREFIX_rounded-b-none'
  | '_PREFIX_rounded-l-none'
  | '_PREFIX_rounded-t-sm'
  | '_PREFIX_rounded-r-sm'
  | '_PREFIX_rounded-b-sm'
  | '_PREFIX_rounded-l-sm'
  | '_PREFIX_rounded-t'
  | '_PREFIX_rounded-r'
  | '_PREFIX_rounded-b'
  | '_PREFIX_rounded-l'
  | '_PREFIX_rounded-t-md'
  | '_PREFIX_rounded-r-md'
  | '_PREFIX_rounded-b-md'
  | '_PREFIX_rounded-l-md'
  | '_PREFIX_rounded-t-lg'
  | '_PREFIX_rounded-r-lg'
  | '_PREFIX_rounded-b-lg'
  | '_PREFIX_rounded-l-lg'
  | '_PREFIX_rounded-t-full'
  | '_PREFIX_rounded-r-full'
  | '_PREFIX_rounded-b-full'
  | '_PREFIX_rounded-l-full'
  | '_PREFIX_rounded-tl-none'
  | '_PREFIX_rounded-tr-none'
  | '_PREFIX_rounded-br-none'
  | '_PREFIX_rounded-bl-none'
  | '_PREFIX_rounded-tl-sm'
  | '_PREFIX_rounded-tr-sm'
  | '_PREFIX_rounded-br-sm'
  | '_PREFIX_rounded-bl-sm'
  | '_PREFIX_rounded-tl'
  | '_PREFIX_rounded-tr'
  | '_PREFIX_rounded-br'
  | '_PREFIX_rounded-bl'
  | '_PREFIX_rounded-tl-md'
  | '_PREFIX_rounded-tr-md'
  | '_PREFIX_rounded-br-md'
  | '_PREFIX_rounded-bl-md'
  | '_PREFIX_rounded-tl-lg'
  | '_PREFIX_rounded-tr-lg'
  | '_PREFIX_rounded-br-lg'
  | '_PREFIX_rounded-bl-lg'
  | '_PREFIX_rounded-tl-full'
  | '_PREFIX_rounded-tr-full'
  | '_PREFIX_rounded-br-full'
  | '_PREFIX_rounded-bl-full';

export type TBorderOpacity =BORDER_OPACITIES;

export type TDivideWidth =
  | '_PREFIX_divide-x'
  | '_PREFIX_divide-x-0'
  | '_PREFIX_divide-x-2'
  | '_PREFIX_divide-x-4'
  | '_PREFIX_divide-x-8'
  | '_PREFIX_divide-y'
  | '_PREFIX_divide-y-0'
  | '_PREFIX_divide-y-2'
  | '_PREFIX_divide-y-4'
  | '_PREFIX_divide-y-8'
  | '_PREFIX_divide-x-reverse'
  | '_PREFIX_divide-y-reverse';

export type TDivideColor =DIVIDE_COLORS;

export type TDivideOpacity =DIVIDE_OPACITIES;

export type TBorders = 
  | TBorderColor
  | TBorderStyle
  | TBorderWidth
  | TBorderRadius
  | TBorderOpacity
  | TDivideWidth
  | TDivideColor
  | TDivideOpacity;

export type TFlexDirection = '_PREFIX_flex-row' | '_PREFIX_flex-row-reverse' | '_PREFIX_flex-col' | '_PREFIX_flex-col-reverse';

export type TFlexWrap = '_PREFIX_flex-no-wrap' | '_PREFIX_flex-wrap' | '_PREFIX_flex-wrap-reverse';

export type TAlignItems = '_PREFIX_items-stretch' | '_PREFIX_items-start' | '_PREFIX_items-center' | '_PREFIX_items-end' | '_PREFIX_items-baseline';

export type TAlignContent = '_PREFIX_content-start' | '_PREFIX_content-center' | '_PREFIX_content-end' | '_PREFIX_content-between' | '_PREFIX_content-around';

export type TAlignSelf = '_PREFIX_self-auto' | '_PREFIX_self-start' | '_PREFIX_self-center' | '_PREFIX_self-end' | '_PREFIX_self-stretch';

export type TJustifyContent = '_PREFIX_justify-start' | '_PREFIX_justify-center' | '_PREFIX_justify-end' | '_PREFIX_justify-between' | '_PREFIX_justify-around';

export type TFlex = '_PREFIX_flex-initial' | '_PREFIX_flex-1' | '_PREFIX_flex-auto' | '_PREFIX_flex-none';

export type TFlexGrow = '_PREFIX_flex-grow' | '_PREFIX_flex-grow-0';

export type TFlexShrink = '_PREFIX_flex-shrink' | '_PREFIX_flex-shrink-0';

export type TOrder =
  | '_PREFIX_order-first'
  | '_PREFIX_order-last'
  | '_PREFIX_order-none'
  | '_PREFIX_order-1'
  | '_PREFIX_order-2'
  | '_PREFIX_order-3'
  | '_PREFIX_order-4'
  | '_PREFIX_order-5'
  | '_PREFIX_order-6'
  | '_PREFIX_order-7'
  | '_PREFIX_order-8'
  | '_PREFIX_order-9'
  | '_PREFIX_order-10'
  | '_PREFIX_order-11'
  | '_PREFIX_order-12';

export type TFlexBox =
  | TFlexDirection
  | TFlexWrap
  | TAlignItems
  | TAlignContent
  | TAlignSelf
  | TJustifyContent
  | TFlex
  | TFlexGrow
  | TFlexShrink
  | TOrder;

export type TGrid =
  | TGridTemplateColumns
  | TGridColumnStartEnd
  | TGridTemplateRows
  | TGridRowStartEnd
  | TGridGap
  | TGridAutoFlow;

export type TGridTemplateColumns =
  | '_PREFIX_grid-cols-1'
  | '_PREFIX_grid-cols-2'
  | '_PREFIX_grid-cols-3'
  | '_PREFIX_grid-cols-4'
  | '_PREFIX_grid-cols-5'
  | '_PREFIX_grid-cols-6'
  | '_PREFIX_grid-cols-7'
  | '_PREFIX_grid-cols-8'
  | '_PREFIX_grid-cols-9'
  | '_PREFIX_grid-cols-10'
  | '_PREFIX_grid-cols-11'
  | '_PREFIX_grid-cols-12'
  | '_PREFIX_grid-cols-none';

export type TGridColumnStartEnd =
  | '_PREFIX_col-auto'
  | '_PREFIX_col-span-1'
  | '_PREFIX_col-span-2'
  | '_PREFIX_col-span-3'
  | '_PREFIX_col-span-4'
  | '_PREFIX_col-span-5'
  | '_PREFIX_col-span-6'
  | '_PREFIX_col-span-7'
  | '_PREFIX_col-span-8'
  | '_PREFIX_col-span-10'
  | '_PREFIX_col-span-11'
  | '_PREFIX_col-start-1'
  | '_PREFIX_col-start-2'
  | '_PREFIX_col-start-3'
  | '_PREFIX_col-start-4'
  | '_PREFIX_col-start-5'
  | '_PREFIX_col-start-6'
  | '_PREFIX_col-start-7'
  | '_PREFIX_col-start-8'
  | '_PREFIX_col-start-9'
  | '_PREFIX_col-start-10'
  | '_PREFIX_col-start-11'
  | '_PREFIX_col-start-12'
  | '_PREFIX_col-start-13'
  | '_PREFIX_col-start-auto'
  | '_PREFIX_col-end-1'
  | '_PREFIX_col-end-2'
  | '_PREFIX_col-end-3'
  | '_PREFIX_col-end-4'
  | '_PREFIX_col-end-5'
  | '_PREFIX_col-end-6'
  | '_PREFIX_col-end-7'
  | '_PREFIX_col-end-8'
  | '_PREFIX_col-end-9'
  | '_PREFIX_col-end-10'
  | '_PREFIX_col-end-11'
  | '_PREFIX_col-end-12'
  | '_PREFIX_col-end-13'
  | '_PREFIX_col-end-auto';

export type TGridTemplateRows =
  | '_PREFIX_grid-rows-1'
  | '_PREFIX_grid-rows-2'
  | '_PREFIX_grid-rows-3'
  | '_PREFIX_grid-rows-4'
  | '_PREFIX_grid-rows-5'
  | '_PREFIX_grid-rows-6'
  | '_PREFIX_grid-rows-none';

export type TGridRowStartEnd =
  | '_PREFIX_row-auto'
  | '_PREFIX_row-span-1'
  | '_PREFIX_row-span-2'
  | '_PREFIX_row-span-3'
  | '_PREFIX_row-span-4'
  | '_PREFIX_row-span-5'
  | '_PREFIX_row-span-6'
  | '_PREFIX_row-start-1'
  | '_PREFIX_row-start-2'
  | '_PREFIX_row-start-3'
  | '_PREFIX_row-start-4'
  | '_PREFIX_row-start-5'
  | '_PREFIX_row-start-6'
  | '_PREFIX_row-start-7'
  | '_PREFIX_row-start-auto'
  | '_PREFIX_row-end-1'
  | '_PREFIX_row-end-2'
  | '_PREFIX_row-end-3'
  | '_PREFIX_row-end-4'
  | '_PREFIX_row-end-5'
  | '_PREFIX_row-end-6'
  | '_PREFIX_row-end-7'
  | '_PREFIX_row-end-auto';

export type TGridGap =
  | '_PREFIX_gap-0'
  | '_PREFIX_gap-1'
  | '_PREFIX_gap-2'
  | '_PREFIX_gap-3'
  | '_PREFIX_gap-4'
  | '_PREFIX_gap-5'
  | '_PREFIX_gap-6'
  | '_PREFIX_gap-8'
  | '_PREFIX_gap-10'
  | '_PREFIX_gap-12'
  | '_PREFIX_gap-16'
  | '_PREFIX_gap-20'
  | '_PREFIX_gap-24'
  | '_PREFIX_gap-32'
  | '_PREFIX_gap-40'
  | '_PREFIX_gap-48'
  | '_PREFIX_gap-56'
  | '_PREFIX_gap-64'
  | '_PREFIX_gap-px'
  | '_PREFIX_row-gap-0'
  | '_PREFIX_row-gap-1'
  | '_PREFIX_row-gap-2'
  | '_PREFIX_row-gap-3'
  | '_PREFIX_row-gap-4'
  | '_PREFIX_row-gap-5'
  | '_PREFIX_row-gap-6'
  | '_PREFIX_row-gap-8'
  | '_PREFIX_row-gap-10'
  | '_PREFIX_row-gap-12'
  | '_PREFIX_row-gap-16'
  | '_PREFIX_row-gap-20'
  | '_PREFIX_row-gap-24'
  | '_PREFIX_row-gap-32'
  | '_PREFIX_row-gap-40'
  | '_PREFIX_row-gap-48'
  | '_PREFIX_row-gap-56'
  | '_PREFIX_row-gap-64'
  | '_PREFIX_row-gap-px'
  | '_PREFIX_col-gap-0'
  | '_PREFIX_col-gap-1'
  | '_PREFIX_col-gap-2'
  | '_PREFIX_col-gap-3'
  | '_PREFIX_col-gap-4'
  | '_PREFIX_col-gap-5'
  | '_PREFIX_col-gap-6'
  | '_PREFIX_col-gap-8'
  | '_PREFIX_col-gap-10'
  | '_PREFIX_col-gap-12'
  | '_PREFIX_col-gap-16'
  | '_PREFIX_col-gap-20'
  | '_PREFIX_col-gap-24'
  | '_PREFIX_col-gap-32'
  | '_PREFIX_col-gap-40'
  | '_PREFIX_col-gap-48'
  | '_PREFIX_col-gap-56'
  | '_PREFIX_col-gap-64'
  | '_PREFIX_col-gap-px';

export type TGridAutoFlow = '_PREFIX_grid-flow-row' | '_PREFIX_grid-flow-col' | '_PREFIX_grid-flow-row-dense' | '_PREFIX_grid-flow-col-dense';

export type TPadding =PADDINGS;

export type TMargin =MARGINS;

export type TSpaceBetween =SPACE_BETWEEN;

export type TSpacing = TPadding | TMargin | TSpaceBetween;

export type TWidth =WIDTH_SPACINGS
  | '_PREFIX_w-auto'
  | '_PREFIX_w-1/2'
  | '_PREFIX_w-1/3'
  | '_PREFIX_w-2/3'
  | '_PREFIX_w-1/4'
  | '_PREFIX_w-2/4'
  | '_PREFIX_w-3/4'
  | '_PREFIX_w-1/5'
  | '_PREFIX_w-2/5'
  | '_PREFIX_w-3/5'
  | '_PREFIX_w-4/5'
  | '_PREFIX_w-1/6'
  | '_PREFIX_w-2/6'
  | '_PREFIX_w-3/6'
  | '_PREFIX_w-4/6'
  | '_PREFIX_w-5/6'
  | '_PREFIX_w-1/12'
  | '_PREFIX_w-2/12'
  | '_PREFIX_w-3/12'
  | '_PREFIX_w-4/12'
  | '_PREFIX_w-5/12'
  | '_PREFIX_w-6/12'
  | '_PREFIX_w-7/12'
  | '_PREFIX_w-8/12'
  | '_PREFIX_w-9/12'
  | '_PREFIX_w-10/12'
  | '_PREFIX_w-11/12'
  | '_PREFIX_w-full'
  | '_PREFIX_w-screen';

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

export type THeight =HEIGHT_SPACINGS
  | '_PREFIX_h-auto'
  | '_PREFIX_h-full'
  | '_PREFIX_h-screen';

export type TMinHeight = '_PREFIX_min-h-0' | '_PREFIX_min-h-full' | '_PREFIX_min-h-screen';

export type TMaxHeight = '_PREFIX_max-h-full' | '_PREFIX_max-h-screen';

export type TSizing = TWidth | TMinWidth | TMaxWidth | THeight | TMinHeight | TMaxHeight;

export type TBorderCollapse = '_PREFIX_border-collapse' | '_PREFIX_border-separate';

export type TTableLayout = '_PREFIX_table-auto' | '_PREFIX_table-fixed';

export type TTables = TBorderCollapse | TTableLayout;

export type TBoxShadow =
  | '_PREFIX_shadow'
  | '_PREFIX_shadow-xs'
  | '_PREFIX_shadow-sm'
  | '_PREFIX_shadow-md'
  | '_PREFIX_shadow-lg'
  | '_PREFIX_shadow-xl'
  | '_PREFIX_shadow-2xl'
  | '_PREFIX_shadow-inner'
  | '_PREFIX_shadow-outline'
  | '_PREFIX_shadow-none';

export type TOpacity =OPACITIES;

export type TEffects = TBoxShadow | TOpacity;

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

export type TTransitions = TTransitionProperty | TTransitionDuration | TTransitionTimingFunction;

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

export type TTransforms = TScale | TRotate | TTranslate | TSkew | TTransformOrigin;

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

export type TClasses =
  | TUtility
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
  | TAccessibility;

export type TTailwindString = string & 'TAILWIND_CLASS';

export type TArgs<T extends TClasses> = T | null | undefined | { [key in T]?: boolean } | TTailwindString;

export type TTailwind<T extends TClasses = TClasses> = (...args: Array<TArgs<T>>) => TTailwindString;

export type TPseudoClass<T extends TClasses = TClasses> = (className: T) => TTailwindString;

export const classnames: TTailwind = classnamesLib as any;

export const hover: TPseudoClass = className => ('_PREFIX_hover_SEPARATOR_' + className) as TTailwindString;

BREAKPOINT_EXPORT_STATEMENTS

export const focus: TPseudoClass = className => ('_PREFIX_focus_SEPARATOR_' + className) as TTailwindString;

export const active: TPseudoClass = className => ('_PREFIX_active_SEPARATOR_' + className) as TTailwindString;

export const disabled: TPseudoClass = className => ('_PREFIX_disabled_SEPARATOR_' + className) as TTailwindString;

export const visited: TPseudoClass = className => ('_PREFIX_visited_SEPARATOR_' + className) as TTailwindString;

export const firstChild: TPseudoClass = className => ('_PREFIX_first-child_SEPARATOR_' + className) as TTailwindString;

export const lastChild: TPseudoClass = className => ('_PREFIX_last-child_SEPARATOR_' + className) as TTailwindString;

export const oddChild: TPseudoClass = className => ('_PREFIX_odd-child_SEPARATOR_' + className) as TTailwindString;

export const evenChild: TPseudoClass = className => ('_PREFIX_even-child_SEPARATOR_' + className) as TTailwindString;

export const groupHover: TPseudoClass = className => ('_PREFIX_group-hover_SEPARATOR_' + className) as TTailwindString;

export const focusWithin: TPseudoClass = className => ('_PREFIX_focus-within_SEPARATOR_' + className) as TTailwindString;

export const createCustom = <T extends TClasses>(): {
  classnames: TTailwind<T>;
  hover: TPseudoClass<T>;
  BREAKPOINTS_CREATE_CUSTOM_PARAMS
  active: TPseudoClass<T>;
  disabled: TPseudoClass<T>;
  visited: TPseudoClass<T>;
  firstChild: TPseudoClass<T>;
  lastChild: TPseudoClass<T>;
  oddChild: TPseudoClass<T>;
  evenChild: TPseudoClass<T>;
  groupHover: TPseudoClass<T>;
  focusWithin: TPseudoClass<T>;
} => ({
  classnames,
  hover,
  BREAKPOINTS_CREATE_CUSTOM_RETURNS
  active,
  disabled,
  visited,
  firstChild,
  lastChild,
  oddChild,
  evenChild,
  groupHover,
  focusWithin,
});

`;
