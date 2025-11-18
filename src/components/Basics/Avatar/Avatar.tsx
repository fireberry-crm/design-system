import React, { FC } from 'react';
import * as S from './style';
import { AvatarProps } from './types';

const Avatar: FC<AvatarProps> = ({ label, imgSrc, alt }) => {
  const getInitials = () => {
    if (!label) return '';
    return label.substring(0, 2).toUpperCase();
  };

  return (
    <S.AvatarContainer>
      {imgSrc ? (
        <S.AvatarImage src={imgSrc} alt={alt || label || 'Avatar'} />
      ) : (
        <S.AvatarInitial>{getInitials()}</S.AvatarInitial>
      )}
    </S.AvatarContainer>
  );
};

export default Avatar;
