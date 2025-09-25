import { StoryObj } from '@storybook/react';
import _COMPONENT_NAME_ from './index';
import { _COMPONENT_NAME_Props } from './types';

export default {
  component: _COMPONENT_NAME_,
  title: '_COMPONENT_NAME_',
  tags: ['autodocs'],
  argTypes: {},
};

type _COMPONENT_NAME_StoryProps = _COMPONENT_NAME_Props & {
  canvasElement: HTMLElement;
};

export const Variation1: StoryObj<_COMPONENT_NAME_StoryProps> = {
  args: {
    //props here,
  },
  play: ({ canvasElement }) => {
    //test here
  },
};

export const Variation2: StoryObj<_COMPONENT_NAME_StoryProps> = {
  args: {
    //props here,
  },
  play: ({ canvasElement }) => {
    //test here
  },
};
