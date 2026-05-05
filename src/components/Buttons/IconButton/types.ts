import { FlattenSimpleInterpolation } from 'styled-components';
import { IconName } from '../../Basics/Icon/types';

/** Props for the IconButton component. A round button containing only an icon. */
export interface IconButtonProps {
  /** Icon to render. */
  icon: IconName;
  /** Disables interaction. Defaults to `false`. */
  isDisabled?: boolean;
  /** Show the selected (pressed) state. Defaults to `false`. */
  isSelected?: boolean;
  /** Button size. Defaults to `IconButtonSize['20px']`. */
  size?: IconButtonSize;
  /** Called when the button is clicked. */
  onClick?: () => void;
}

/** Available sizes for IconButton. */
export const IconButtonSize = {
  '16px': '16px',
  '20px': '20px',
  '24px': '24px',
  '28px': '28px',
  '32px': '32px',
  '36px': '36px',
} as const;
export type IconButtonSize = (typeof IconButtonSize)[keyof typeof IconButtonSize];

export type IconButtonPalette = {
  default: string;
  accent: string;
  focus: string;
  selected: string;
  disabled: string;
};

export type IconButtonStyles = { [key: string]: FlattenSimpleInterpolation };
