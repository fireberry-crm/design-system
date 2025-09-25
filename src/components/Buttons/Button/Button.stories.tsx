import { StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React, { useState } from 'react';
import { standard } from '../../../context/ThemeContext/themes';
import { Color, Position, Variant } from '../../../types';
import { IconName } from '../../Basics/Icon/types';
import Button from './Button';
import { ButtonProps } from './types';

const mockOnClick = fn();

export default {
  component: Button,
  title: 'Buttons/Button',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: Object.keys(Color),
      description: 'Button color',
    },
    icon: {
      control: 'select',
      options: Object.keys(IconName),
      description: 'Button icon',
    },
    iconPosition: {
      control: 'radio',
      options: Object.keys(Position),
      description: 'Button icon position',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Button disabled state',
    },
    isLoading: {
      control: 'boolean',
      description: 'Button loading state',
    },
    label: {
      control: 'text',
      description: 'Button label',
    },
    onClick: {
      action: 'clicked',
      description: 'Button onClick handler',
    },
    variant: {
      control: 'radio',
      options: Object.keys(Variant),
      description: 'Button variant',
    },
  },
  async beforeEach() {
    return () => {
      mockOnClick.mockReset();
    };
  },
};

type ButtonStoryProps = ButtonProps & { canvasElement: HTMLElement };
const theme = standard();

export const Overview: StoryObj<ButtonStoryProps> = {
  args: {
    label: 'Button',
  },
};

const buttonVariantList = [
  {
    variant: Variant.primary,
    buttonCss: `background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast};`,
  },
  {
    variant: Variant.secondary,
    buttonCss: `background-color: rgba(0, 0, 0, 0); color: ${theme.button.success.default}; outline: 1px solid ${theme.button.success.default};`,
  },
  {
    variant: Variant.text,
    buttonCss: `background-color: rgba(0, 0, 0, 0); color: ${theme.button.success.default};`,
  },
  {
    variant: Variant.outlined,
    buttonCss: `background-color: ${theme.button.success.contrast}; color: ${theme.button.success.default};`,
  },
];

export const Variants: StoryObj<ButtonStoryProps> = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {buttonVariantList.map((multiButton: any) => {
          const label = `${multiButton.variant.charAt(0).toUpperCase()}${multiButton.variant.slice(1)}`;

          return <Button label={label} variant={multiButton.variant} onClick={mockOnClick} />;
        })}
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    for (const index in buttonVariantList) {
      const button = buttons[index];

      const label = `${buttonVariantList[index].variant.charAt(0).toUpperCase()}${buttonVariantList[index].variant.slice(1)}`;
      await expect(button.innerText).toBe(label);

      await expect(button).toHaveStyle(buttonVariantList[index].buttonCss);

      await userEvent.click(button);
      await expect(mockOnClick).toHaveBeenCalledTimes(1);
      mockOnClick.mockReset();
    }
  },
};

const buttonColorList = [
  {
    color: Color.success,
    buttonCss: `background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast};`,
  },
  {
    color: Color.destructive,
    buttonCss: `background-color: ${theme.button.destructive.default}; color: ${theme.button.destructive.contrast};`,
  },
  {
    color: Color.neutral,
    buttonCss: `background-color: rgba(0, 0, 0, 0); color: ${theme.button.neutral.default}; outline: 1px solid ${theme.button.neutral.default};`,
  },
];

export const Colors: StoryObj<ButtonStoryProps> = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {Object.values(buttonColorList).map((button: any) => {
          const label = `${button.color.charAt(0).toUpperCase()}${button.color.slice(1)}`;
          const variant = button.color === Color.success || button.color === Color.destructive ? Variant.primary : Variant.secondary;

          return <Button label={label} color={button.color} variant={variant} onClick={mockOnClick} />;
        })}
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    for (const index in buttons) {
      const button = buttons[index];

      const label = `${buttonColorList[index].color.charAt(0).toUpperCase()}${buttonColorList[index].color.slice(1)}`;
      await expect(button.innerText).toBe(label);

      await expect(button).toHaveStyle(buttonColorList[index].buttonCss);

      await userEvent.click(button);
      await expect(mockOnClick).toHaveBeenCalledTimes(1);
      mockOnClick.mockReset();
    }
  },
};

const buttonIconPositionList = Object.values(Position);

export const Icons: StoryObj<ButtonStoryProps> = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {Object.values(buttonIconPositionList).map((position: Position) => {
          const label = `${position.charAt(0).toUpperCase()}${position.slice(1)} Icon`;

          return <Button label={label} icon={IconName.PlusSmall} iconPosition={position} onClick={mockOnClick} />;
        })}
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    for (const index in buttons) {
      const button = buttons[index];
      const icon = button.children[0];
      if (!icon) return;

      const label = `${buttonIconPositionList[index].charAt(0).toUpperCase()}${buttonIconPositionList[index].slice(1)} Icon`;
      await expect(button.innerText).toBe(label);

      await expect(button).toHaveStyle(`background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast}`);
      await expect(icon).toHaveStyle(`color: ${theme.button.success.contrast}; font-size: 14px`);

      await expect(icon.classList[1]).toBe(`icon-${IconName.PlusSmall}`);

      await userEvent.click(button);
      await expect(mockOnClick).toHaveBeenCalledTimes(1);
      mockOnClick.mockReset();
    }
  },
};

export const Loading: StoryObj<ButtonStoryProps> = {
  render: () => {
    const [loading, setLoading] = useState(false);

    const onClick = () => {
      setLoading(true);
      mockOnClick();
    };

    return <Button label={'Click here for loading'} isLoading={loading} onClick={onClick} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await expect(button.innerText).toBe('Click here for loading');

    await expect(button).toHaveStyle(`background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast}`);

    await userEvent.click(button);
    await expect(mockOnClick).toHaveBeenCalledTimes(1);

    await expect(button).toHaveStyle(`background-color: ${theme.button.success.disabled.default}; color: ${theme.button.success.contrast}`);
  },
};

export const Disabled: StoryObj<ButtonStoryProps> = {
  render: () => {
    return <Button label={'Disabled'} isDisabled={true} onClick={mockOnClick} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await expect(button.innerText).toBe('Disabled');

    await expect(button).toHaveStyle(`background-color: ${theme.button.success.disabled.default}; color: ${theme.button.success.contrast}`);

    await userEvent.click(button);
    await expect(mockOnClick).toHaveBeenCalledTimes(0);
  },
};
