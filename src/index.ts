import classnamesLib from 'classnames';

export type TUtility = 'mx-auto';

export type TDisplay =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'table-row'
  | 'table-cell'
  | 'hidden';

export type TContainer = 'container';

export type TFloat = 'float-right' | 'float-left' | 'float-none' | 'clearfix';

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
  | TDisplay
  | TContainer
  | TFloat
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

export type TPlaceholderColor =
  | 'placeholder-transparent'
  | 'placeholder-black'
  | 'placeholder-white'
  | 'placeholder-gray-100'
  | 'placeholder-gray-200'
  | 'placeholder-gray-300'
  | 'placeholder-gray-400'
  | 'placeholder-gray-500'
  | 'placeholder-gray-600'
  | 'placeholder-gray-700'
  | 'placeholder-gray-800'
  | 'placeholder-gray-900'
  | 'placeholder-red-100'
  | 'placeholder-red-200'
  | 'placeholder-red-300'
  | 'placeholder-red-400'
  | 'placeholder-red-500'
  | 'placeholder-red-600'
  | 'placeholder-red-700'
  | 'placeholder-red-800'
  | 'placeholder-red-900'
  | 'placeholder-orange-100'
  | 'placeholder-orange-200'
  | 'placeholder-orange-300'
  | 'placeholder-orange-400'
  | 'placeholder-orange-500'
  | 'placeholder-orange-600'
  | 'placeholder-orange-700'
  | 'placeholder-orange-800'
  | 'placeholder-orange-900'
  | 'placeholder-yellow-100'
  | 'placeholder-yellow-200'
  | 'placeholder-yellow-300'
  | 'placeholder-yellow-400'
  | 'placeholder-yellow-500'
  | 'placeholder-yellow-600'
  | 'placeholder-yellow-700'
  | 'placeholder-yellow-800'
  | 'placeholder-yellow-900'
  | 'placeholder-green-100'
  | 'placeholder-green-200'
  | 'placeholder-green-300'
  | 'placeholder-green-400'
  | 'placeholder-green-500'
  | 'placeholder-green-600'
  | 'placeholder-green-700'
  | 'placeholder-green-800'
  | 'placeholder-green-900'
  | 'placeholder-teal-100'
  | 'placeholder-teal-200'
  | 'placeholder-teal-300'
  | 'placeholder-teal-400'
  | 'placeholder-teal-500'
  | 'placeholder-teal-600'
  | 'placeholder-teal-700'
  | 'placeholder-teal-800'
  | 'placeholder-teal-900'
  | 'placeholder-blue-100'
  | 'placeholder-blue-200'
  | 'placeholder-blue-300'
  | 'placeholder-blue-400'
  | 'placeholder-blue-500'
  | 'placeholder-blue-600'
  | 'placeholder-blue-700'
  | 'placeholder-blue-800'
  | 'placeholder-blue-900'
  | 'placeholder-indigo-100'
  | 'placeholder-indigo-200'
  | 'placeholder-indigo-300'
  | 'placeholder-indigo-400'
  | 'placeholder-indigo-500'
  | 'placeholder-indigo-600'
  | 'placeholder-indigo-700'
  | 'placeholder-indigo-800'
  | 'placeholder-indigo-900'
  | 'placeholder-purple-100'
  | 'placeholder-purple-200'
  | 'placeholder-purple-300'
  | 'placeholder-purple-400'
  | 'placeholder-purple-500'
  | 'placeholder-purple-600'
  | 'placeholder-purple-700'
  | 'placeholder-purple-800'
  | 'placeholder-purple-900'
  | 'placeholder-pink-100'
  | 'placeholder-pink-200'
  | 'placeholder-pink-300'
  | 'placeholder-pink-400'
  | 'placeholder-pink-500'
  | 'placeholder-pink-600'
  | 'placeholder-pink-700'
  | 'placeholder-pink-800'
  | 'placeholder-pink-900';

export type TTextAlign = 'text-left' | 'text-center' | 'text-right' | 'text-justify';

