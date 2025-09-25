export interface ToggleProps {
  isSelected: boolean;
  id?: string;
  name?: string;
  value?: string;
  isDisabled?: boolean;
  selectedLabel?: string;
  unselectedLabel?: string;
  onChange?: (isChecked: boolean) => void;
}

export type TogglePalette = {
  selected: string;
  default: string;
  circle: string;
  text: string;
  disabled: { default: string; circle: string; text: string };
};
