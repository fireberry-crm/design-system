import { FlattenSimpleInterpolation } from 'styled-components';
import { Color, Position, Variant } from '../../../types';
import { IconName } from '../../Basics/Icon/types';

/** Props for the Button component. */
export interface ButtonProps {
  /** Text shown inside the button. */
  label: string;
  /** Semantic color. Defaults to `Color.success`. */
  color?: Color;
  /** Optional icon rendered next to the label. */
  icon?: IconName;
  /** Visual variant. Defaults to `Variant.primary`. */
  variant?: Variant;
  /** Show a loading spinner and disable interaction. Defaults to `false`. */
  isLoading?: boolean;
  /** Disables interaction. Defaults to `false`. */
  isDisabled?: boolean;
  /** Whether the icon renders before or after the label. Defaults to `Position.start`. */
  iconPosition?: Position;
  /** Called when the button is clicked. */
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
