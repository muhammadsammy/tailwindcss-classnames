import accessibility from './accessibility';
import backgrounds from './backgrounds';
import borders from './borders';
import effects from './effects';
import flexBox from './flexbox';
import grid from './grid';
import interactivity from './interactivity';
import layout from './layout';
import sizing from './sizing';
import spacing from './spacing';
import svg from './svg';
import tables from './tables';
import transforms from './transforms';
import transitionsAndAnimations from './transitionsAndAnimations';
import typography from './typography';

// These utility classes are classes that thier names does not change. Thier names are not
// configured by the `tailwind.config.js` file. e.g. 'flex-start', 'object-cover' etc.
// the only configuration that is applicable to these classes are pseudo-class variants.
export const nonConfigurableClassNames = {
  accessibility,
  backgrounds,
  borders,
  effects,
  flexBox,
  grid,
  interactivity,
  layout,
  sizing,
  spacing,
  svg,
  tables,
  transforms,
  transitionsAndAnimations,
  typography,
};
