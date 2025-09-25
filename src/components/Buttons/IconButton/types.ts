import { FlattenSimpleInterpolation } from 'styled-components';
import { IconName } from '../../Basics/Icon/types';

export interface IconButtonProps {
  icon: IconName;
  isDisabled?: boolean;
  size?: IconButtonSize;
  onClick?: () => void;
}

export enum IconButtonSize {
  '16px' = '16px',
  '20px' = '20px',
  '24px' = '24px',
  '28px' = '28px',
  '32px' = '32px',
  '36px' = '36px',
}

export type IconButtonPalette = {
  default: string;
  accent: string;
  focus: string;
  disabled: string;
};

export type IconButtonStyles = { [key: string]: FlattenSimpleInterpolation };
