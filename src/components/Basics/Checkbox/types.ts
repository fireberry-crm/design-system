import { FlattenSimpleInterpolation } from 'styled-components';
import { BaseInputProps } from '..';
import { Color } from '../../../types';

/** Props for the Checkbox component. */
export interface CheckboxProps extends BaseInputProps {
  /** Semantic color. Defaults to `Color.success`. */
  color?: Color;
  /** Optional label rendered next to the checkbox. */
  label?: string;
  /** Show the error visual state. Defaults to `false`. */
  error?: boolean;
  /** Visual shape. Defaults to `CheckboxVariant.square`. */
  variant?: CheckboxVariant;
  /** Error message shown when `error` is true. */
  errorLabel?: string;
  /** Checked state. Defaults to `false`. */
  isChecked?: boolean;
  /** Disables interaction. Defaults to `false`. */
  isDisabled?: boolean;
  /** Show the indeterminate (mixed) state. Defaults to `false`. */
  isIndeterminate?: boolean;
  /** Called when the checkbox is toggled. */
  onChange?: (checked: boolean) => void;
}

type CheckboxPalette = {
  default: string;
  hover: string;
  contrast: string;
  border: string;
  hoverBorder: string;
  text: string;
  error: string;
  disabled: { default: string; accent: string; border: string };
};

export type CheckboxPalettes = {
  [key: string]: CheckboxPalette;
};

export type CheckboxStyles = { [key: string]: FlattenSimpleInterpolation };

export type GetCheckboxStyle = (CheckboxPalette: CheckboxPalette) => CheckboxStyles;

/** Available variants for Checkbox. */
export const CheckboxVariant = {
  circle: 'circle',
  square: 'square',
} as const;
export type CheckboxVariant = (typeof CheckboxVariant)[keyof typeof CheckboxVariant];
