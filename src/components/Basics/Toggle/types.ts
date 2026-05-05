/** Props for the Toggle component. A two-state switch (on/off). */
export interface ToggleProps {
  /** Selected (on) state. */
  isSelected: boolean;
  /** HTML `id` attribute. */
  id?: string;
  /** HTML `name` attribute. */
  name?: string;
  /** HTML `value` attribute. */
  value?: string;
  /** Disables interaction. Defaults to `false`. */
  isDisabled?: boolean;
  /** Label shown when `isSelected` is `true`. */
  selectedLabel?: string;
  /** Label shown when `isSelected` is `false`. */
  unselectedLabel?: string;
  /** Called when the toggle is flipped. */
  onChange?: (isChecked: boolean) => void;
}

export type TogglePalette = {
  selected: string;
  default: string;
  circle: string;
  text: string;
  disabled: { default: string; circle: string; text: string };
};
