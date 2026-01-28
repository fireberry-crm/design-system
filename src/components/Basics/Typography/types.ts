import { Color } from '../../../types';

export enum TypographyType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  title = 'title',
  subTitle = 'subTitle',
  largeText = 'largeText',
  text = 'text',
  caption = 'caption',
}

export interface TypographyProps {
  type?: TypographyType | `${TypographyType}`;
  children: React.ReactNode;
  color?: Color | `${Color}`;
  bold?: boolean;
  underline?: boolean;
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
