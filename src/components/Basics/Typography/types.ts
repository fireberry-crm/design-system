import { Color } from '../../../types';

/** Available variants for Typography. */
export const TypographyType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  title: 'title',
  subTitle: 'subTitle',
  largeText: 'largeText',
  text: 'text',
  caption: 'caption',
} as const;
export type TypographyType = (typeof TypographyType)[keyof typeof TypographyType];

/** Props for the Typography component. */
export interface TypographyProps {
  /** Style variant. Defaults to `TypographyType.text`. */
  type?: TypographyType | `${TypographyType}`;
  /** Text content. */
  children: React.ReactNode;
  /** Semantic color. Defaults to `Color.neutral`. */
  color?: Color | `${Color}`;
  /** Bold weight. Defaults to `false`. */
  bold?: boolean;
  /** Underline. Defaults to `false`. */
  underline?: boolean;
  /** Truncate with ellipsis on overflow. Defaults to `false`. */
  ellipsis?: boolean;
}

export interface TypographyStyleConfig {
  fontSize: string;
  lineHeight: string;
  fontWeight?: number;
}

export interface TypographyColorPalette {
  success: string;
  destructive: string;
  warning: string;
  neutral: string;
  information: string;
}

export type TypographyPalette = {
  [key in TypographyType]: TypographyStyleConfig;
} & {
  colors: TypographyColorPalette;
};
