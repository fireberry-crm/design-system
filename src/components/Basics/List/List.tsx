import React, { FC } from 'react';
import * as S from './style';
import { ListProps } from './types';

const List: FC<ListProps> = ({ children, className }) => {
  return <S.ListContainer className={className}>{children}</S.ListContainer>;
};

export default List;