export type TTextColor =
  | 'text-transparent'
  | 'text-black'
  | 'text-white'
  | 'text-gray-100'
  | 'text-gray-200'
  | 'text-gray-300'
  | 'text-gray-400'
  | 'text-gray-500'
  | 'text-gray-600'
  | 'text-gray-700'
  | 'text-gray-800'
  | 'text-gray-900'
  | 'text-red-100'
  | 'text-red-200'
  | 'text-red-300'
  | 'text-red-400'
  | 'text-red-500'
  | 'text-red-600'
  | 'text-red-700'
  | 'text-red-800'
  | 'text-red-900'
  | 'text-orange-100'
  | 'text-orange-200'
  | 'text-orange-300'
  | 'text-orange-400'
  | 'text-orange-500'
  | 'text-orange-600'
  | 'text-orange-700'
  | 'text-orange-800'
  | 'text-orange-900'
  | 'text-yellow-100'
  | 'text-yellow-200'
  | 'text-yellow-300'
  | 'text-yellow-400'
  | 'text-yellow-500'
  | 'text-yellow-600'
  | 'text-yellow-700'
  | 'text-yellow-800'
  | 'text-yellow-900'
  | 'text-green-100'
  | 'text-green-200'
  | 'text-green-300'
  | 'text-green-400'
  | 'text-green-500'
  | 'text-green-600'
  | 'text-green-700'
  | 'text-green-800'
  | 'text-green-900'
  | 'text-teal-100'
  | 'text-teal-200'
  | 'text-teal-300'
  | 'text-teal-400'
  | 'text-teal-500'
  | 'text-teal-600'
  | 'text-teal-700'
  | 'text-teal-800'
  | 'text-teal-900'
  | 'text-blue-100'
  | 'text-blue-200'
  | 'text-blue-300'
  | 'text-blue-400'
  | 'text-blue-500'
  | 'text-blue-600'
  | 'text-blue-700'
  | 'text-blue-800'
  | 'text-blue-900'
  | 'text-indigo-100'
  | 'text-indigo-200'
  | 'text-indigo-300'
  | 'text-indigo-400'
  | 'text-indigo-500'
  | 'text-indigo-600'
  | 'text-indigo-700'
  | 'text-indigo-800'
  | 'text-indigo-900'
  | 'text-purple-100'
  | 'text-purple-200'
  | 'text-purple-300'
  | 'text-purple-400'
  | 'text-purple-500'
  | 'text-purple-600'
  | 'text-purple-700'
  | 'text-purple-800'
  | 'text-purple-900'
  | 'text-pink-100'
  | 'text-pink-200'
  | 'text-pink-300'
  | 'text-pink-400'
  | 'text-pink-500'
  | 'text-pink-600'
  | 'text-pink-700'
  | 'text-pink-800'
  | 'text-pink-900';

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

export type TBackgroundColor =
  | 'bg-transparent'
  | 'bg-black'
  | 'bg-white'
  | 'bg-gray-100'
  | 'bg-gray-200'
  | 'bg-gray-300'
  | 'bg-gray-400'
  | 'bg-gray-500'
  | 'bg-gray-600'
  | 'bg-gray-700'
  | 'bg-gray-800'
  | 'bg-gray-900'
  | 'bg-red-100'
  | 'bg-red-200'
  | 'bg-red-300'
  | 'bg-red-400'
  | 'bg-red-500'
  | 'bg-red-600'
  | 'bg-red-700'
  | 'bg-red-800'
  | 'bg-red-900'
  | 'bg-orange-100'
  | 'bg-orange-200'
  | 'bg-orange-300'
  | 'bg-orange-400'
  | 'bg-orange-500'
  | 'bg-orange-600'
  | 'bg-orange-700'
  | 'bg-orange-800'
  | 'bg-orange-900'
  | 'bg-yellow-100'
  | 'bg-yellow-200'
  | 'bg-yellow-300'
  | 'bg-yellow-400'
  | 'bg-yellow-500'
  | 'bg-yellow-600'
  | 'bg-yellow-700'
  | 'bg-yellow-800'
  | 'bg-yellow-900'
  | 'bg-green-100'
  | 'bg-green-200'
  | 'bg-green-300'
  | 'bg-green-400'
  | 'bg-green-500'
  | 'bg-green-600'
  | 'bg-green-700'
  | 'bg-green-800'
  | 'bg-green-900'
  | 'bg-teal-100'
  | 'bg-teal-200'
  | 'bg-teal-300'
  | 'bg-teal-400'
  | 'bg-teal-500'
  | 'bg-teal-600'
  | 'bg-teal-700'
  | 'bg-teal-800'
  | 'bg-teal-900'
  | 'bg-blue-100'
  | 'bg-blue-200'
  | 'bg-blue-300'
  | 'bg-blue-400'
  | 'bg-blue-500'
  | 'bg-blue-600'
  | 'bg-blue-700'
  | 'bg-blue-800'
  | 'bg-blue-900'
  | 'bg-indigo-100'
  | 'bg-indigo-200'
  | 'bg-indigo-300'
  | 'bg-indigo-400'
  | 'bg-indigo-500'
  | 'bg-indigo-600'
  | 'bg-indigo-700'
  | 'bg-indigo-800'
  | 'bg-indigo-900'
  | 'bg-purple-100'
  | 'bg-purple-200'
  | 'bg-purple-300'
  | 'bg-purple-400'
  | 'bg-purple-500'
  | 'bg-purple-600'
  | 'bg-purple-700'
  | 'bg-purple-800'
  | 'bg-purple-900'
  | 'bg-pink-100'
  | 'bg-pink-200'
  | 'bg-pink-300'
  | 'bg-pink-400'
  | 'bg-pink-500'
  | 'bg-pink-600'
  | 'bg-pink-700'
  | 'bg-pink-800'
  | 'bg-pink-900';

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

