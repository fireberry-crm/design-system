import { useArgs } from '@storybook/preview-api';
import { StoryObj } from '@storybook/react';
import React from 'react';
import Stepper from './Stepper';
import { StepperProps } from './types';

export default {
  component: Stepper,
  title: 'Navigation/Stepper',
  tags: ['autodocs'],
  argTypes: {
    activeStep: {
      control: 'number',
      description: 'Active step index',
    },
    steps: {
      control: 'array',
      description: 'Array of steps',
    },
  },
};

type StepperStoryProps = StepperProps & {
  canvasElement: HTMLElement;
};

export const Overview: StoryObj<StepperStoryProps> = {
  args: {
    steps: ['One', 'Two', 'Three', 'Four'],
    activeStep: 0,
  },
  render: function Render(args) {
    const [{ activeStep }, updateArgs] = useArgs();

    function onStepClick(step: number) {
      updateArgs({ activeStep: step });
    }

    return <Stepper {...args} onStepClick={onStepClick} activeStep={activeStep} />;
  },
};
