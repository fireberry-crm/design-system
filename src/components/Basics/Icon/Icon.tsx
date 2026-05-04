import React, { FC } from 'react';
import './css/icons.css';
import { getIconAnimation } from './helpers';
import * as S from './style';
import { IconName, IconProps, IconSize } from './types';

const Icon: FC<IconProps> = ({ icon = IconName.PlusSmall, animation, color, size = IconSize['14px'] }) => {
  return <S.Icon className={`icon icon-new-${icon}`} color={color} size={size} animation={getIconAnimation(animation)}></S.Icon>;
};

export default Icon;
