import {Borders} from '../types/classes';

const borderStyle = [
  'border-solid',
  'border-dashed',
  'border-dotted',
  'border-double',
  'border-none',
];

const divideStyle = [
  'divide-solid',
  'divide-dashed',
  'divide-dotted',
  'divide-double',
  'divide-none',
];

const borders: Partial<Borders> = {
  borderStyle,
  divideStyle,
};

export default borders;
