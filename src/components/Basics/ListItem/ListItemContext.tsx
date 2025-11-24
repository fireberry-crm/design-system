import { createContext, useContext } from 'react';

interface ListItemContextValue {
  selected: boolean;
  active: boolean;
}

export const ListItemContext = createContext<ListItemContextValue>({
  selected: false,
  active: false,
});

export const useListItemContext = () => useContext(ListItemContext);
