import React, { FC, useState } from 'react';
import * as S from './style';
import { AvatarProps } from './types';
import { generateAvatarColor } from './helpers';

const Avatar: FC<AvatarProps> = ({ label='', imgSrc, alt }) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = () => {
    return label.trim().substring(0, 2).toUpperCase();
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const backgroundColor = generateAvatarColor(label);

  return (
    <S.AvatarContainer $backgroundColor={backgroundColor}>
      {imgSrc && !imageError ? (
        <S.AvatarImage
          src={imgSrc}
          alt={alt || label || 'Avatar'}
          onError={handleImageError}
        />
      ) : (
        <S.AvatarInitial>{getInitials()}</S.AvatarInitial>
      )}
    </S.AvatarContainer>
  );
};

export default Avatar;
