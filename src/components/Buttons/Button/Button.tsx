import React, { FC } from 'react';
import { Color, Position, Variant } from '../../../types';
import Icon from '../../Basics/Icon';
import { AnimationName, IconName } from '../../Basics/Icon/types';
import { useButtonStyles } from '../helpers/useButtonStyles';
import * as S from './style';
import { ButtonProps, ButtonStyles } from './types';

const Button: FC<ButtonProps> = ({
  icon,
  label = 'Button',
  isLoading = false,
  isDisabled = false,
  color = Color.success,
  variant = Variant.primary,
  iconPosition = Position.start,
  onClick = () => {},
}) => {
  let iconAnimation: AnimationName | undefined;
  if (isLoading) {
    isDisabled = true;
    icon = IconName.Spinner;
    iconAnimation = AnimationName.spin;
  }

  const buttonStyles: ButtonStyles | null = useButtonStyles(variant, color);

  return buttonStyles ? (
    <S.Button onClick={onClick} disabled={isDisabled} buttonStyles={buttonStyles}>
      {icon && iconPosition !== Position.end ? <Icon icon={icon} animation={iconAnimation} /> : <></>}
      {label}
      {icon && iconPosition === Position.end ? <Icon icon={icon} animation={iconAnimation} /> : <></>}
    </S.Button>
  ) : (
    <div>Not implemented</div>
  );
};

export default Button;
