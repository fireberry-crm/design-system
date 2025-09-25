import styled from 'styled-components';
import { ButtonStyles } from '../Button/types';

interface ButtonProps {
  buttonStyles: ButtonStyles;
  font?: string;
}

interface SeparatorProps {
  separatorStyle: ButtonStyles;
}

export const MultiButton = styled.div`
  display: inline-flex;
`;

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 32px;
  border: 0px;
  border-radius: 4px 0 0 4px;
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

export const MenuButton = styled.button<ButtonProps>`
  display: inline-flex;
  padding: 9px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 32px;
  border: 0px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

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

export const Separator = styled.div<SeparatorProps>`
  height: 32px;
  width: 1px;

  ${({ separatorStyle }) => separatorStyle.default}

  ${Button}:hover + & {
    ${({ separatorStyle }) => separatorStyle.hover}
  }

  ${Button}:active + & {
    ${({ separatorStyle }) => separatorStyle.focus}
  }

  ${Button}:disabled + & {
    ${({ separatorStyle }) => separatorStyle.disabled}
  }

  &:has(+ ${MenuButton}:is(:hover, :active)) {
    ${({ separatorStyle }) => separatorStyle.accent}
  }

  &:has(+ ${MenuButton}:is(:disabled)) {
    ${({ separatorStyle }) => separatorStyle.disabled}
  }
`;
