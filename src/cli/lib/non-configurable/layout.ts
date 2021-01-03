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
  'table-row',
  'table-cell',
  'contents',
  'hidden',
];

const container = ['container'];

const float = ['float-right', 'float-left', 'float-none', 'clearfix'];

const clear = ['clear-left', 'clear-right', 'clear-both', 'clear-none'];

const objectFit = [
  'object-contain',
  'object-cover',
  'object-fill',
  'object-none',
  'object-scale-down',
];

const overflow = [
  'overflow-auto',
  'overflow-hidden',
  'overflow-visible',
  'overflow-scroll',
  'overflow-x-auto',
  'overflow-y-auto',
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

export default {
  display,
  boxSizing,
  container,
  float,
  clear,
  objectFit,
  overflow,
  overscrollBehavior,
  position,
  visibility,
};
