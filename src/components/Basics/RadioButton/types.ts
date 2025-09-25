import { BaseInputProps } from '..';

export interface RadioButtonProps extends BaseInputProps {
  isDisabled?: boolean;
  isSelected: boolean;
  label?: string;
  onChange?: (isChecked: boolean) => void;
}

export type RadioButtonPalette = {
  border: string;
  background: string;
  selected: string;
  text: string;
  disabled: { border: string; background: string };
};
