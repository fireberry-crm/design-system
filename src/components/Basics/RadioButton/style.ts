import styled from 'styled-components';

type ColorPalette = { background: string; innerBorder: string; outerBorder: string };

interface RadioButtonProps {
  colors: {
    default: ColorPalette;
    selected: ColorPalette;
    disabled: ColorPalette;
  };
}

interface LabelProps {
  color: string;
  font?: string;
}

export const Input = styled.input`
  position: absolute;
  top: 0;
  height: 0;
  width: 0;
  z-index: -1;
`;

export const RadioButtonBase = styled.div`
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 14px;
  width: 14px;
  flex-shrink: 0;
  border-radius: 50%;
  padding: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:after {
    position: absolute;
    display: block;
    flex: 1;
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0;
    content: '';
    transition: all 0.3s ease;
  }
`;

export const RadioButton = styled.label<RadioButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  & ${RadioButtonBase} {
    background: ${({ colors }) => colors.default.innerBorder};
    border: ${({ colors }) => `1px solid ${colors.default.outerBorder}`};

    &:after {
      background: ${({ colors }) => colors.selected.background};
    }
  }

  & ${Input}:checked ~ ${RadioButtonBase} {
    border: 1px solid ${({ colors }) => colors.selected.outerBorder};
  }

  & ${Input}:checked ~ ${RadioButtonBase}:after {
    opacity: 1;
  }

  & ${Input}:disabled ~ ${RadioButtonBase} {
    background: ${({ colors }) => colors.disabled.background};
    border: 1px solid ${({ colors }) => colors.disabled.outerBorder};
  }

  & ${Input}:disabled ~ ${RadioButtonBase}:after {
    background: ${({ colors }) => colors.disabled.outerBorder};
  }

  & ${Input}:checked:disabled ~ ${RadioButtonBase} {
    background: ${({ colors }) => colors.selected.innerBorder};
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
  line-height: 14px;
`;
