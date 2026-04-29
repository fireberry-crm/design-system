import { FlattenSimpleInterpolation } from 'styled-components';
import { BaseInputProps } from '..';
import { Color } from '../../../types';

export interface CheckboxProps extends BaseInputProps {
  color?: Color;
  label?: string;
  error?: boolean;
  variant?: Variant;
  errorLabel?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
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

export const Variant = {
  circle: 'circle',
  square: 'square',
} as const;
export type Variant = (typeof Variant)[keyof typeof Variant];
