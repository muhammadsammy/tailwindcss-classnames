export function generateTypes(arr: string[]) {
  return '\n | ' + arr.map(n => `"${n}"`).join('\n | ');
}

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

export const baseTemplateString = `
import classnamesLib from 'classnames';

export type TUtility = 'mx-auto';

export type TBoxSizing = 'box-border' | 'box-content';

export type TDisplay =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'table'
  | 'table-row'
  | 'table-cell'
  | 'hidden';

export type TContainer = 'container';

export type TFloat = 'float-right' | 'float-left' | 'float-none' | 'clearfix';

export type TClear = 'clear-left' | 'clear-right' | 'clear-both' | 'clear-none';

export type TObjectFit = 'object-contain' | 'object-cover' | 'object-fill' | 'object-none' | 'object-scale-down';

export type TObjectPosition =
  | 'object-bottom'
  | 'object-center'
  | 'object-left'
  | 'object-left-bottom'
  | 'object-left-top'
  | 'object-right'
  | 'object-right-bottom'
  | 'object-right-top'
  | 'object-top';

export type TOverflow =
  | 'overflow-auto'
  | 'overflow-hidden'
  | 'overflow-visible'
  | 'overflow-scroll'
  | 'overflow-x-auto'
  | 'overflow-y-auto'
  | 'overflow-x-hidden'
  | 'overflow-y-hidden'
  | 'overflow-x-visible'
  | 'overflow-y-visible'
  | 'overflow-x-scroll'
  | 'overflow-y-scroll'
  | 'scrolling-touch'
  | 'scrolling-auto';

export type TPosition = 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';

export type TTopRightBottomLeft =
  | 'inset-0'
  | 'inset-y-0'
  | 'inset-x-0'
  | 'inset-x-y'
  | 'top-0'
  | 'right-0'
  | 'bottom-0'
  | 'left-0'
  | 'inset-auto'
  | 'inset-y-auto'
  | 'inset-x-auto'
  | 'top-auto'
  | 'bottom-auto'
  | 'left-auto'
  | 'right-auto';

export type TVisibility = 'visible' | 'invisible';

export type TZIndex = 'z-0' | 'z-10' | 'z-20' | 'z-30' | 'z-40' | 'z-50' | 'z-auto';

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

export type TFontFamily = 'font-sans' | 'font-serif' | 'font-mono';

export type TFontSize =
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl';

export type TFontSmoothing = 'antialiased' | 'subpixel-antialiased';

export type TFontStyle = 'italic' | 'non-italic';

export type TFontWeight =
  | 'font-hairline'
  | 'font-thin'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-semibold'
  | 'font-bold'
  | 'font-extrabold'
  | 'font-black';

export type TLetterSpacing =
  | 'tracking-tighter'
  | 'tracking-tight'
  | 'tracking-normal'
  | 'tracking-wide'
  | 'tracking-wider'
  | 'tricking-widest';

export type TLineHeight =
  | 'leading-none'
  | 'leading-tight'
  | 'leading-snug'
  | 'leading-normal'
  | 'leading-relaxed'
  | 'leading-loose'
  | 'leading-3'
  | 'leading-4'
  | 'leading-5'
  | 'leading-6'
  | 'leading-7'
  | 'leading-8'
  | 'leading-9'
  | 'leading-10';

export type TListStyleType = 'line-none' | 'list-disc' | 'list-decimal';

export type TListStylePosition = 'list-inside' | 'list-outside';

export type TPlaceholderColor = PLACEHOLDER_COLORS;

export type TTextAlign = 'text-left' | 'text-center' | 'text-right' | 'text-justify';

export type TTextColor = TEXT_COLORS

export type TTextDecoration = 'underline' | 'line-through' | 'no-underline';

export type TTextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';

export type TVerticalAlign =
  | 'align-baseline'
  | 'align-top'
  | 'align-middle'
  | 'align-bottom'
  | 'align-text-top'
  | 'align-text-bottom';

export type TWhitespace =
  | 'whitespace-normal'
  | 'whitespace-no-wrap'
  | 'whitespace-pre'
  | 'whitespace-pre-line'
  | 'whitespace-pre-wrap';

export type TWordBreak = 'break-normal' | 'break-words' | 'break-all' | 'truncate';

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
  | TTextAlign
  | TTextColor
  | TTextDecoration
  | TTextTransform
  | TVerticalAlign
  | TWhitespace
  | TWordBreak;

export type TBackgroundAttachment = 'bg-fixed' | 'bg-local' | 'bg-scroll';

export type TBackgroundColor = BACKGROUND_COLORS

export type TBackgroundPosition =
  | 'bg-bottom'
  | 'bg-center'
  | 'bg-left'
  | 'bg-left-bottom'
  | 'bg-left-top'
  | 'bg-right'
  | 'bg-right-bottom'
  | 'bg-right-top'
  | 'bg-top';

export type TBackgroundRepeat =
  | 'bg-repeat'
  | 'bg-no-repeat'
  | 'bg-repeat-x'
  | 'bg-repeat-y'
  | 'bg-repeat-round'
  | 'bg-repeat-space';

export type TBackgroundSize = 'bg-auto' | 'bg-cover' | 'bg-contain';

export type TBackgrounds =
  | TBackgroundAttachment
  | TBackgroundColor
  | TBackgroundPosition
  | TBackgroundRepeat
  | TBackgroundSize;

export type TBorderColor = BORDER_COLORS

export type TBorderStyle = 'border-solid' | 'border-dashed' | 'border-dotted' | 'border-double' | 'border-none';

export type TBorderWidth =
  | 'border'
  | 'border-0'
  | 'border-2'
  | 'border-4'
  | 'border-8'
  | 'border-t'
  | 'border-r'
  | 'border-b'
  | 'border-l'
  | 'border-t-0'
  | 'border-r-0'
  | 'border-b-0'
  | 'border-l-0'
  | 'border-t-2'
  | 'border-r-2'
  | 'border-b-2'
  | 'border-l-2'
  | 'border-t-4'
  | 'border-r-4'
  | 'border-b-4'
  | 'border-l-4'
  | 'border-t-8'
  | 'border-r-8'
  | 'border-b-8'
  | 'border-l-8';

export type TBorderRadius =
  | 'rounded-none'
  | 'rounded-sm'
  | 'rounded'
  | 'rounded-md'
  | 'rounded-lg'
  | 'rounded-full'
  | 'rounded-t-none'
  | 'rounded-r-none'
  | 'rounded-b-none'
  | 'rounded-l-none'
  | 'rounded-t-sm'
  | 'rounded-r-sm'
  | 'rounded-b-sm'
  | 'rounded-l-sm'
  | 'rounded-t'
  | 'rounded-r'
  | 'rounded-b'
  | 'rounded-l'
  | 'rounded-t-md'
  | 'rounded-r-md'
  | 'rounded-b-md'
  | 'rounded-l-md'
  | 'rounded-t-lg'
  | 'rounded-r-lg'
  | 'rounded-b-lg'
  | 'rounded-l-lg'
  | 'rounded-t-full'
  | 'rounded-r-full'
  | 'rounded-b-full'
  | 'rounded-l-full'
  | 'rounded-tl-none'
  | 'rounded-tr-none'
  | 'rounded-br-none'
  | 'rounded-bl-none'
  | 'rounded-tl-sm'
  | 'rounded-tr-sm'
  | 'rounded-br-sm'
  | 'rounded-bl-sm'
  | 'rounded-tl'
  | 'rounded-tr'
  | 'rounded-br'
  | 'rounded-bl'
  | 'rounded-tl-md'
  | 'rounded-tr-md'
  | 'rounded-br-md'
  | 'rounded-bl-md'
  | 'rounded-tl-lg'
  | 'rounded-tr-lg'
  | 'rounded-br-lg'
  | 'rounded-bl-lg'
  | 'rounded-tl-full'
  | 'rounded-tr-full'
  | 'rounded-br-full'
  | 'rounded-bl-full';

export type TBorders = TBorderColor | TBorderStyle | TBorderWidth | TBorderRadius;

export type TFlexDirection = 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse';

export type TFlexWrap = 'flex-no-wrap' | 'flex-wrap' | 'flex-wrap-reverse';

export type TAlignItems = 'items-stretch' | 'items-start' | 'items-center' | 'items-end' | 'items-baseline';

export type TAlignContent = 'content-start' | 'content-center' | 'content-end' | 'content-between' | 'content-around';

export type TAlignSelf = 'self-auto' | 'self-start' | 'self-center' | 'self-end' | 'self-stretch';

export type TJustifyContent = 'justify-start' | 'justify-center' | 'justify-end' | 'justify-between' | 'justify-around';

export type TFlex = 'flex-initial' | 'flex-1' | 'flex-auto' | 'flex-none';

export type TFlexGrow = 'flex-grow' | 'flex-grow-0';

export type TFlexShrink = 'flex-shrink' | 'flex-shrink-0';

export type TOrder =
  | 'order-first'
  | 'order-last'
  | 'order-none'
  | 'order-1'
  | 'order-2'
  | 'order-3'
  | 'order-4'
  | 'order-5'
  | 'order-6'
  | 'order-7'
  | 'order-8'
  | 'order-9'
  | 'order-10'
  | 'order-11'
  | 'order-12';

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
  | 'grid-cols-1'
  | 'grid-cols-2'
  | 'grid-cols-3'
  | 'grid-cols-4'
  | 'grid-cols-5'
  | 'grid-cols-6'
  | 'grid-cols-7'
  | 'grid-cols-8'
  | 'grid-cols-9'
  | 'grid-cols-10'
  | 'grid-cols-11'
  | 'grid-cols-12'
  | 'grid-cols-none';

export type TGridColumnStartEnd =
  | 'col-auto'
  | 'col-span-1'
  | 'col-span-2'
  | 'col-span-3'
  | 'col-span-4'
  | 'col-span-5'
  | 'col-span-6'
  | 'col-span-7'
  | 'col-span-8'
  | 'col-span-10'
  | 'col-span-11'
  | 'col-start-1'
  | 'col-start-2'
  | 'col-start-3'
  | 'col-start-4'
  | 'col-start-5'
  | 'col-start-6'
  | 'col-start-7'
  | 'col-start-8'
  | 'col-start-9'
  | 'col-start-10'
  | 'col-start-11'
  | 'col-start-12'
  | 'col-start-13'
  | 'col-start-auto'
  | 'col-end-1'
  | 'col-end-2'
  | 'col-end-3'
  | 'col-end-4'
  | 'col-end-5'
  | 'col-end-6'
  | 'col-end-7'
  | 'col-end-8'
  | 'col-end-9'
  | 'col-end-10'
  | 'col-end-11'
  | 'col-end-12'
  | 'col-end-13'
  | 'col-end-auto';

export type TGridTemplateRows =
  | 'grid-rows-1'
  | 'grid-rows-2'
  | 'grid-rows-3'
  | 'grid-rows-4'
  | 'grid-rows-5'
  | 'grid-rows-6'
  | 'grid-rows-none';

export type TGridRowStartEnd =
  | 'row-auto'
  | 'row-span-1'
  | 'row-span-2'
  | 'row-span-3'
  | 'row-span-4'
  | 'row-span-5'
  | 'row-span-6'
  | 'row-start-1'
  | 'row-start-2'
  | 'row-start-3'
  | 'row-start-4'
  | 'row-start-5'
  | 'row-start-6'
  | 'row-start-7'
  | 'row-start-auto'
  | 'row-end-1'
  | 'row-end-2'
  | 'row-end-3'
  | 'row-end-4'
  | 'row-end-5'
  | 'row-end-6'
  | 'row-end-7'
  | 'row-end-auto';

export type TGridGap =
  | 'gap-0'
  | 'gap-1'
  | 'gap-2'
  | 'gap-3'
  | 'gap-4'
  | 'gap-5'
  | 'gap-6'
  | 'gap-8'
  | 'gap-10'
  | 'gap-12'
  | 'gap-16'
  | 'gap-20'
  | 'gap-24'
  | 'gap-32'
  | 'gap-40'
  | 'gap-48'
  | 'gap-56'
  | 'gap-64'
  | 'gap-px'
  | 'row-gap-0'
  | 'row-gap-1'
  | 'row-gap-2'
  | 'row-gap-3'
  | 'row-gap-4'
  | 'row-gap-5'
  | 'row-gap-6'
  | 'row-gap-8'
  | 'row-gap-10'
  | 'row-gap-12'
  | 'row-gap-16'
  | 'row-gap-20'
  | 'row-gap-24'
  | 'row-gap-32'
  | 'row-gap-40'
  | 'row-gap-48'
  | 'row-gap-56'
  | 'row-gap-64'
  | 'row-gap-px'
  | 'col-gap-0'
  | 'col-gap-1'
  | 'col-gap-2'
  | 'col-gap-3'
  | 'col-gap-4'
  | 'col-gap-5'
  | 'col-gap-6'
  | 'col-gap-8'
  | 'col-gap-10'
  | 'col-gap-12'
  | 'col-gap-16'
  | 'col-gap-20'
  | 'col-gap-24'
  | 'col-gap-32'
  | 'col-gap-40'
  | 'col-gap-48'
  | 'col-gap-56'
  | 'col-gap-64'
  | 'col-gap-px';

export type TGridAutoFlow = 'grid-flow-row' | 'grid-flow-col' | 'grid-flow-row-dense' | 'grid-flow-col-dense';

export type TPadding =
  | 'p-0'
  | 'p-1'
  | 'p-2'
  | 'p-3'
  | 'p-4'
  | 'p-5'
  | 'p-6'
  | 'p-8'
  | 'p-10'
  | 'p-12'
  | 'p-16'
  | 'p-20'
  | 'p-24'
  | 'p-32'
  | 'p-40'
  | 'p-48'
  | 'p-56'
  | 'p-64'
  | 'p-px'
  | 'py-0'
  | 'py-1'
  | 'py-2'
  | 'py-3'
  | 'py-4'
  | 'py-5'
  | 'py-6'
  | 'py-8'
  | 'py-10'
  | 'py-12'
  | 'py-16'
  | 'py-20'
  | 'py-24'
  | 'py-32'
  | 'py-40'
  | 'py-48'
  | 'py-56'
  | 'py-64'
  | 'py-px'
  | 'px-0'
  | 'px-1'
  | 'px-2'
  | 'px-3'
  | 'px-4'
  | 'px-5'
  | 'px-6'
  | 'px-8'
  | 'px-10'
  | 'px-12'
  | 'px-16'
  | 'px-20'
  | 'px-24'
  | 'px-32'
  | 'px-40'
  | 'px-48'
  | 'px-56'
  | 'px-64'
  | 'px-px'
  | 'pt-0'
  | 'pt-1'
  | 'pt-2'
  | 'pt-3'
  | 'pt-4'
  | 'pt-5'
  | 'pt-6'
  | 'pt-8'
  | 'pt-10'
  | 'pt-12'
  | 'pt-16'
  | 'pt-20'
  | 'pt-24'
  | 'pt-32'
  | 'pt-40'
  | 'pt-48'
  | 'pt-56'
  | 'pt-64'
  | 'pt-px'
  | 'pr-0'
  | 'pr-1'
  | 'pr-2'
  | 'pr-3'
  | 'pr-4'
  | 'pr-5'
  | 'pr-6'
  | 'pr-8'
  | 'pr-10'
  | 'pr-12'
  | 'pr-16'
  | 'pr-20'
  | 'pr-24'
  | 'pr-32'
  | 'pr-40'
  | 'pr-48'
  | 'pr-56'
  | 'pr-64'
  | 'pr-px'
  | 'pb-0'
  | 'pb-1'
  | 'pb-2'
  | 'pb-3'
  | 'pb-4'
  | 'pb-5'
  | 'pb-6'
  | 'pb-8'
  | 'pb-10'
  | 'pb-12'
  | 'pb-16'
  | 'pb-20'
  | 'pb-24'
  | 'pb-32'
  | 'pb-40'
  | 'pb-48'
  | 'pb-56'
  | 'pb-64'
  | 'pb-px'
  | 'pb-0'
  | 'pl-1'
  | 'pl-2'
  | 'pl-3'
  | 'pl-4'
  | 'pl-5'
  | 'pl-6'
  | 'pl-8'
  | 'pl-10'
  | 'pl-12'
  | 'pl-16'
  | 'pl-20'
  | 'pl-24'
  | 'pl-32'
  | 'pl-40'
  | 'pl-48'
  | 'pl-56'
  | 'pl-64'
  | 'pl-px';

export type TMargin =
  | 'm-0'
  | 'm-1'
  | 'm-2'
  | 'm-3'
  | 'm-4'
  | 'm-5'
  | 'm-6'
  | 'm-8'
  | 'm-10'
  | 'm-12'
  | 'm-16'
  | 'm-20'
  | 'm-24'
  | 'm-32'
  | 'm-40'
  | 'm-48'
  | 'm-56'
  | 'm-64'
  | 'm-auto'
  | 'm-px'
  | '-m-0'
  | '-m-1'
  | '-m-2'
  | '-m-3'
  | '-m-4'
  | '-m-5'
  | '-m-6'
  | '-m-8'
  | '-m-10'
  | '-m-12'
  | '-m-16'
  | '-m-20'
  | '-m-24'
  | '-m-32'
  | '-m-40'
  | '-m-48'
  | '-m-56'
  | '-m-64'
  | '-m-px'
  | 'my-0'
  | 'my-1'
  | 'my-2'
  | 'my-3'
  | 'my-4'
  | 'my-5'
  | 'my-6'
  | 'my-8'
  | 'my-10'
  | 'my-12'
  | 'my-16'
  | 'my-20'
  | 'my-24'
  | 'my-32'
  | 'my-40'
  | 'my-48'
  | 'my-56'
  | 'my-64'
  | 'my-auto'
  | 'my-px'
  | '-my-0'
  | '-my-1'
  | '-my-2'
  | '-my-3'
  | '-my-4'
  | '-my-5'
  | '-my-6'
  | '-my-8'
  | '-my-10'
  | '-my-12'
  | '-my-16'
  | '-my-20'
  | '-my-24'
  | '-my-32'
  | '-my-40'
  | '-my-48'
  | '-my-56'
  | '-my-64'
  | '-my-px'
  | 'mx-0'
  | 'mx-1'
  | 'mx-2'
  | 'mx-3'
  | 'mx-4'
  | 'mx-5'
  | 'mx-6'
  | 'mx-8'
  | 'mx-10'
  | 'mx-12'
  | 'mx-16'
  | 'mx-20'
  | 'mx-24'
  | 'mx-32'
  | 'mx-40'
  | 'mx-48'
  | 'mx-56'
  | 'mx-64'
  | 'mx-auto'
  | 'mx-px'
  | '-mx-0'
  | '-mx-1'
  | '-mx-2'
  | '-mx-3'
  | '-mx-4'
  | '-mx-5'
  | '-mx-6'
  | '-mx-8'
  | '-mx-10'
  | '-mx-12'
  | '-mx-16'
  | '-mx-20'
  | '-mx-24'
  | '-mx-32'
  | '-mx-40'
  | '-mx-48'
  | '-mx-56'
  | '-mx-64'
  | '-mx-px'
  | 'mt-0'
  | 'mt-1'
  | 'mt-2'
  | 'mt-3'
  | 'mt-4'
  | 'mt-5'
  | 'mt-6'
  | 'mt-8'
  | 'mt-10'
  | 'mt-12'
  | 'mt-16'
  | 'mt-20'
  | 'mt-24'
  | 'mt-32'
  | 'mt-40'
  | 'mt-48'
  | 'mt-56'
  | 'mt-64'
  | 'mt-auto'
  | 'mt-px'
  | '-mt-0'
  | '-mt-1'
  | '-mt-2'
  | '-mt-3'
  | '-mt-4'
  | '-mt-5'
  | '-mt-6'
  | '-mt-8'
  | '-mt-10'
  | '-mt-12'
  | '-mt-16'
  | '-mt-20'
  | '-mt-24'
  | '-mt-32'
  | '-mt-40'
  | '-mt-48'
  | '-mt-56'
  | '-mt-64'
  | '-mt-px'
  | 'mr-0'
  | 'mr-1'
  | 'mr-2'
  | 'mr-3'
  | 'mr-4'
  | 'mr-5'
  | 'mr-6'
  | 'mr-8'
  | 'mr-10'
  | 'mr-12'
  | 'mr-16'
  | 'mr-20'
  | 'mr-24'
  | 'mr-32'
  | 'mr-40'
  | 'mr-48'
  | 'mr-56'
  | 'mr-64'
  | 'mr-auto'
  | 'mr-px'
  | '-mr-0'
  | '-mr-1'
  | '-mr-2'
  | '-mr-3'
  | '-mr-4'
  | '-mr-5'
  | '-mr-6'
  | '-mr-8'
  | '-mr-10'
  | '-mr-12'
  | '-mr-16'
  | '-mr-20'
  | '-mr-24'
  | '-mr-32'
  | '-mr-40'
  | '-mr-48'
  | '-mr-56'
  | '-mr-64'
  | '-mr-px'
  | 'mb-0'
  | 'mb-1'
  | 'mb-2'
  | 'mb-3'
  | 'mb-4'
  | 'mb-5'
  | 'mb-6'
  | 'mb-8'
  | 'mb-10'
  | 'mb-12'
  | 'mb-16'
  | 'mb-20'
  | 'mb-24'
  | 'mb-32'
  | 'mb-40'
  | 'mb-48'
  | 'mb-56'
  | 'mb-64'
  | 'mb-auto'
  | 'mb-px'
  | '-mb-0'
  | '-mb-1'
  | '-mb-2'
  | '-mb-3'
  | '-mb-4'
  | '-mb-5'
  | '-mb-6'
  | '-mb-8'
  | '-mb-10'
  | '-mb-12'
  | '-mb-16'
  | '-mb-20'
  | '-mb-24'
  | '-mb-32'
  | '-mb-40'
  | '-mb-48'
  | '-mb-56'
  | '-mb-64'
  | '-mb-px'
  | 'ml-0'
  | 'ml-1'
  | 'ml-2'
  | 'ml-3'
  | 'ml-4'
  | 'ml-5'
  | 'ml-6'
  | 'ml-8'
  | 'ml-10'
  | 'ml-12'
  | 'ml-16'
  | 'ml-20'
  | 'ml-24'
  | 'ml-32'
  | 'ml-40'
  | 'ml-48'
  | 'ml-56'
  | 'ml-64'
  | 'ml-auto'
  | 'ml-px'
  | '-ml-0'
  | '-ml-1'
  | '-ml-2'
  | '-ml-3'
  | '-ml-4'
  | '-ml-5'
  | '-ml-6'
  | '-ml-8'
  | '-ml-10'
  | '-ml-12'
  | '-ml-16'
  | '-ml-20'
  | '-ml-24'
  | '-ml-32'
  | '-ml-40'
  | '-ml-48'
  | '-ml-56'
  | '-ml-64'
  | '-ml-px';

export type TSpacing = TPadding | TMargin;

export type TWidth =
  | 'w-0'
  | 'w-1'
  | 'w-2'
  | 'w-3'
  | 'w-4'
  | 'w-5'
  | 'w-6'
  | 'w-7'
  | 'w-8'
  | 'w-10'
  | 'w-12'
  | 'w-16'
  | 'w-20'
  | 'w-24'
  | 'w-32'
  | 'w-40'
  | 'w-48'
  | 'w-56'
  | 'w-64'
  | 'w-auto'
  | 'w-px'
  | 'w-1/2'
  | 'w-1/3'
  | 'w-2/3'
  | 'w-1/4'
  | 'w-2/4'
  | 'w-3/4'
  | 'w-1/5'
  | 'w-2/5'
  | 'w-3/5'
  | 'w-4/5'
  | 'w-1/6'
  | 'w-2/6'
  | 'w-3/6'
  | 'w-4/6'
  | 'w-5/6'
  | 'w-1/12'
  | 'w-2/12'
  | 'w-3/12'
  | 'w-4/12'
  | 'w-5/12'
  | 'w-6/12'
  | 'w-7/12'
  | 'w-8/12'
  | 'w-9/12'
  | 'w-10/12'
  | 'w-11/12'
  | 'w-full'
  | 'w-screen';

export type TMinWidth = 'min-w-0' | 'min-w-full';

export type TMaxWidth =
  | 'max-w-xs'
  | 'max-w-sm'
  | 'max-w-md'
  | 'max-w-lg'
  | 'max-w-xl'
  | 'max-w-2xl'
  | 'max-w-3xl'
  | 'max-w-4xl'
  | 'max-w-5xl'
  | 'max-w-6xl'
  | 'max-w-full';

export type THeight =
  | 'h-0'
  | 'h-1'
  | 'h-2'
  | 'h-3'
  | 'h-4'
  | 'h-5'
  | 'h-6'
  | 'h-8'
  | 'h-10'
  | 'h-12'
  | 'h-16'
  | 'h-20'
  | 'h-24'
  | 'h-32'
  | 'h-40'
  | 'h-48'
  | 'h-56'
  | 'h-64'
  | 'h-auto'
  | 'h-px'
  | 'h-full'
  | 'h-screen';

export type TMinHeight = 'min-h-0' | 'min-h-full' | 'min-h-screen';

export type TMaxHeight = 'max-h-full' | 'max-h-screen';

export type TSizing = TWidth | TMinWidth | TMaxWidth | THeight | TMinHeight | TMaxHeight;

export type TBorderCollapse = 'border-collapse' | 'border-separate';

export type TTableLayout = 'table-auto' | 'table-fixed';

export type TTables = TBorderCollapse | TTableLayout;

export type TBoxShadow =
  | 'shadow'
  | 'shadow-xs'
  | 'shadow-sm'
  | 'shadow-md'
  | 'shadow-lg'
  | 'shadow-xl'
  | 'shadow-2xl'
  | 'shadow-inner'
  | 'shadow-outline'
  | 'shadow-none';

export type TOpacity = 'opacity-100' | 'opacity-75' | 'opacity-50' | 'opacity-25' | 'opacity-0';

export type TEffects = TBoxShadow | TOpacity;

export type TTransitionProperty =
  | 'transition-none'
  | 'transition-all'
  | 'transition'
  | 'transition-colors'
  | 'transition-opacity'
  | 'transition-shadow'
  | 'transition-transform';

export type TTransitionDuration =
  | 'duration-75'
  | 'duration-100'
  | 'duration-150'
  | 'duration-200'
  | 'duration-300'
  | 'duration-500'
  | 'duration-700'
  | 'duration-1000';

export type TTransitionTimingFunction = 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

export type TTransitions = TTransitionProperty | TTransitionDuration | TTransitionTimingFunction;

export type TScale =
  | 'scale-0'
  | 'scale-50'
  | 'scale-75'
  | 'scale-90'
  | 'scale-95'
  | 'scale-100'
  | 'scale-105'
  | 'scale-110'
  | 'scale-125'
  | 'scale-150'
  | 'scale-x-0'
  | 'scale-x-50'
  | 'scale-x-75'
  | 'scale-x-90'
  | 'scale-x-95'
  | 'scale-x-100'
  | 'scale-x-105'
  | 'scale-x-110'
  | 'scale-x-125'
  | 'scale-x-150'
  | 'scale-y-0'
  | 'scale-y-50'
  | 'scale-y-75'
  | 'scale-y-90'
  | 'scale-y-95'
  | 'scale-y-100'
  | 'scale-y-105'
  | 'scale-y-110'
  | 'scale-y-125'
  | 'scale-y-150';

export type TRotate =
  | 'rotate-0'
  | 'rotate-45'
  | 'rotate-90'
  | 'rotate-180'
  | '-rotate-180'
  | '-rotate-90'
  | '-rotate-45';

export type TTranslate =
  | 'translate-x-0'
  | 'translate-x-1'
  | 'translate-x-2'
  | 'translate-x-3'
  | 'translate-x-4'
  | 'translate-x-5'
  | 'translate-x-6'
  | 'translate-x-8'
  | 'translate-x-10'
  | 'translate-x-12'
  | 'translate-x-16'
  | 'translate-x-20'
  | 'translate-x-24'
  | 'translate-x-32'
  | 'translate-x-40'
  | 'translate-x-48'
  | 'translate-x-56'
  | 'translate-x-64'
  | 'translate-x-px'
  | '-translate-x-1'
  | '-translate-x-2'
  | '-translate-x-3'
  | '-translate-x-4'
  | '-translate-x-5'
  | '-translate-x-6'
  | '-translate-x-8'
  | '-translate-x-10'
  | '-translate-x-12'
  | '-translate-x-16'
  | '-translate-x-20'
  | '-translate-x-24'
  | '-translate-x-32'
  | '-translate-x-40'
  | '-translate-x-48'
  | '-translate-x-56'
  | '-translate-x-64'
  | '-translate-x-px'
  | '-translate-x-full'
  | '-translate-x-1/2'
  | 'translate-x-1/2'
  | 'translate-x-full'
  | 'translate-y-0'
  | 'translate-y-1'
  | 'translate-y-2'
  | 'translate-y-3'
  | 'translate-y-4'
  | 'translate-y-5'
  | 'translate-y-6'
  | 'translate-y-8'
  | 'translate-y-10'
  | 'translate-y-12'
  | 'translate-y-16'
  | 'translate-y-20'
  | 'translate-y-24'
  | 'translate-y-32'
  | 'translate-y-40'
  | 'translate-y-48'
  | 'translate-y-56'
  | 'translate-y-64'
  | 'translate-y-px'
  | '-translate-y-1'
  | '-translate-y-2'
  | '-translate-y-3'
  | '-translate-y-4'
  | '-translate-y-5'
  | '-translate-y-6'
  | '-translate-y-8'
  | '-translate-y-10'
  | '-translate-y-12'
  | '-translate-y-16'
  | '-translate-y-20'
  | '-translate-y-24'
  | '-translate-y-32'
  | '-translate-y-40'
  | '-translate-y-48'
  | '-translate-y-56'
  | '-translate-y-64'
  | '-translate-y-px'
  | '-translate-y-full'
  | '-translate-y-1/2'
  | 'translate-y-1/2'
  | 'translate-y-full';

export type TSkew =
  | 'skew-x-0'
  | 'skew-x-3'
  | 'skew-x-6'
  | 'skew-x-12'
  | '-skew-x-0'
  | '-skew-x-3'
  | '-skew-x-6'
  | '-skew-x-12'
  | 'skew-y-0'
  | 'skew-y-3'
  | 'skew-y-6'
  | 'skew-y-12'
  | '-skew-y-0'
  | '-skew-y-3'
  | '-skew-y-6'
  | '-skew-y-12';

export type TTransformOrigin =
  | 'origin-center'
  | 'origin-top'
  | 'origin-top-right'
  | 'origin-right'
  | 'origin-bottom-right'
  | 'origin-bottom'
  | 'origin-bottom-left'
  | 'origin-left'
  | 'origin-top-left';

export type TTransforms = TScale | TRotate | TTranslate | TSkew | TTransformOrigin;

export type TAppearance = 'appearance-none';

export type TCursor =
  | 'cursor-auto'
  | 'cursor-default'
  | 'cursor-pointer'
  | 'cursor-wait'
  | 'cursor-text'
  | 'cursor-move'
  | 'cursor-not-allowed';

export type TOutline = 'outline-none';

export type TPointerEvents = 'pointer-events-none' | 'pointer-events-auto';

export type TResize = 'resize-none' | 'resize' | 'resize-y' | 'resize-x';

export type TUserSelect = 'select-none' | 'select-text' | 'select-all' | 'select-auto';

export type TInteractivity = TAppearance | TCursor | TOutline | TPointerEvents | TResize | TUserSelect;

export type TFill = 'fill-current';

export type TStroke = 'stroke-current';

export type TStrokeWidth = 'stroke-0' | 'stroke-1' | 'stroke- 2';

export type TSvg = TFill | TStroke | TStrokeWidth;

export type TScreenReaders = 'sr-only' | 'not-sr-only';

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
  | TTransitions
  | TInteractivity
  | TAccessibility;

export type TTailwindString = string & 'TAILWIND_CLASS';

export type TArgs<T extends TClasses> = T | null | undefined | { [key in T]?: boolean } | TTailwindString;

export type TTailwind<T extends TClasses = TClasses> = (...args: Array<TArgs<T>>) => TTailwindString;

export type TPseudoClass<T extends TClasses = TClasses> = (className: T) => TTailwindString;

export const classnames: TTailwind = classnamesLib as any;

export const hover: TPseudoClass = className => ('hover:' + className) as TTailwindString;

export const sm: TPseudoClass = className => ('sm:' + className) as TTailwindString;

export const md: TPseudoClass = className => ('md:' + className) as TTailwindString;

export const lg: TPseudoClass = className => ('lg:' + className) as TTailwindString;

export const xl: TPseudoClass = className => ('xl:' + className) as TTailwindString;

export const focus: TPseudoClass = className => ('focus:' + className) as TTailwindString;

export const active: TPseudoClass = className => ('active:' + className) as TTailwindString;

export const disabled: TPseudoClass = className => ('disabled:' + className) as TTailwindString;

export const visited: TPseudoClass = className => ('visited:' + className) as TTailwindString;

export const firstChild: TPseudoClass = className => ('first-child:' + className) as TTailwindString;

export const lastChild: TPseudoClass = className => ('last-child:' + className) as TTailwindString;

export const oddChild: TPseudoClass = className => ('odd-child:' + className) as TTailwindString;

export const evenChild: TPseudoClass = className => ('odd-child:' + className) as TTailwindString;

export const groupHover: TPseudoClass = className => ('group-hover:' + className) as TTailwindString;

export const focusWithin: TPseudoClass = className => ('focus-within:' + className) as TTailwindString;

export const createCustom = <T extends TClasses>(): {
  classnames: TTailwind<T>;
  hover: TPseudoClass<T>;
  sm: TPseudoClass<T>;
  md: TPseudoClass<T>;
  lg: TPseudoClass<T>;
  xl: TPseudoClass<T>;
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
  sm,
  md,
  lg,
  xl,
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