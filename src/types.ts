export const Mode = {
  standard: 'standard',
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode];

export const Variant = {
  primary: 'primary',
  secondary: 'secondary',
  text: 'text',
  outlined: 'outlined',
} as const;
export type Variant = (typeof Variant)[keyof typeof Variant];

export const Color = {
  success: 'success',
  destructive: 'destructive',
  warning: 'warning',
  neutral: 'neutral',
  information: 'information',
} as const;
export type Color = (typeof Color)[keyof typeof Color];

export const Position = {
  start: 'start',
  end: 'end',
} as const;
export type Position = (typeof Position)[keyof typeof Position];

export const PRIMARY_COLORS: Color[] = [Color.success, Color.destructive];
