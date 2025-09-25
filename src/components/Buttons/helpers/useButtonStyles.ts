import { useMemo } from 'react';
import { css } from 'styled-components';
import { useDSThemeContext } from '../../../context';
import { Color, PRIMARY_COLORS, Variant } from '../../../types';
import { ButtonStyles, GetButtonStyle } from '../Button/types';

const useButtonStyles = (variant: Variant, color: Color): ButtonStyles | null => {
  const {
    theme: { button },
  } = useDSThemeContext();

  const buttonStyles = useMemo(() => {
    const palette = button[color ?? Color.success];

    const shouldImplementButtonStyle = variant !== Variant.primary || PRIMARY_COLORS.includes(color);
    return palette && shouldImplementButtonStyle ? getButtonStyle(variant, palette) : null;
  }, [variant, color]);

  return buttonStyles;
};

const getButtonStyle: GetButtonStyle = (variant, palette) => {
  switch (variant) {
    case Variant.primary:
      return {
        default: css`
          background: ${palette.default};
          color: ${palette.contrast};
        `,
        hover: css`
          background: ${palette.hover};
          color: ${palette.contrast};
        `,
        focus: css`
          background: ${palette.focus};
          color: ${palette.contrast};
        `,
        disabled: css`
          background: ${palette.disabled.default};
          color: ${palette.contrast};
          cursor: auto;
        `,
      };
    case Variant.secondary:
      return {
        default: css`
          background: none;
          color: ${palette.default};
          outline: 1px solid ${palette.default};
        `,
        hover: css`
          background: ${palette.hoverAccent};
          color: ${palette.default};
          outline: 1px solid ${palette.default};
        `,
        focus: css`
          background: ${palette.focusAccent};
          color: ${palette.default};
          outline: 1px solid ${palette.default};
        `,
        disabled: css`
          background: ${palette.disabled.default};
          color: ${palette.disabled.text};
          outline: 1px solid ${palette.disabled.border};
          cursor: auto;
        `,
      };
    case Variant.text:
      return {
        default: css`
          background: none;
          color: ${palette.default};
        `,
        hover: css`
          background: ${palette.hoverAccent};
          color: ${palette.default};
        `,
        focus: css`
          background: ${palette.focusAccent};
          color: ${palette.default};
        `,
        disabled: css`
          background: none;
          color: ${palette.disabled.text};
          cursor: auto;
        `,
      };
    case Variant.outlined:
      return {
        default: css`
          background: ${palette.contrast};
          color: ${palette.default};
        `,
        hover: css`
          background: ${palette.hoverAccent};
          color: ${palette.default};
        `,
        focus: css`
          background: ${palette.focusAccent};
          color: ${palette.default};
        `,
        disabled: css`
          background: ${palette.disabled.accent};
          color: ${palette.disabled.text};
          cursor: auto;
        `,
      };
    default:
      return null;
  }
};

export { useButtonStyles };
