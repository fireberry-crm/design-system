import React, { FC } from 'react';
import { css } from 'styled-components';
import { useDSThemeContext } from '../../../context';
import Icon from '../../Basics/Icon';
import { getIconSize } from './helpers';
import * as S from './style';
import { IconButtonProps, IconButtonSize, IconButtonStyles } from './types';

const IconButton: FC<IconButtonProps> = ({ icon, isDisabled = false, size = IconButtonSize['20px'], onClick = () => {} }) => {
  const {
    theme: { iconButton },
  } = useDSThemeContext();

  const iconButtonStyles: IconButtonStyles = {
    default: css`
      background: none;
      color: ${iconButton.default};
    `,
    hover: css`
      background: ${iconButton.accent};
      color: ${iconButton.default};
    `,
    focus: css`
      background: ${iconButton.accent};
      color: ${iconButton.focus};
    `,
    disabled: css`
      background: none;
      color: ${iconButton.disabled};
      cursor: auto;
    `,
  };

  return (
    <S.IconButton size={size} onClick={onClick} disabled={isDisabled} iconButtonStyles={iconButtonStyles}>
      <Icon icon={icon} size={getIconSize(size)} />
    </S.IconButton>
  );
};

export default IconButton;
