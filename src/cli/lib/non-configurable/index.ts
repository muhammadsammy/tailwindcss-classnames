import {Accessibility} from './Accessibility';
import {Backgrounds} from './Backgrounds';
import {Borders} from './Borders';
import {Effects} from './Effects';
import {FlexBox} from './Flexbox';
import {Grid} from './Grid';
import {Interactivity} from './Interactivity';
import {Layout} from './Layout';
import {Sizing} from './Sizing';
import {Spacing} from './Spacing';
import {SVG} from './SVG';
import {Tables} from './Tables';
import {Transforms} from './Transforms';
import {TransitionsAndAnimations} from './TransitionsAndAnimations';
import {Typography} from './Typography';

// These utility classes are classes that thier names does not change. Thier names are not
// configured by the `tailwind.config.js` file. e.g. 'flex-start', 'object-cover' etc.
// the only configuration that is applicable to these classes are pseudo-class variants.
export const nonConfigurableClassNames = {
  Accessibility,
  Backgrounds,
  Borders,
  Effects,
  FlexBox,
  Grid,
  Interactivity,
  Layout,
  Sizing,
  Spacing,
  SVG,
  Tables,
  Transforms,
  TransitionsAndAnimations,
  Typography,
};
