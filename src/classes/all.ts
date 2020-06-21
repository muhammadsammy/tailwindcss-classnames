import { Accessibility } from './Accessibility';
import { defaultBackgrounds } from './DefaultBackgrounds';
import { Borders } from './Borders';
import { Effects } from './Effects';
import { FlexBox } from './Flexbox';
import { Grid } from './Grid';
import { Interactivity } from './Interactivity';
import { Layout } from './Layout';
import { Sizing } from './Sizing';
import { Spacing } from './Spacing';
import { SVG } from './SVG';
import { Tables } from './Tables';
import { Transforms } from './Transforms';
import { Transitions } from './Transitions';
import { Typography } from './Typography';

export const AllClassesFlat: {
  [key: string]: string[];
} = {
  ...Accessibility,
  ...defaultBackgrounds,
  ...Borders,
  ...Effects,
  ...FlexBox,
  ...Grid,
  ...Interactivity,
  ...Layout,
  ...Sizing,
  ...Spacing,
  ...SVG,
  ...Tables,
  ...Transforms,
  ...Transitions,
  ...Typography,
};

export const AllClasses = {
  Accessibility,
  Backgrounds: defaultBackgrounds,
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
  Transitions,
  Typography,
};
