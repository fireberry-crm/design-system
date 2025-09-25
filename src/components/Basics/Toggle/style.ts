import styled from 'styled-components';

type ColorPalette = { toggle: string; circle: string; text: string };

interface ToggleProps {
  colors: {
    default: ColorPalette;
    selected: ColorPalette;
    disabled: ColorPalette;
  };
}

interface CircleProps {
  color?: string;
}

interface LabelProps {
  color?: string;
  font?: string;
}

export const ToggleBase = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  justify-content: flex-start;
  height: 16px;
  width: 30px;
  padding: 2px;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  height: 0;
  width: 0;
  right: 100%;
  z-index: -1;
`;

export const Circle = styled.div<CircleProps>`
  display: inline-flex;
  height: 12px;
  width: 12px;
  border-radius: 50%;
`;

export const Label = styled.div<LabelProps>`
  display: inline-flex;

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${({ font }) => font ?? 'inherit'};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;

export const Toggle = styled.label<Partial<ToggleProps>>`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  & ${ToggleBase} {
    background: ${({ colors }) => colors && colors.default.toggle};

    & ${Circle} {
      background: ${({ colors }) => colors && colors.default.circle};
    }
  }

  & ${Label} {
    color: ${({ colors }) => colors && colors.default.text};
  }

  & ${Input}:checked ~ ${ToggleBase} {
    background: ${({ colors }) => colors && colors.selected.toggle};
    justify-content: flex-end;

    & ${Circle} {
      background: ${({ colors }) => colors && colors.selected.circle};
    }
  }

  & ${Input}:checked ~ ${Label} {
    color: ${({ colors }) => colors && colors.selected.text};
  }

  & ${Input}:disabled ~ ${ToggleBase} {
    background: ${({ colors }) => colors && colors.disabled.toggle};
    cursor: auto;

    & ${Circle} {
      background: ${({ colors }) => colors && colors.disabled.circle};
    }
  }

  & ${Input}:disabled ~ ${Label} {
    color: ${({ colors }) => colors && colors.disabled.text};
  }
`;
