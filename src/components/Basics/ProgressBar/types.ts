export interface ProgressBarProps {
  /** Current progress (0–100 or 0–max). Required for determinate bars. */
  value: number;
  /** Maximum value. Defaults to 100. Use for absolute values like "540 of 1200 tasks". */
  max?: number;
  /** Width of the bar in pixels. Defaults to 100% of the container. */
  width?: number;
}

export type ProgressBarPalette = {
  track: string;
  fill: string;
};
