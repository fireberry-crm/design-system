import { palette } from '../palette';

function getTheme() {
  return {
    button: {
      success: {
        default: palette.green8,
        hover: palette.green9,
        focus: palette.green10,
        contrast: palette.white,
        hoverAccent: palette.green2,
        focusAccent: palette.green3,
        disabled: { default: palette.gray5, text: palette.white, accent: palette.gray2, border: palette.gray3 },
      },
      destructive: {
        default: palette.red7,
        hover: palette.red8,
        focus: palette.red9,
        contrast: palette.white,
        hoverAccent: palette.red2,
        focusAccent: palette.red3,
        disabled: { default: palette.gray5, text: palette.gray6, accent: palette.gray2, border: palette.gray3 },
      },
      neutral: {
        default: palette.gray8,
        hover: palette.gray9,
        focus: palette.gray10,
        contrast: palette.white,
        hoverAccent: palette.gray2,
        focusAccent: palette.gray3,
        disabled: { default: palette.gray5, text: palette.gray6, accent: palette.gray2, border: palette.gray3 },
      },
    },
    checkbox: {
      success: {
        default: palette.green8,
        hover: palette.green9,
        contrast: palette.white,
        border: palette.gray4,
        hoverBorder: palette.gray6,
        text: palette.gray9,
        error: palette.red7,
        disabled: { default: palette.gray6, accent: palette.gray2, border: palette.gray3 },
      },
      information: {
        default: palette.ocean8,
        hover: palette.ocean9,
        contrast: palette.white,
        border: palette.gray4,
        hoverBorder: palette.gray6,
        text: palette.gray9,
        error: palette.red7,
        disabled: { default: palette.gray6, accent: palette.gray2, border: palette.gray3 },
      },
    },
    iconButton: {
      default: palette.gray7,
      accent: palette.gray2,
      focus: palette.ocean8,
      disabled: palette.gray5,
    },
    radioButton: {
      border: palette.gray4,
      background: palette.white,
      selected: palette.green8,
      text: palette.gray9,
      disabled: { border: palette.gray3, background: palette.gray2 },
    },
    stepper: {
      active: palette.green8,
      inactiveStep: palette.gray4,
      inactiveLine: palette.gray3,
    },
    toggle: {
      default: palette.gray5,
      selected: palette.green8,
      circle: palette.white,
      text: palette.gray9,
      disabled: { default: palette.gray3, circle: palette.gray1, text: palette.gray6 },
    },
    typography: {
      h1: { fontSize: '32px', lineHeight: '38px' },
      h2: { fontSize: '28px', lineHeight: '32px' },
      h3: { fontSize: '24px', lineHeight: '28px' },
      title: { fontSize: '20px', lineHeight: '24px' },
      subTitle: { fontSize: '18px', lineHeight: '24px' },
      largeText: { fontSize: '16px', lineHeight: '24px' },
      text: { fontSize: '14px', lineHeight: '20px' },
      caption: { fontSize: '12px', lineHeight: '16px' },
      colors: {
        success: palette.green9,
        destructive: palette.red8,
        warning: palette.orange9,
        neutral: palette.gray10,
        information: palette.ocean9,
      },
    },
  };
}

export default getTheme;
