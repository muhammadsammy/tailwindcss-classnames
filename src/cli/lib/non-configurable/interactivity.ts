import {Interactivity} from '../types/classes';

const appearance = ['appearance-none'];

const pointerEvents = ['pointer-events-none', 'pointer-events-auto'];

const resize = ['resize-none', 'resize', 'resize-y', 'resize-x'];

const userSelect = ['select-none', 'select-text', 'select-all', 'select-auto'];

const interactivity: Partial<Interactivity> = {
  appearance,
  pointerEvents,
  resize,
  userSelect,
};

export default interactivity;
