import React, { FC } from 'react';
import { css } from 'styled-components';
import { useDSThemeContext } from '../../../context';
import Icon from '../../Basics/Icon';
import { getIconSize } from './helpers';
import * as S from './style';
import { IconButtonProps, IconButtonSize, IconButtonStyles } from './types';

const DEFAULT_ICON_SIZE = IconButtonSize['20px'] as const;

const IconButton: FC<IconButtonProps> = ({
  icon,
  isDisabled = false,
  isSelected = false,
  size = DEFAULT_ICON_SIZE,
  onClick = () => {},
}) => {
  const {
    theme: { iconButton },
  } = useDSThemeContext();

  const iconButtonStyles: IconButtonStyles = {
    default: isSelected
      ? css`
          background: ${iconButton.selected};
          color: ${iconButton.focus};
        `
      : css`
          background: none;
          color: ${iconButton.default};
        `,
    hover: css`
      background: ${isSelected ? iconButton.selected : iconButton.accent};
      color: ${isSelected ? iconButton.focus : iconButton.default};
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
