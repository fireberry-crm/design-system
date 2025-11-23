import React, { FC } from 'react';
import * as S from './style';
import { AvatarProps } from './types';
import { generateAvatarColor } from './helpers';

const Avatar: FC<AvatarProps> = ({ label='', imgSrc, alt }) => {
  const getInitials = () => {
    return label.substring(0, 2).toUpperCase();
  };

  const backgroundColor = generateAvatarColor(label);

  return (
    <S.AvatarContainer $backgroundColor={backgroundColor}>
      {imgSrc ? (
        <S.AvatarImage src={imgSrc} alt={alt || label || 'Avatar'} />
      ) : (
        <S.AvatarInitial>{getInitials()}</S.AvatarInitial>
      )}
    </S.AvatarContainer>
  );
};

export default Avatar;
