import { Color, Variant } from '../../../types';
import { IconName } from '../../Basics/Icon/types';

export interface MultiButtonProps {
  label: string;
  color?: Color;
  icon?: IconName;
  variant?: Variant;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}
