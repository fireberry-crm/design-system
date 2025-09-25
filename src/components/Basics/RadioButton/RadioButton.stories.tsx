import { useArgs } from '@storybook/preview-api';
import { StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React, { useState } from 'react';
import { standard } from '../../../context/ThemeContext/themes';
import RadioButton from './index';
import { RadioButtonProps } from './types';

const mockOnChange = fn();

export default {
  component: RadioButton,
  title: 'Basics/RadioButton',
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      control: 'boolean',
      description: 'Radio button disabled state',
    },
    isSelected: {
      control: 'boolean',
      description: 'Radio button selected state',
    },
    label: {
      control: 'text',
      description: 'Radio button label',
    },
    id: {
      control: 'text',
      description: 'Radio button id',
    },
    name: {
      control: 'text',
      description: 'Radio button name',
    },
    value: {
      control: 'text',
      description: 'Radio button value',
    },
  },
  async beforeEach() {
    return () => {
      mockOnChange.mockReset();
    };
  },
};

type RadioButtonStoryProps = RadioButtonProps & {
  canvasElement: HTMLElement;
};

const theme = standard();

export const Overview: StoryObj<RadioButtonStoryProps> = {
  args: {
    isSelected: true,
  },
  render: function Render(args) {
    const [{ isSelected }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ isSelected: true });
    }

    return <RadioButton {...args} onChange={onChange} isSelected={isSelected} />;
  },
};

export const WithLabel: StoryObj<RadioButtonStoryProps> = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false);

    const onChange = () => {
      setIsSelected(true);
      mockOnChange();
    };

    return <RadioButton isSelected={isSelected} label={'Label'} onChange={onChange} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButtons = canvas.getAllByRole('radioButton');

    for (const index in radioButtons) {
      const input = radioButtons[index].children[0];
      const radioButton = radioButtons[index].children[1];
      const label = radioButtons[index].children[2];

      await expect(input).not.toBeChecked();

      await expect(radioButton).toHaveStyle(
        `background-color: ${theme.radioButton.background}; border: 1px solid ${index === '0' ? theme.radioButton.border : theme.radioButton.selected};`
      );
      await expect(label).toHaveStyle(`color: ${theme.radioButton.text};`);

      await expect(label.textContent).toBe('Label');

      await userEvent.click(input);
      await expect(mockOnChange).toHaveBeenCalledTimes(1);

      await expect(input).toBeChecked();
    }
  },
};

export const States: StoryObj<RadioButtonStoryProps> = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false);

    const onChange = () => {
      setIsSelected(true);
      mockOnChange();
    };

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <RadioButton isSelected={isSelected} label={'Not Selected'} onChange={onChange} />
        <RadioButton isSelected={true} label={'Selected'} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButtons = canvas.getAllByRole('radioButton');

    for (const index in radioButtons) {
      const input = radioButtons[index].children[0];
      const radioButton = radioButtons[index].children[1];
      const label = radioButtons[index].children[2];

      await expect(radioButton).toHaveStyle(
        `background-color: ${theme.radioButton.background}; border: 1px solid ${index === '0' ? theme.radioButton.border : theme.radioButton.selected};`
      );
      await expect(label).toHaveStyle(`color: ${theme.radioButton.text};`);

      await expect(label.textContent).toBe(`${index === '0' ? 'Not Selected' : 'Selected'}`);

      await userEvent.click(input);
      await expect(mockOnChange).toHaveBeenCalledTimes(1);
    }
  },
};

export const Disabled: StoryObj<RadioButtonStoryProps> = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <RadioButton isSelected={false} isDisabled={true} label={'Not Selected'} onChange={mockOnChange} />
        <RadioButton isSelected={true} isDisabled={true} label={'Selected'} onChange={mockOnChange} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButtons = canvas.getAllByRole('radioButton');

    for (const index in radioButtons) {
      const input = radioButtons[index].children[0];
      const radioButton = radioButtons[index].children[1];
      const label = radioButtons[index].children[2];

      await expect(radioButton).toHaveStyle(
        `background-color: ${index === '0' ? theme.radioButton.disabled.background : theme.radioButton.background}; border: 1px solid ${theme.radioButton.disabled.border};`
      );
      await expect(label).toHaveStyle(`color: ${theme.radioButton.text};`);

      await expect(label.textContent).toBe(`${index === '0' ? 'Not Selected' : 'Selected'}`);

      await userEvent.click(input);
      await expect(mockOnChange).toHaveBeenCalledTimes(0);
    }
  },
};
