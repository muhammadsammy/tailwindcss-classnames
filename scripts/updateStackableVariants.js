const fs = require('fs');
const vm = require('vm');
const _ = require('lodash');

const twConfig = vm.runInNewContext(fs.readFileSync('./tailwind.config.js', {encoding: 'utf-8'}), {
  require,
  module: {},
});

const separator = _.isEmpty(twConfig?.separator) ? ':' : twConfig.separator;
const responsiveVariants = Object.keys(twConfig.theme.screens);

let variants = [
  'motion-safe',
  'motion-reduce',
  'first',
  'last',
  'odd',
  'even',
  'visited',
  'checked',
  'group-hover',
  'group-focus',
  'focus-within',
  'hover',
  'focus',
  'focus-visible',
  'active',
  'disabled',
];

// Thanks https://codereview.stackexchange.com/questions/139095/generate-powerset-in-js/141854#141854
function powerset(l) {
  function ps(list) {
    if (list.length === 0) {
      return [[]];
    }

    let head = list.pop();
    let tailPS = ps(list);

    return tailPS.concat(
      tailPS.map(function (e) {
        return [head].concat(e);
      }),
    );
  }

  return ps(l.slice());
}

/**
 * @type {Array<string[]>}
 */
const array = powerset(variants);

/**
 * @type {Array<string>}
 */
const all = array.map(arr => {
  let comb = '';

  arr.map((variant, i) => {
    if (i !== arr.length - 1) {
      comb = comb + variant + separator;
    } else {
      comb = comb + variant;
    }
  });
  return comb;
});

fs.writeFileSync(
  './src/cli/lib/stackableVariants.ts',
  'export const stackableVariants = [\n' + all.map(x => "'" + x + "'") + '\n]',
);
