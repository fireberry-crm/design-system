import styled from 'styled-components';
import { IconButtonSize, IconButtonStyles } from './types';

interface IconButtonProps {
  iconButtonStyles: IconButtonStyles;
  size?: IconButtonSize;
}

export const IconButton = styled.button<IconButtonProps>`
  display: flex;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  padding: 4px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0px;
  border-radius: 50px;
  cursor: pointer;

  ${({ iconButtonStyles }) => iconButtonStyles.default};

  &:hover {
    ${({ iconButtonStyles }) => iconButtonStyles.hover};
  }

  &:active {
    ${({ iconButtonStyles }) => iconButtonStyles.focus};
  }

  &:disabled {
    ${({ iconButtonStyles }) => iconButtonStyles.disabled};
  }
`;
