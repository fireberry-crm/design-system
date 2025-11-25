import { ReactNode } from 'react';
import { IconName, IconSize } from '../Icon/types';

export interface ListItemProps {
  children: ReactNode;
  indent?: number;
  selected?: boolean;
  active?: boolean;
  onClick?: () => void;
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
