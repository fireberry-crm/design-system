import React, { FC, useState } from 'react';
import * as S from './style';
import { AvatarProps } from './types';
import { generateAvatarColor } from './helpers';
import { useEffect } from 'react';

const Avatar: FC<AvatarProps> = ({ label='', imgSrc, alt }) => {
  const [isValidImage, setIsValidImage] = useState(true);

  const getInitials = () => {
    return label.trim().substring(0, 2).toUpperCase();
  };


  const handleImageError = () => {
    setIsValidImage(false);
  };

  const backgroundColor = generateAvatarColor(label);
  const shouldShowImage = imgSrc && isValidImage;

  useEffect(() => {
    setIsValidImage(true);
  }, [imgSrc]);

  return (
    <S.AvatarContainer $backgroundColor={shouldShowImage ? 'transparent' : backgroundColor}>
      {shouldShowImage ? (
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
