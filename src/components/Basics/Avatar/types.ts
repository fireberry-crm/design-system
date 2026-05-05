/** Props for the Avatar component. Renders an image when provided, otherwise shows colored initials based on `label`. */
export interface AvatarProps {
  /** Used to generate initials and as `alt` fallback. */
  label: string;
  /** Image URL. Falls back to initials if the image fails to load. */
  imgSrc?: string;
  /** Explicit `alt` text. Defaults to `label`. */
  alt?: string;
}
