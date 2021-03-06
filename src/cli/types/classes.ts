import {tailwindLabsPlugins} from '../lib/tailwindlabs-plugins';

export type Accessibility = Record<TAccessibilityCategoryItem, string[]>;
export type Backgrounds = Record<TBackgroundsCategoryItem, string[]>;
export type Borders = Record<TBordersCategoryItem, string[]>;
export type Effects = Record<TEffectsCategoryItem, string[]>;
export type Filters = Record<TFiltersCategoryItem, string[]>;
export type FlexBox = Record<TFlexBoxCategoryItem, string[]>;
export type Grid = Record<TGridCategoryItem, string[]>;
export type Interactivity = Record<TInteractivityCategoryItem, string[]>;
export type Layout = Record<TLayoutCategoryItem, string[]>;
export type Sizing = Record<TSizingCategoryItem, string[]>;
export type Spacing = Record<TSpacingCategoryItem, string[]>;
export type SVG = Record<TSVGCategoryItem, string[]>;
export type Tables = Record<TTablesCategoryItem, string[]>;
export type Transforms = Record<TTransformsCategoryItem, string[]>;
export type TransitionsAndAnimations = Record<TTransitionsAndAnimationsCategoryItem, string[]>;
export type Typography = Record<TTypographyCategoryItem, string[]>;

export type TGeneratedClassnames = {
  regularClassnames: TAllClassnames;
  pseudoClassnames: string[];
};

export type TAllClassnames = {
  Accessibility: Accessibility;
  Backgrounds: Backgrounds;
  Borders: Borders;
  Effects: Effects;
  Filters: Filters;
  FlexBox: FlexBox;
  Grid: Grid;
  Interactivity: Interactivity;
  Layout: Layout;
  Sizing: Sizing;
  Spacing: Spacing;
  SVG: SVG;
  Tables: Tables;
  Transforms: Transforms;
  TransitionsAndAnimations: TransitionsAndAnimations;
  Typography: Typography;

  TailwindLabsPlugins?: Partial<typeof tailwindLabsPlugins>;
};

type TAccessibilityCategoryItem = 'screenReaders';

type TBackgroundsCategoryItem =
  | 'backgroundAttachment'
  | 'backgroundClip'
  | 'backgroundColor'
  | 'backgroundOpacity'
  | 'backgroundPosition'
  | 'backgroundRepeat'
  | 'backgroundSize'
  | 'backgroundImage'
  | 'gradientColorStops';

type TBordersCategoryItem =
  | 'borderColor'
  | 'borderOpacity'
  | 'borderStyle'
  | 'borderWidth'
  | 'borderRadius'
  | 'divideWidth'
  | 'divideOpacity'
  | 'divideColor'
  | 'divideStyle'
  | 'ringColor'
  | 'ringOpacity'
  | 'ringOffsetColor'
  | 'ringOffsetWidth'
  | 'ringWidth';

type TEffectsCategoryItem = 'boxShadow' | 'opacity' | 'mixBlendMode' | 'backgroundBlendMode';

type TFiltersCategoryItem =
  | 'filter'
  | 'backdropFilter'
  | 'blur'
  | 'brightness'
  | 'contrast'
  | 'dropShadow'
  | 'grayscale'
  | 'hueRotate'
  | 'invert'
  | 'saturate'
  | 'sepia'
  | 'backdropFilter'
  | 'backdropBlur'
  | 'backdropBrightness'
  | 'backdropContrast'
  | 'backdropGrayscale'
  | 'backdropHueRotate'
  | 'backdropInvert'
  | 'backdropOpacity'
  | 'backdropSaturate'
  | 'backdropSepia';

type TFlexBoxCategoryItem =
  | 'flexDirection'
  | 'flexWrap'
  | 'alignItems'
  | 'alignContent'
  | 'alignSelf'
  | 'placeContent'
  | 'placeItems'
  | 'placeSelf'
  | 'justifyContent'
  | 'justifyItems'
  | 'justifySelf'
  | 'flex'
  | 'flexGrow'
  | 'flexShrink'
  | 'order';

type TGridCategoryItem =
  | 'gridTemplateColumns'
  | 'gridAutoColumns'
  | 'gridColumn'
  | 'gridColumnStart'
  | 'gridColumnEnd'
  | 'gridTemplateRows'
  | 'gridAutoRows'
  | 'gridRow'
  | 'gridRowStart'
  | 'gridRowEnd'
  | 'gap'
  | 'gridAutoFlow';

type TInteractivityCategoryItem =
  | 'appearance'
  | 'cursor'
  | 'outline'
  | 'pointerEvents'
  | 'resize'
  | 'userSelect';

type TLayoutCategoryItem =
  | 'display'
  | 'boxDecorationBreak'
  | 'boxSizing'
  | 'container'
  | 'float'
  | 'clear'
  | 'isolation'
  | 'objectFit'
  | 'objectPosition'
  | 'overflow'
  | 'overscrollBehavior'
  | 'position'
  | 'inset'
  | 'visibility'
  | 'zIndex';

type TSizingCategoryItem = 'width' | 'minWidth' | 'maxWidth' | 'height' | 'minHeight' | 'maxHeight';

type TSpacingCategoryItem = 'padding' | 'margin' | 'space';

type TSVGCategoryItem = 'fill' | 'stroke' | 'strokeWidth';

type TTablesCategoryItem = 'borderCollapse' | 'tableLayout';

type TTransformsCategoryItem = 'scale' | 'rotate' | 'translate' | 'skew' | 'transformOrigin';

type TTransitionsAndAnimationsCategoryItem =
  | 'transitionProperty'
  | 'transitionDuration'
  | 'transitionTimingFunction'
  | 'transitionDelay'
  | 'animation';

type TTypographyCategoryItem =
  | 'fontFamily'
  | 'fontSize'
  | 'fontSmoothing'
  | 'fontStyle'
  | 'fontWeight'
  | 'fontVariantNumeric'
  | 'letterSpacing'
  | 'lineHeight'
  | 'listStyleType'
  | 'listStylePosition'
  | 'placeholderColor'
  | 'placeholderOpacity'
  | 'textAlign'
  | 'textColor'
  | 'textDecoration'
  | 'textOpacity'
  | 'textTransform'
  | 'verticalAlign'
  | 'whitespace'
  | 'wordBreak';
