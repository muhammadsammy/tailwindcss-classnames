export function capitalizeFirstLetter(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function generateTypes(arr: string[], prefix?: string): string {
  return '\n  | ' + arr.map(n => (prefix ? `'${prefix}${n}'` : `'${n}'`)).join('\n  | ');
}
