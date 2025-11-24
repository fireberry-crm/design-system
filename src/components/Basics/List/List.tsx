import React, { FC } from 'react';
import * as S from './style';
import { ListProps } from './types';

const List: FC<ListProps> = ({ children }) => {
  return <S.ListContainer>{children}</S.ListContainer>;
};

export default List;
