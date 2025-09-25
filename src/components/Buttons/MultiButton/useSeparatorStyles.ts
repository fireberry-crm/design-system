import { useMemo } from 'react';
import { css } from 'styled-components';
import { useDSThemeContext } from '../../../context';
import { Color, PRIMARY_COLORS, Variant } from '../../../types';
import { ButtonPalette, ButtonStyles, GetButtonStyle } from '../Button/types';

const useSeparatorStyles = (variant: Variant, color: Color): ButtonStyles | null => {
  const {
    theme: { button },
  } = useDSThemeContext();

  const buttonStyles = useMemo(() => {
    const palette = button[color ?? Color.success];

    const shouldImplementButtonStyle = variant !== Variant.primary || PRIMARY_COLORS.includes(color);
    return palette && shouldImplementButtonStyle ? getSeparatorStyle(variant, palette) : null;
  }, [variant, color]);

  return buttonStyles;
};

const getSeparatorStyle: GetButtonStyle = (variant: Variant, palette: ButtonPalette) => {
  switch (variant) {
    case Variant.primary:
      return {
        default: css`
          background: ${palette.hover};
        `,
        hover: css`
          background: ${palette.hover};
        `,
        focus: css`
          background: ${palette.focus};
        `,
        accent: css`
          background: ${palette.default};
        `,
        disabled: css`
          background: ${palette.disabled.text};
        `,
      };
    case Variant.secondary:
    case Variant.text:
      return {
        default: css`
          background: none;
        `,
        hover: css`
          background: none;
        `,
        focus: css`
          background: none;
        `,
        accent: css`
          background: none;
        `,
        disabled: css`
          background: none;
        `,
      };
    case Variant.outlined:
      return {
        default: css`
          background: ${palette.hoverAccent};
        `,
        hover: css`
          background: ${palette.hoverAccent};
        `,
        focus: css`
          background: ${palette.focusAccent};
        `,
        accent: css`
          background: ${palette.contrast};
        `,
        disabled: css`
          background: ${palette.disabled.border};
        `,
      };
    default:
      return null;
  }
};

export { useSeparatorStyles };
