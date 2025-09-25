import { useArgs } from '@storybook/preview-api';
import { StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React, { useState } from 'react';
import { standard } from '../../../context/ThemeContext/themes';
import Toggle from './index';
import { ToggleProps } from './types';

const mockOnChange = fn();

export default {
  component: Toggle,
  title: 'Basics/Toggle',
  tags: ['autodocs'],
  argTypes: {
    isSelected: {
      control: 'boolean',
      description: 'Toggle selected state',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Toggle disabled state',
    },
    selectedLabel: {
      control: 'text',
      description: 'Toggle selected label',
    },
    unselectedLabel: {
      control: 'text',
      description: 'Toggle unselected label',
    },
    id: {
      control: 'text',
      description: 'Toggle id',
    },
    name: {
      control: 'text',
      description: 'Toggle name',
    },
    value: {
      control: 'text',
      description: 'Toggle value',
    },
  },
  async beforeEach() {
    return () => {
      mockOnChange.mockReset();
    };
  },
};

type ToggleStoryProps = ToggleProps & {
  canvasElement: HTMLElement;
};

const theme = standard();

export const Overview: StoryObj<ToggleStoryProps> = {
  args: {
    isSelected: true,
  },
  render: function Render(args) {
    const [{ isSelected }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ isSelected: !isSelected });
    }

    return <Toggle {...args} onChange={onChange} isSelected={isSelected} />;
  },
};

export const WithLabels: StoryObj<ToggleStoryProps> = {
  render: () => {
    const [isSelected, setIsSelected] = useState(true);

    const handleToggle = () => {
      setIsSelected((prevState) => !prevState);
      mockOnChange();
    };

    return <Toggle isSelected={isSelected} selectedLabel="On" unselectedLabel="Off" onChange={handleToggle} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('toggle');

    const input = toggle.children[0];
    const unselectedLabel = toggle.children[1];
    const toggleBase = toggle.children[2];
    const selectedLabel = toggle.children[3];
    const circle = toggleBase.children[0];

    await expect(input).toBeChecked();

    await expect(toggleBase).toHaveStyle(`background-color: ${theme.toggle.selected}; justify-content: flex-end; cursor: pointer;`);
    await expect(circle).toHaveStyle(`background-color: ${theme.toggle.circle}; cursor: pointer;`);

    await expect(selectedLabel.textContent).toBe('On');
    await expect(unselectedLabel.textContent).toBe('Off');

    await userEvent.click(input);
    await expect(mockOnChange).toHaveBeenCalledTimes(1);

    await expect(input).not.toBeChecked();
  },
};

export const States: StoryObj<ToggleStoryProps> = {
  render: () => {
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(true);

    const handleToggle1 = () => {
      setIsSelected1((prevState) => !prevState);
      mockOnChange();
    };

    const handleToggle2 = () => {
      setIsSelected2((prevState) => !prevState);
      mockOnChange();
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Toggle isSelected={isSelected1} selectedLabel="On" unselectedLabel="Off" onChange={handleToggle1} />
        <Toggle isSelected={isSelected2} selectedLabel="On" unselectedLabel="Off" onChange={handleToggle2} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggles = canvas.getAllByRole('toggle');

    for (const index in toggles) {
      const toggle = toggles[index];
      const input = toggle.children[0];
      const unselectedLabel = toggle.children[1];
      const toggleBase = toggle.children[2];
      const selectedLabel = toggle.children[3];
      const circle = toggleBase.children[0];

      await expect(toggleBase).toHaveStyle(
        `background-color: ${index === '0' ? theme.toggle.default : theme.toggle.selected}; justify-content: ${index === '0' ? 'flex-start' : 'flex-end'}; cursor: pointer;`
      );
      await expect(circle).toHaveStyle(`background-color: ${theme.toggle.circle}; cursor: pointer;`);

      await expect(selectedLabel.textContent).toBe('On');
      await expect(unselectedLabel.textContent).toBe('Off');

      await userEvent.click(input);
      await expect(mockOnChange).toHaveBeenCalledTimes(1);
      mockOnChange.mockReset();
    }
  },
};

export const Disabled: StoryObj<ToggleStoryProps> = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Toggle isSelected={false} isDisabled={true} selectedLabel="On" unselectedLabel="Off" onChange={mockOnChange} />
        <Toggle isSelected={true} isDisabled={true} selectedLabel="On" unselectedLabel="Off" onChange={mockOnChange} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggles = canvas.getAllByRole('toggle');

    for (const index in toggles) {
      const toggle = toggles[index];
      const input = toggle.children[0];
      const unselectedLabel = toggle.children[1];
      const toggleBase = toggle.children[2];
      const selectedLabel = toggle.children[3];
      const circle = toggleBase.children[0];

      await expect(toggleBase).toHaveStyle(
        `background-color: ${theme.toggle.disabled.default}; justify-content: ${index === '0' ? 'flex-start' : 'flex-end'}; cursor: auto;`
      );
      await expect(circle).toHaveStyle(`background-color: ${theme.toggle.disabled.circle}; cursor: auto;`);

      await expect(selectedLabel.textContent).toBe('On');
      await expect(unselectedLabel.textContent).toBe('Off');

      await userEvent.click(input);
      await expect(mockOnChange).toHaveBeenCalledTimes(0);
      mockOnChange.mockReset();
    }
  },
};
