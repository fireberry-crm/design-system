import { ReactNode } from 'react';
import { IconName, IconSize } from '../Icon/types';

/** Props for the ListItem component. */
export interface ListItemProps {
  /** Content (typically `ListItemIcon` and `ListItemText`). */
  children: ReactNode;
  /** Indentation level. Defaults to `0`. */
  indent?: number;
  /** Show the selected visual state. Defaults to `false`. */
  selected?: boolean;
  /** Show the active visual state. Defaults to `false`. */
  active?: boolean;
  /** Click handler. */
  onClick?: () => void;
}

/** Props for the ListItemIcon component. */
export interface ListItemIconProps {
  /** Icon to render. */
  icon: IconName;
  /** Icon size. Defaults to `IconSize['16px']`. */
  size?: IconSize;
  /** Override icon color. Defaults to a color derived from the parent ListItem state. */
  color?: string;
}

/** Props for the ListItemText component. Truncates with ellipsis on overflow. */
export interface ListItemTextProps {
  /** Text content. */
  children: ReactNode;
  /** Additional CSS class. */
  className?: string;
}
