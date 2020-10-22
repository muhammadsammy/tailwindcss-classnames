import {Backgrounds} from '../types/classes';

const backgroundAttachment = ['bg-fixed', 'bg-local', 'bg-scroll'];

const backgroundClip = ['bg-clip-border', 'bg-clip-padding', 'bg-clip-content', 'bg-clip-text'];

const backgroundRepeat = [
  'bg-repeat',
  'bg-no-repeat',
  'bg-repeat-x',
  'bg-repeat-y',
  'bg-repeat-round',
  'bg-repeat-space',
];

const backgrounds: Partial<Backgrounds> = {
  backgroundAttachment,
  backgroundClip,
  backgroundRepeat,
};

export default backgrounds;
