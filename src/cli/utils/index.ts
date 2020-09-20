export function capitalizeFirstLetter(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function generateTypes(classnames: string[], prefix?: string): string {
  return (
    '\n  | ' +
    classnames
      .flatMap(classname => {
        const classnamesThatShouldKeepTheDefaultSuffix = ['cursor'];

        return classnamesThatShouldKeepTheDefaultSuffix.map(x => {
          const shouldKeepDefaultSuffix: boolean = classname.includes(x);
          const name = shouldKeepDefaultSuffix ? classname : classname.replace('-default', '');

          return prefix ? `'${prefix}${name}'` : `'${name}'`;
        });
      })
      .join('\n  | ')
  );
}
