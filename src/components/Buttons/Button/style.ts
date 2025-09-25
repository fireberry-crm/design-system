import styled from 'styled-components';
import { ButtonStyles } from './types';

interface ButtonProps {
  buttonStyles: ButtonStyles;
  font?: string;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 32px;
  border: 0px;
  border-radius: 4px;
  cursor: pointer;

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${({ font }) => font ?? 'inherit'};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  ${({ buttonStyles }) => buttonStyles.default};

  &:hover {
    ${({ buttonStyles }) => buttonStyles.hover};
  }

  &:active {
    ${({ buttonStyles }) => buttonStyles.focus};
  }

  &:disabled {
    ${({ buttonStyles }) => buttonStyles.disabled};
  }
`;
