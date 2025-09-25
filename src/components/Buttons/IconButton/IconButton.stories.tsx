import { StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React from 'react';
import { standard } from '../../../context/ThemeContext/themes';
import { IconName } from '../../Basics/Icon/types';
import { getIconSize } from './helpers';
import IconButton from './index';
import { IconButtonProps, IconButtonSize } from './types';

const mockOnClick = fn();

export default {
  component: IconButton,
  title: 'Buttons/IconButton',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(IconName),
      description: 'Icon',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Button disabled state',
    },
    onClick: {
      action: 'clicked',
      description: 'Button onClick handler',
    },
    size: {
      control: 'radio',
      options: Object.keys(IconButtonSize),
      description: 'Icon size',
    },
  },
  async beforeEach() {
    return () => {
      mockOnClick.mockReset();
    };
  },
};

type IconButtonStoryProps = IconButtonProps & {
  canvasElement: HTMLElement;
};

const theme = standard();

export const Overview: StoryObj<IconButtonStoryProps> = {
  args: {
    icon: IconName.Search,
  },
};

const iconButtonSizeList = Object.values(IconButtonSize);
const iconSizes = iconButtonSizeList.map((size) => getIconSize(size));

export const Sizes: StoryObj<IconButtonStoryProps> = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {Object.keys(IconButtonSize).map((size: any) => (
          <IconButton icon={IconName.Search} size={size} onClick={mockOnClick} />
        ))}
      </div>
    );
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const iconButtons = canvas.getAllByRole('button');

    for (const index in iconButtons) {
      const iconButton = iconButtons[index];
      const icon = iconButton.children[0];
      if (!icon) return;

      await expect(iconButton).toHaveStyle(`width: ${iconButtonSizeList[index]}; height: ${iconButtonSizeList[index]};`);
      await expect(icon).toHaveStyle(`color: ${theme.iconButton.default}; font-size: ${iconSizes[index]}`);

      await expect(icon.classList[1]).toBe(`icon-${IconName.Search}`);

      await userEvent.click(iconButton);
      await expect(mockOnClick).toHaveBeenCalledTimes(1);
      mockOnClick.mockReset();
    }
  },
};

export const Disabled: StoryObj<IconButtonStoryProps> = {
  render: () => {
    return <IconButton icon={IconName.Search} isDisabled={true} onClick={mockOnClick} />;
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button');

    const icon = iconButton.children[0];
    if (!icon) return;

    await expect(icon).toHaveStyle(`color: ${theme.iconButton.disabled}; cursor: auto;`);

    await expect(icon.classList[1]).toBe(`icon-${IconName.Search}`);

    await userEvent.click(iconButton);
    await expect(mockOnClick).toHaveBeenCalledTimes(0);
  },
};
