import { IconSize } from '../../Basics/Icon/types';
import { IconButtonSize } from './types';

const getIconSize = (size?: IconButtonSize): IconSize => {
  switch (size) {
    case IconButtonSize['16px']:
      return IconSize['8px'];
    case IconButtonSize['20px']:
    default:
      return IconSize['12px'];
    case IconButtonSize['24px']:
      return IconSize['14px'];
    case IconButtonSize['28px']:
      return IconSize['14px'];
    case IconButtonSize['32px']:
      return IconSize['18px'];
    case IconButtonSize['36px']:
      return IconSize['20px'];
  }
};

export { getIconSize };
