import { useMemo } from 'react';
import { css } from 'styled-components';
import { useDSThemeContext } from '../../../context';
import { Color } from '../../../types';
import { CheckboxStyles, GetCheckboxStyle, Variant } from './types';

const useCheckboxStyles = (
  color: Color,
  variant: Variant,
  isSelected: boolean,
  error: boolean
): { checkboxStyles: CheckboxStyles | null; labelColor: string; errorLabelColor: string } => {
  const {
    theme: { checkbox },
  } = useDSThemeContext();

  const checkboxStyles = useMemo(() => {
    const palette = checkbox[color ?? Color.success];

    const shouldImplementCheckboxStyle = variant === Variant.circle || color === Color.success;

    return palette && shouldImplementCheckboxStyle ? getCheckboxStyle(palette) : null;
  }, [color, variant, isSelected, error]);

  // both colors are global and not related specific color palette, will be changed as soon as we have semantic tokens for colors
  const labelColor = checkbox[Color.success]?.text;
  const errorLabelColor = checkbox[Color.success]?.error;

  return { checkboxStyles, labelColor, errorLabelColor };
};

const getCheckboxStyle: GetCheckboxStyle = (palette) => {
  return {
    default: css`
      background: none;
      border: 1px solid ${palette.border};
      color: transparent;
    `,
    hover: css`
      background: none;
      border: 1px solid ${palette.hoverBorder};
      color: transparent;
    `,
    disabled: css`
      background: ${palette.disabled.accent};
      border: 1px solid ${palette.disabled.border};
      color: transparent;
      cursor: auto;
    `,
    checkedDefault: css`
      background: ${palette.default};
      border: 0px;
      color: ${palette.contrast};
    `,
    checkedHover: css`
      background: ${palette.hover};
      border: 0px;
      color: ${palette.contrast};
    `,
    checkedDisabled: css`
      background: ${palette.disabled.accent};
      border: 1px solid ${palette.disabled.border};
      color: ${palette.disabled.default};
      cursor: auto;
    `,
    error: css`
      background: none;
      border: 1px solid ${palette.error};
    `,
  };
};

export { useCheckboxStyles };
