import React, { FC } from 'react';
import { Color, Variant } from '../../../types';
import Icon from '../../Basics/Icon';
import { AnimationName, IconName } from '../../Basics/Icon/types';
import { ButtonStyles } from '../Button/types';
import { useButtonStyles } from '../helpers/useButtonStyles';
import * as S from './style';
import { MultiButtonProps } from './types';
import { useSeparatorStyles } from './useSeparatorStyles';

const MultiButton: FC<MultiButtonProps> = ({
  icon,
  label = 'Button',
  isLoading = false,
  isDisabled = false,
  color = Color.success,
  variant = Variant.primary,
  onClick = () => {},
}) => {
  let iconAnimation: AnimationName | undefined;
  if (isLoading) {
    isDisabled = true;
    icon = IconName.Spinner;
    iconAnimation = AnimationName.spin;
  }

  const buttonStyles: ButtonStyles | null = useButtonStyles(variant, color);
  const separatorStyles: ButtonStyles | null = useSeparatorStyles(variant, color);

  return buttonStyles && separatorStyles ? (
    <S.MultiButton role="multiButton">
      <S.Button onClick={onClick} disabled={isDisabled} buttonStyles={buttonStyles}>
        {icon && <Icon icon={icon} animation={iconAnimation} />}
        {label}
      </S.Button>
      <S.Separator separatorStyle={separatorStyles} />
      <S.MenuButton disabled={isDisabled} buttonStyles={buttonStyles}>
        {<Icon icon={IconName.AngleDownSmall} />}
      </S.MenuButton>
    </S.MultiButton>
  ) : (
    <div>Not implemented</div>
  );
};

export default MultiButton;
