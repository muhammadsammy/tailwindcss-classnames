import _ from 'lodash';

export function capitalizeFirstLetter(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function generateTypes(arr: string[], prefix?: string): string {
  return '\n  | ' + arr.map(n => (prefix ? `'${prefix}${n}'` : `'${n}'`)).join('\n  | ');
}

/* eslint-disable */
export function generateOpacities(
  defaultOpacities: {[key: string]: string},
  theme: {[key: string]: any},
  property: string,
): {[key: string]: string} {
  const themeOpacities = _.isEmpty(theme[property]) ? defaultOpacities : theme[property];
  const extendedThemeOpacities = theme.extend?.[property];
  return extendedThemeOpacities ? {...themeOpacities, ...extendedThemeOpacities} : themeOpacities;
}

/* eslint-enable */
