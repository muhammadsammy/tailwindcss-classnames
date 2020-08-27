type TFuture = {
  removeDeprecatedGapUtilities?: boolean;
};

type TTailwindConfig = {
  prefix?: string;
  important?: boolean;
  separator?: string;
  theme?: IThemeConfig;
  variants?: IVariantsConfig;
  future?: TFuture;
  // corePlugins?: {};
};

interface IVariantsConfig {
  [key: string]: string[];
}

interface IThemeConfig extends IThemeProps {
  extend?: IThemeProps;
}

interface IThemeProps {
  animation: Record<string, string>;

  screens: Record<string, string>;

  colors: Record<string, string | Record<string, string>>;

  spacing: Record<string, string>;

  backgroundPosition: Record<string, string>;

  backgroundSize: Record<string, string>;

  backgroundImage: Record<string, string>;

  gradientColorStops: Record<string, string | Record<string, string>>;

  borderRadius: Record<string, string>;

  borderWidth: Record<string, string>;

  boxShadow: Record<string, string>;

  backgroundColor: Record<string, string>;

  borderColor: Record<string, string>;

  container: Record<string, string>;

  cursor: Record<string, string>;

  divideColor: Record<string, string>;

  divideWidth: Record<string, string>;

  fill: Record<string, string>;

  flex: Record<string, string>;

  flexGrow: Record<string, string>;

  flexShrink: Record<string, string>;

  fontFamily: {[key: string]: string[]};

  fontSize: Record<string, string>;

  fontWeight: Record<string, string>;

  height: Record<string, string>;

  inset: Record<string, string>;

  letterSpacing: Record<string, string>;

  lineHeight: Record<string, string>;

  listStyleType: Record<string, string>;

  margin: Record<string, string>;

  maxHeight: Record<string, string>;

  maxWidth: Record<string, string>;

  minHeight: Record<string, string>;

  minWidth: Record<string, string>;

  objectPosition: Record<string, string>;

  opacity: Record<string, string>;

  order: Record<string, string>;

  padding: Record<string, string>;

  placeholderColor: Record<string, string>;

  space: Record<string, string>;

  stroke: Record<string, string>;

  strokeWidth: Record<string, string>;

  textColor: Record<string, string>;

  width: Record<string, string>;

  zIndex: Record<string, string>;

  gap: Record<string, string>;

  gridTemplateColumns: Record<string, string>;

  gridColumn: Record<string, string>;

  gridColumnStart: Record<string, string>;

  gridColumnEnd: Record<string, string>;

  gridTemplateRows: Record<string, string>;

  gridRow: {auto: 'auto'; [key: string]: string};

  gridRowStart: Record<string, string>;

  gridRowEnd: Record<string, string>;

  transformOrigin: Record<string, string>;

  scale: Record<string, string>;

  rotate: Record<string, string>;

  translate: Record<string, string>;

  skew: Record<string, string>;

  transitionProperty: Record<string, string>;

  transitionTimingFunction: Record<string, string>;

  transitionDuration: Record<string, string>;

  transitionDelay: Record<string, string>;
}
