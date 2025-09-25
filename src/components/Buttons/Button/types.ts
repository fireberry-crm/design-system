import { FlattenSimpleInterpolation } from 'styled-components';
import { Color, Position, Variant } from '../../../types';
import { IconName } from '../../Basics/Icon/types';

export interface ButtonProps {
  label: string;
  color?: Color;
  icon?: IconName;
  variant?: Variant;
  isLoading?: boolean;
  isDisabled?: boolean;
  iconPosition?: Position;
  onClick?: () => void;
}

export type ButtonPalette = {
  default: string;
  hover: string;
  focus: string;
  contrast: string;
  hoverAccent: string;
  focusAccent: string;
  disabled: { default: string; text: string; accent: string; border: string };
};

export type ButtonPalettes = {
  [key: string]: ButtonPalette;
};

export type ButtonStyles = { [key: string]: FlattenSimpleInterpolation };

export type GetButtonStyle = (variant: Variant, buttonPalette: ButtonPalette) => ButtonStyles | null;
