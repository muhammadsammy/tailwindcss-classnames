const boxSizing = ['box-border', 'box-content'];

const display = [
  'block',
  'inline-block',
  'inline',
  'flex',
  'inline-flex',
  'grid',
  'inline-grid',
  'table',
  'inline-table',
  'table-row',
  'table-cell',
  'contents',
  'list-item',
  'hidden',
];

const boxDecorationBreak = ['box-decoration-slice', 'box-decoration-clone'];

const container = ['container'];

const float = ['float-right', 'float-left', 'float-none'];

const clear = ['clear-left', 'clear-right', 'clear-both', 'clear-none'];

const isolation = ['isolate', 'isolation-auto'];

const objectFit = [
  'object-contain',
  'object-cover',
  'object-fill',
  'object-none',
  'object-scale-down',
];

const overflow = [
  'overflow-auto',
  'overflow-clip',
  'overflow-hidden',
  'overflow-visible',
  'overflow-scroll',
  'overflow-x-auto',
  'overflow-y-auto',
  'overflow-x-clip',
  'overflow-y-clip',
  'overflow-x-hidden',
  'overflow-y-hidden',
  'overflow-x-visible',
  'overflow-y-visible',
  'overflow-x-scroll',
  'overflow-y-scroll',
];

const overscrollBehavior = [
  'overscroll-auto',
  'overscroll-contain',
  'overscroll-none',
  'overscroll-y-auto',
  'overscroll-y-contain',
  'overscroll-y-none',
  'overscroll-x-auto',
  'overscroll-x-contain',
  'overscroll-x-none',
];

const position = ['static', 'fixed', 'absolute', 'relative', 'sticky'];

const visibility = ['visible', 'invisible'];

const breakBefore = [
  'break-before-auto',
  'break-before-avoid',
  'break-before-all',
  'break-before-avoid-page',
  'break-before-page',
  'break-before-left',
  'break-before-right',
  'break-before-column',
];
const breakInside = [
  'break-inside-auto',
  'break-inside-avoid',
  'break-inside-avoid-page',
  'break-inside-avoid-column',
];
const breakAfter = [
  'break-after-auto',
  'break-after-avoid',
  'break-after-all',
  'break-after-avoid-page',
  'break-after-page',
  'break-after-left',
  'break-after-right',
  'break-after-column',
];

export default {
  display,
  boxDecorationBreak,
  boxSizing,
  container,
  float,
  clear,
  isolation,
  objectFit,
  overflow,
  overscrollBehavior,
  position,
  visibility,
  breakBefore,
  breakInside,
  breakAfter,
};
