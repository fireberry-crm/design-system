import { ReactNode } from 'react';
import { IconName, IconSize } from '../Icon/types';

export interface ListItemProps {
  children: ReactNode;
  logo?: ReactNode;
  logoPosition?: 'start' | 'end';
  indent?: number;
  selected?: boolean;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface ListItemIconProps {
  icon: IconName;
  size?: IconSize;
  color?: string;
}

export interface ListItemTextProps {
  children: ReactNode;
  className?: string;
}
