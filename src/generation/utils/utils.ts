/* tslint:disable: prefer-template */
import isEmpty from 'lodash.isempty';

export function generateTypes(arr: string[], prefix?: string) {
  return '\n  | ' + arr.map(n => (prefix ? `'${prefix}${n}'` : `'${n}'`)).join('\n  | ');
}

export function generateOpacities(
  defaultOpacitiesObj: { [key: string]: string },
  theme: { [key: string]: any },
  property: string,
): { [key: string]: string } {
  const themeOpacities = isEmpty(theme[property]) ? defaultOpacitiesObj : theme[property];
  const extendedThemeOpacities = theme.extend?.[property];
  return extendedThemeOpacities ? { ...themeOpacities, ...extendedThemeOpacities } : themeOpacities;
}

export type PseudoclassVariantKey =
  | 'accessibility'
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'appearance'
  | 'backgroundAttachment'
  | 'backgroundColor'
  | 'backgroundOpacity'
  | 'backgroundPosition'
  | 'backgroundRepeat'
  | 'backgroundSize'
  | 'borderCollapse'
  | 'borderColor'
  | 'borderOpacity'
  | 'borderRadius'
  | 'borderStyle'
  | 'borderWidth'
  | 'boxShadow'
  | 'boxSizing'
  | 'cursor'
  | 'display'
  | 'divideColor'
  | 'divideOpacity'
  | 'divideWidth'
  | 'fill'
  | 'flex'
  | 'flexDirection'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexWrap'
  | 'float'
  | 'clear'
  | 'fontFamily'
  | 'fontSize'
  | 'fontSmoothing'
  | 'fontStyle'
  | 'fontWeight'
  | 'height'
  | 'inset'
  | 'justifyContent'
  | 'letterSpacing'
  | 'lineHeight'
  | 'listStylePosition'
  | 'listStyleType'
  | 'margin'
  | 'maxHeight'
  | 'maxWidth'
  | 'minHeight'
  | 'minWidth'
  | 'objectFit'
  | 'objectPosition'
  | 'opacity'
  | 'order'
  | 'outline'
  | 'overflow'
  | 'padding'
  | 'placeholderColor'
  | 'placeholderOpacity'
  | 'pointerEvents'
  | 'position'
  | 'resize'
  | 'space'
  | 'stroke'
  | 'strokeWidth'
  | 'tableLayout'
  | 'textAlign'
  | 'textColor'
  | 'textOpacity'
  | 'textDecoration'
  | 'textTransform'
  | 'userSelect'
  | 'verticalAlign'
  | 'visibility'
  | 'whitespace'
  | 'width'
  | 'wordBreak'
  | 'zIndex'
  | 'gap'
  | 'gridAutoFlow'
  | 'gridTemplateColumns'
  | 'gridColumn'
  | 'gridColumnStart'
  | 'gridColumnEnd'
  | 'gridTemplateRows'
  | 'gridRow'
  | 'gridRowStart'
  | 'gridRowEnd'
  | 'transform'
  | 'transformOrigin'
  | 'scale'
  | 'rotate'
  | 'translate'
  | 'skew'
  | 'transitionProperty'
  | 'transitionTimingFunction'
  | 'transitionDuration'
  | 'transitionDelay';

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

export const defaultVariants: { [key: string]: string[] } = {
  accessibility: ['responsive', 'focus'],
  alignContent: ['responsive'],
  alignItems: ['responsive'],
  alignSelf: ['responsive'],
  appearance: ['responsive'],
  backgroundAttachment: ['responsive'],
  backgroundColor: ['responsive', 'hover', 'focus'],
  backgroundOpacity: ['responsive', 'hover', 'focus'],
  backgroundPosition: ['responsive'],
  backgroundRepeat: ['responsive'],
  backgroundSize: ['responsive'],
  borderCollapse: ['responsive'],
  borderColor: ['responsive', 'hover', 'focus'],
  borderOpacity: ['responsive', 'hover', 'focus'],
  borderRadius: ['responsive'],
  borderStyle: ['responsive'],
  borderWidth: ['responsive'],
  boxShadow: ['responsive', 'hover', 'focus'],
  boxSizing: ['responsive'],
  cursor: ['responsive'],
  display: ['responsive'],
  divideColor: ['responsive'],
  divideOpacity: ['responsive'],
  divideWidth: ['responsive'],
  fill: ['responsive'],
  flex: ['responsive'],
  flexDirection: ['responsive'],
  flexGrow: ['responsive'],
  flexShrink: ['responsive'],
  flexWrap: ['responsive'],
  float: ['responsive'],
  clear: ['responsive'],
  fontFamily: ['responsive'],
  fontSize: ['responsive'],
  fontSmoothing: ['responsive'],
  fontStyle: ['responsive'],
  fontWeight: ['responsive', 'hover', 'focus'],
  height: ['responsive'],
  inset: ['responsive'],
  justifyContent: ['responsive'],
  letterSpacing: ['responsive'],
  lineHeight: ['responsive'],
  listStylePosition: ['responsive'],
  listStyleType: ['responsive'],
  margin: ['responsive'],
  maxHeight: ['responsive'],
  maxWidth: ['responsive'],
  minHeight: ['responsive'],
  minWidth: ['responsive'],
  objectFit: ['responsive'],
  objectPosition: ['responsive'],
  opacity: ['responsive', 'hover', 'focus'],
  order: ['responsive'],
  outline: ['responsive', 'focus'],
  overflow: ['responsive'],
  padding: ['responsive'],
  placeholderColor: ['responsive', 'focus'],
  placeholderOpacity: ['responsive', 'focus'],
  pointerEvents: ['responsive'],
  position: ['responsive'],
  resize: ['responsive'],
  space: ['responsive'],
  stroke: ['responsive'],
  strokeWidth: ['responsive'],
  tableLayout: ['responsive'],
  textAlign: ['responsive'],
  textColor: ['responsive', 'hover', 'focus'],
  textOpacity: ['responsive', 'hover', 'focus'],
  textDecoration: ['responsive', 'hover', 'focus'],
  textTransform: ['responsive'],
  userSelect: ['responsive'],
  verticalAlign: ['responsive'],
  visibility: ['responsive'],
  whitespace: ['responsive'],
  width: ['responsive'],
  wordBreak: ['responsive'],
  zIndex: ['responsive'],
  gap: ['responsive'],
  gridAutoFlow: ['responsive'],
  gridTemplateColumns: ['responsive'],
  gridColumn: ['responsive'],
  gridColumnStart: ['responsive'],
  gridColumnEnd: ['responsive'],
  gridTemplateRows: ['responsive'],
  gridRow: ['responsive'],
  gridRowStart: ['responsive'],
  gridRowEnd: ['responsive'],
  transform: ['responsive'],
  transformOrigin: ['responsive'],
  scale: ['responsive', 'hover', 'focus'],
  rotate: ['responsive', 'hover', 'focus'],
  translate: ['responsive', 'hover', 'focus'],
  skew: ['responsive', 'hover', 'focus'],
  transitionProperty: ['responsive'],
  transitionTimingFunction: ['responsive'],
  transitionDuration: ['responsive'],
  transitionDelay: ['responsive'],
};

export const defaultOpacities = {
  '0': '0',
  '25': '0.25',
  '50': '0.5',
  '75': '0.75',
  '100': '1',
};
