import { ReactNode } from 'react';

/** Props for the Collapse component. Animates open/close based on `isOpen`. */
export interface CollapseProps {
  /** Content to show or hide. */
  children: ReactNode;
  /** Open state. */
  isOpen: boolean;
  /** Additional CSS class. */
  className?: string;
}
