/* tslint:disable: prefer-template */
import isEmpty from 'lodash.isempty';

export function capitalizeFirstLetter(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function generateTypes(arr: string[], prefix?: string): string {
  return '\n  | ' + arr.map(n => (prefix ? `'${prefix}${n}'` : `'${n}'`)).join('\n  | ');
}

/* eslint-disable */
export function generateOpacities(
  defaultOpacities: { [key: string]: string },
  theme: { [key: string]: any },
  property: string,
): { [key: string]: string } {
  const themeOpacities = isEmpty(theme[property]) ? defaultOpacities : theme[property];
  const extendedThemeOpacities = theme.extend?.[property];
  return extendedThemeOpacities ? { ...themeOpacities, ...extendedThemeOpacities } : themeOpacities;
}

/* eslint-enable */

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
