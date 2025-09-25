import { AnimationName } from './types';

export const getIconAnimation = (animationName?: AnimationName): string => {
  switch (animationName) {
    case AnimationName.spin:
      return `fb-icon-${animationName} 1s infinite linear`;
    default:
      return 'none';
  }
};
