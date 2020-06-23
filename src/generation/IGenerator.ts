export interface IGenerator {
  generate: () => string;
}

export interface IClassesGenerator {
  // accessibility: () => string;
  backgrounds: () => string;
  borders: () => string;
  effects: () => string;
  flexBox: () => string;
  grid: () => string;
  spacing: () => string;
  // interactivity: () => string;
  // layout: () => string;
  // sizing: () => string;
  // SVG: () => string;
  // tables: () => string;
  // transforms: () => string;
  // transitions: () => string;
  // typography: () => string;
  // generate: () => string;
}
