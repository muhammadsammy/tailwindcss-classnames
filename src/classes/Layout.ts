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
  'hidden',
];

const container = ['container'];

const float = ['float-right', 'float-left', 'float-none', 'clearfix'];

const clear = ['clear-left', 'clear-right', 'clear-both', 'clear-none'];

const objectFit = ['object-contain', 'object-cover', 'object-fill', 'object-none', 'object-scale-down'];

const objectPosition = [
  'object-bottom',
  'object-center',
  'object-left',
  'object-left-bottom',
  'object-left-top',
  'object-right',
  'object-right-bottom',
  'object-right-top',
  'object-top',
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
  'scrolling-touch',
  'scrolling-auto',
];

const position = ['static', 'fixed', 'absolute', 'relative', 'sticky'];

const topRightBottomLeft = [
  'inset-0',
  'inset-y-0',
  'inset-x-0',
  'top-0',
  'right-0',
  'bottom-0',
  'left-0',
  'inset-auto',
  'inset-y-auto',
  'inset-x-auto',
  'top-auto',
  'bottom-auto',
  'left-auto',
  'right-auto',
];

const visibility = ['visible', 'invisible'];

const zIndex = ['z-0', 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'];

export const Layout = {
  display,
  boxSizing,
  container,
  float,
  clear,
  objectFit,
  objectPosition,
  overflow,
  position,
  topRightBottomLeft,
  visibility,
  zIndex,
};
