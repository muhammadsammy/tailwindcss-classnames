const appearance = ['appearance-none'];

const pointerEvents = ['pointer-events-none', 'pointer-events-auto'];

const resize = ['resize-none', 'resize', 'resize-y', 'resize-x'];

const userSelect = ['select-none', 'select-text', 'select-all', 'select-auto'];

const scrollSnap = [
  // scroll snap align
  'snap-start',
  'snap-end',
  'snap-center',
  'snap-align-none',
  // scroll snap stop
  'snap-normal',
  'snap-always',
  // scroll snap type
  'snap-none',
  'snap-x',
  'snap-y',
  'snap-both',
  'snap-mandatory',
  'snap-proximity',
];

const scrollBehavior = ['scroll-auto', 'scroll-smooth'];

export default {
  appearance,
  pointerEvents,
  resize,
  userSelect,
  scrollSnap,
  scrollBehavior,
};
