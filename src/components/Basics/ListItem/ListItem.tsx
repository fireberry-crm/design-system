import React, { FC } from 'react';
import * as S from './style';
import { ListItemProps } from './types';
import { ListItemContext } from './ListItemContext';
import { useDSThemeContext } from '../../../context/ThemeContext';

const ListItem: FC<ListItemProps> = ({
  children,
  indent,
  selected = false,
  active = false,
  onClick,
}) => {
  const { isRtl } = useDSThemeContext();

  return (
    <ListItemContext.Provider value={{ selected, active }}>
      <S.ListItemContainer
        selected={selected}
        active={active}
        indent={indent}
        onClick={onClick}
        $isRtl={isRtl}
      >
        {children}
      </S.ListItemContainer>
    </ListItemContext.Provider>
  );
};

export default ListItem;
