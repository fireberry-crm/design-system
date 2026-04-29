import { Color, Variant } from '../../../types';
import { IconName } from '../../Basics/Icon/types';

/** Props for the MultiButton component. Renders a primary button alongside a dropdown-menu trigger segment. */
export interface MultiButtonProps {
  /** Text shown inside the primary button. */
  label: string;
  /** Semantic color. Defaults to `Color.success`. */
  color?: Color;
  /** Optional icon rendered next to the label. */
  icon?: IconName;
  /** Visual variant. Defaults to `Variant.primary`. */
  variant?: Variant;
  /** Show a loading spinner and disable interaction. Defaults to `false`. */
  isLoading?: boolean;
  /** Disables interaction. Defaults to `false`. */
  isDisabled?: boolean;
  /** Called when the primary button is clicked. */
  onClick?: () => void;
}
