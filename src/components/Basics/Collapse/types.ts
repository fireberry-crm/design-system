import { ReactNode } from 'react';

export interface CollapseProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}
