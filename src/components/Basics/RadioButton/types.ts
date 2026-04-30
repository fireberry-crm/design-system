import { BaseInputProps } from '..';

/** Props for the RadioButton component. */
export interface RadioButtonProps extends BaseInputProps {
  /** Disables interaction. Defaults to `false`. */
  isDisabled?: boolean;
  /** Selected state. */
  isSelected: boolean;
  /** Optional label rendered next to the radio. */
  label?: string;
  /** Called when the radio is toggled. */
  onChange?: (isChecked: boolean) => void;
}

export type RadioButtonPalette = {
  border: string;
  background: string;
  selected: string;
  text: string;
  disabled: { border: string; background: string };
};
