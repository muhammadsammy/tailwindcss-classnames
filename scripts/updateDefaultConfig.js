const fs = require('fs').promises;
const colors = require('colors');

// updates 'defaultTailwindConfig' in src/cli/lib/defaultTailwindConfig.ts
// with the latest config from tailwindcss. used in npm scripts
async function updateDefaultTailwindConfig() {
  try {
    let data = await fs.readFile('./tailwind.config.js');
    data = data.toString().replace('module.exports =', 'export const defaultTailwindConfig =');
    await fs.writeFile(
      './src/cli/lib/defaultTailwindConfig.ts',
      '/* eslint-disable */' + '\n' + '// @ts-nocheck' + '\n\n' + data,
    );
    console.log(
      ('\n\n' + 'Successfully updated defaultTailwindConfig.ts' + '\n').bgGreen.black + '\n\n',
    );
  } catch (error) {
    const msg =
      '\n\n' + 'Failed updating defaultTailwindConfig.ts:'.bold + '\n' + error.message + '\n';
    console.error(msg.bgRed.white);
  }
}

updateDefaultTailwindConfig();
