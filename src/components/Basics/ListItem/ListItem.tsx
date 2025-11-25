import React, { FC } from 'react';
import * as S from './style';
import { ListItemProps } from './types';
import { ListItemContext } from './ListItemContext';

const ListItem: FC<ListItemProps> = ({
  children,
  indent,
  selected = false,
  active = false,
  onClick,
}) => {
  const paddingInlineStart = indent ? 12 + indent * 28 : 12;

  return (
    <ListItemContext.Provider value={{ selected, active }}>
      <S.ListItemContainer
        selected={selected}
        active={active}
        paddingInlineStart={paddingInlineStart}
        onClick={onClick}
      >
        {children}
      </S.ListItemContainer>
    </ListItemContext.Provider>
  );
};

export default ListItem;
