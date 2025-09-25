import { StoryObj } from '@storybook/react';
import Icon from './index';
import { IconName, IconProps, IconSize } from './types';

export default {
  component: Icon,
  title: 'Basics/Icon',
  tags: ['!autodocs'],
  argTypes: {
    animation: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
    icon: {
      control: 'select',
      options: Object.keys(IconName),
      description: 'Icon',
    },
    size: {
      control: 'radio',
      options: Object.keys(IconSize),
      description: 'Icon size',
    },
  },
};

type IconStoryProps = IconProps & {
  canvasElement: HTMLElement;
};

export const Overview: StoryObj<IconStoryProps> = {
  args: {
    icon: IconName.PlusSmall,
  },
};
