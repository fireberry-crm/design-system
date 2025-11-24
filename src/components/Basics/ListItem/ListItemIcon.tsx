import React, { FC } from 'react';
import * as S from './style';
import { ListItemIconProps } from './types';
import Icon from '../Icon';
import { IconSize } from '../Icon/types';
import { useDSThemeContext } from '../../../context/ThemeContext';
import { useListItemContext } from './ListItemContext';

const ListItemIcon: FC<ListItemIconProps> = ({ icon, size = IconSize['16px'], color }) => {
  const { palette } = useDSThemeContext();
  const { selected, active } = useListItemContext();

  const iconColor = color || (selected || active ? palette.ocean8 : palette.gray10);

  return (
    <S.ListItemIconContainer>
      <Icon icon={icon} size={size} color={iconColor} />
    </S.ListItemIconContainer>
  );
};

export default ListItemIcon;
