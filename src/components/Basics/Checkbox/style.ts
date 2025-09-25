import styled from 'styled-components';
import { CheckboxStyles } from './types';

interface CheckboxBaseProps {
  variant: string;
}

interface CheckboxWrapperProps {
  checkboxStyles: CheckboxStyles;
  error: boolean;
}

interface LabelProps {
  color: string;
  font?: string;
}

export const Checkbox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  height: 0;
  width: 0;
  z-index: -1;
`;

export const CheckboxBase = styled.div<CheckboxBaseProps>`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 16px;
  width: 16px;
  flex-shrink: 0;
  border-radius: ${({ variant }) => (variant === 'circle' ? '50%' : '4px')};
  padding: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  & > i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CheckboxWrapper = styled.label<CheckboxWrapperProps>`
  display: inline-flex;
  position: relative;
  align-items: center;
  gap: 8px;

  & ${CheckboxBase} {
    ${({ checkboxStyles, error }) => (error ? checkboxStyles.error : checkboxStyles.default)};
  }

  & ${CheckboxBase}:hover {
    ${({ checkboxStyles, error }) => (error ? checkboxStyles.error : checkboxStyles.hover)};
  }

  & ${Input}:checked ~ ${CheckboxBase} {
    ${({ checkboxStyles, error }) => (error ? checkboxStyles.error : checkboxStyles.checkedDefault)};
  }

  & ${Input}:checked ~ ${CheckboxBase}:hover {
    ${({ checkboxStyles, error }) => (error ? checkboxStyles.error : checkboxStyles.checkedHover)};
  }

  & ${Input}:disabled ~ ${CheckboxBase} {
    ${({ checkboxStyles }) => checkboxStyles.disabled};
  }

  & ${Input}:checked:disabled ~ ${CheckboxBase} {
    ${({ checkboxStyles }) => checkboxStyles.checkedDisabled};
  }
`;

export const Label = styled.div<LabelProps>`
  display: inline-flex;
  color: ${({ color }) => color};

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${({ font }) => font ?? 'inherit'};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