export type TBorderColor =
  | 'border-transparent'
  | 'border-black'
  | 'border-white'
  | 'border-gray-100'
  | 'border-gray-200'
  | 'border-gray-300'
  | 'border-gray-400'
  | 'border-gray-500'
  | 'border-gray-600'
  | 'border-gray-700'
  | 'border-gray-800'
  | 'border-gray-900'
  | 'border-red-100'
  | 'border-red-200'
  | 'border-red-300'
  | 'border-red-400'
  | 'border-red-500'
  | 'border-red-600'
  | 'border-red-700'
  | 'border-red-800'
  | 'border-red-900'
  | 'border-orange-100'
  | 'border-orange-200'
  | 'border-orange-300'
  | 'border-orange-400'
  | 'border-orange-500'
  | 'border-orange-600'
  | 'border-orange-700'
  | 'border-orange-800'
  | 'border-orange-900'
  | 'border-yellow-100'
  | 'border-yellow-200'
  | 'border-yellow-300'
  | 'border-yellow-400'
  | 'border-yellow-500'
  | 'border-yellow-600'
  | 'border-yellow-700'
  | 'border-yellow-800'
  | 'border-yellow-900'
  | 'border-green-100'
  | 'border-green-200'
  | 'border-green-300'
  | 'border-green-400'
  | 'border-green-500'
  | 'border-green-600'
  | 'border-green-700'
  | 'border-green-800'
  | 'border-green-900'
  | 'border-teal-100'
  | 'border-teal-200'
  | 'border-teal-300'
  | 'border-teal-400'
  | 'border-teal-500'
  | 'border-teal-600'
  | 'border-teal-700'
  | 'border-teal-800'
  | 'border-teal-900'
  | 'border-blue-100'
  | 'border-blue-200'
  | 'border-blue-300'
  | 'border-blue-400'
  | 'border-blue-500'
  | 'border-blue-600'
  | 'border-blue-700'
  | 'border-blue-800'
  | 'border-blue-900'
  | 'border-indigo-100'
  | 'border-indigo-200'
  | 'border-indigo-300'
  | 'border-indigo-400'
  | 'border-indigo-500'
  | 'border-indigo-600'
  | 'border-indigo-700'
  | 'border-indigo-800'
  | 'border-indigo-900'
  | 'border-purple-100'
  | 'border-purple-200'
  | 'border-purple-300'
  | 'border-purple-400'
  | 'border-purple-500'
  | 'border-purple-600'
  | 'border-purple-700'
  | 'border-purple-800'
  | 'border-purple-900'
  | 'border-pink-100'
  | 'border-pink-200'
  | 'border-pink-300'
  | 'border-pink-400'
  | 'border-pink-500'
  | 'border-pink-600'
  | 'border-pink-700'
  | 'border-pink-800'
  | 'border-pink-900';

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

export type TSvg = TFill | TStroke;

export type TScreenReaders = 'sr-only' | 'not-sr-only';

export type TAccessibility = TSvg | TScreenReaders;

export type TClasses =
  | TUtility
  | TLayout
  | TTypography
  | TBackgrounds
  | TBorders
  | TFlexBox
  | TSpacing
  | TSizing
  | TTables
  | TEffects
  | TInteractivity
  | TAccessibility;

export type TTailwindString = string & 'TAILWIND_CLASS';

export type TArgs<T extends TClasses> = T | null | undefined | { [key in T]?: boolean } | TTailwindString;

export type TTailwind<T extends TClasses = TClasses> = (...args: Array<TArgs<T>>) => TTailwindString;

export type TPseudoClass<T extends TClasses = TClasses> = (className: T) => TTailwindString;

export const classnames: TTailwind = classnamesLib as any;

export const hover: TPseudoClass = className => `hover:${className}` as TTailwindString;

export const sm: TPseudoClass = className => `sm:${className}` as TTailwindString;

export const md: TPseudoClass = className => `md:${className}` as TTailwindString;

export const lg: TPseudoClass = className => `lg:${className}` as TTailwindString;

export const xl: TPseudoClass = className => `xl:${className}` as TTailwindString;

export const focus: TPseudoClass = className => `focus:${className}` as TTailwindString;

export const active: TPseudoClass = className => `active:${className}` as TTailwindString;

export const disabled: TPseudoClass = className => `disabled:${className}` as TTailwindString;

export const visited: TPseudoClass = className => `visited:${className}` as TTailwindString;

export const firstChild: TPseudoClass = className => `first-child:${className}` as TTailwindString;

export const lastChild: TPseudoClass = className => `last-child:${className}` as TTailwindString;

export const oddChild: TPseudoClass = className => `odd-child:${className}` as TTailwindString;

export const evenChild: TPseudoClass = className => `odd-child:${className}` as TTailwindString;

export const groupHover: TPseudoClass = className => `group-hover:${className}` as TTailwindString;

export const focusWithin: TPseudoClass = className => `focus-within:${className}` as TTailwindString;

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
