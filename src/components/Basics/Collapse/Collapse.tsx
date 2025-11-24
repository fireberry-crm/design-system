import React, { FC } from 'react';
import * as S from './style';
import { CollapseProps } from './types';

const Collapse: FC<CollapseProps> = ({ children, isOpen, className }) => {
  return (
    <S.CollapseContainer isOpen={isOpen} className={className}>
      {children}
    </S.CollapseContainer>
  );
};

export default Collapse;
