import { ReactNode } from 'react';

/** Props for the List component. Vertical list container. */
export interface ListProps {
  /** Items rendered in the list (typically `ListItem`s). */
  children: ReactNode;
}
