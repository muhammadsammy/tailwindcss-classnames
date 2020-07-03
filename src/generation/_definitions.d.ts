type ColorShades = string[] | Array<{[key: string]: string}>;

type ClassesWithOpacities = {
  opacities: string[];
  textOpacities: string[];
  backgroundOpacities: string[];
  borderOpacities: string[];
  divideOpacities: string[];
  placeholderOpacities: string[];
};

type ClassesWithSpacing = {
  paddings: string[];
  margins: string[];
  widths: string[];
  heights: string[];
  spaceBetweens: string[];
};

type TailwindConfig = {
  prefix?: string;
  important?: boolean;
  separator?: string;
  theme?: IThemeConfig;
  variants?: IVariantsConfig;
  // corePlugins?: {};
};

interface IVariantsConfig {
  [key: string]: string[];
}

interface IThemeConfig extends IThemeProps {
  extend?: IThemeProps;
}

// TODO
/* eslint-disable @typescript-eslint/no-explicit-any */
interface IThemeProps {
  screens: {
    [key: string]: string;
  };
  colors: {
    [key: string]: string | {[key: string]: string};
  };
  spacing: {
    [key: string]: string;
  };
  backgroundPosition: {
    [key: string]: string;
  };
  backgroundSize: {
    [key: string]: string;
  };

  borderRadius: {
    [key: string]: string;
  };
  borderWidth: {
    [key: string]: string;
  };
  boxShadow: {
    [key: string]: string;
  };
  backgroundColor?: any;
  borderColor?: any;
  container?: any;
  cursor: {
    [key: string]: string;
  };
  divideColor: {
    [key: string]: string;
  };
  divideWidth: {
    [key: string]: string;
  };
  fill: {
    [key: string]: string;
  };
  flex: {
    [key: string]: string;
  };
  flexGrow: {
    [key: string]: string;
  };
  flexShrink: {
    [key: string]: string;
  };
  fontFamily: {
    [key: string]: string[];
  };
  fontSize: {
    [key: string]: string;
  };
  fontWeight: {
    [key: string]: string;
  };
  height: any;
  inset: {
    [key: string]: string;
  };
  letterSpacing: {
    [key: string]: string;
  };
  lineHeight: {
    [key: string]: string;
  };
  listStyleType: {
    [key: string]: string;
  };
  margin: any;
  maxHeight: {
    [key: string]: string;
  };
  maxWidth: any;
  minHeight: {
    [key: string]: string;
  };
  minWidth: {
    [key: string]: string;
  };
  objectPosition: {
    [key: string]: string;
  };
  opacity: {
    [key: string]: string;
  };
  order: {
    [key: string]: string;
  };
  padding: any;
  placeholderColor: any;
  space: {
    [key: string]: string;
  };
  stroke: {
    [key: string]: string;
  };
  strokeWidth: {
    [key: string]: string;
  };
  textColor: any;
  width: any;
  zIndex: {
    [key: string]: string;
  };
  gap: any;
  gridTemplateColumns: {
    [key: string]: string;
  };
  gridColumn: {
    [key: string]: string;
  };
  gridColumnStart: {
    [key: string]: string;
  };
  gridColumnEnd: {
    [key: string]: string;
  };
  gridTemplateRows: {
    [key: string]: string;
  };
  gridRow: {
    auto: 'auto';
    [key: string]: string;
  };
  gridRowStart: {
    [key: string]: string;
  };
  gridRowEnd: {
    [key: string]: string;
  };
  transformOrigin: {
    [key: string]: string;
  };
  scale: {
    [key: string]: string;
  };
  rotate: {
    [key: string]: string;
  };
  translate: any;
  skew: {
    [key: string]: string;
  };
  transitionProperty: {
    [key: string]: string;
  };
  transitionTimingFunction: {
    [key: string]: string;
  };
  transitionDuration: {
    [key: string]: string;
  };
  transitionDelay: {
    [key: string]: string;
  };
}
