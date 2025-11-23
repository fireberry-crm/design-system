import React, { FC } from 'react';
import * as S from './style';
import { ListItemTextProps } from './types';

const ListItemText: FC<ListItemTextProps> = ({ children, className }) => {
  return <S.ListItemText className={className}>{children}</S.ListItemText>;
};

export default ListItemText;
