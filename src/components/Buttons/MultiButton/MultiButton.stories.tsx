import { StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React, { useState } from 'react';
import { standard } from '../../../context/ThemeContext/themes';
import { Color, Variant } from '../../../types';
import { IconName } from '../../Basics/Icon/types';
import MultiButton from './index';
import { MultiButtonProps } from './types';

const mockOnClick = fn();

export default {
  component: MultiButton,
  title: 'Buttons/MultiButton',
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

type MultiButtonStoryProps = MultiButtonProps & {
  canvasElement: HTMLElement;
};
const theme = standard();

export const Overview: StoryObj<MultiButtonStoryProps> = {
  args: {
    label: 'Button',
  },
};

const multiButtonVariantList = [
  {
    variant: Variant.primary,
    buttonCss: `background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast};`,
    separatorCss: `background-color: ${theme.button.success.hover};`,
  },
  {
    variant: Variant.secondary,
    buttonCss: `background-color: rgba(0, 0, 0, 0); color: ${theme.button.success.default}; outline: 1px solid ${theme.button.success.default};`,
    separatorCss: `background-color: rgba(0, 0, 0, 0);`,
  },
  {
    variant: Variant.text,
    buttonCss: `background-color: rgba(0, 0, 0, 0); color: ${theme.button.success.default};`,
    separatorCss: `background-color: rgba(0, 0, 0, 0);`,
  },
  {
    variant: Variant.outlined,
    buttonCss: `background-color: ${theme.button.success.contrast}; color: ${theme.button.success.default};`,
    separatorCss: `background-color: ${theme.button.success.hoverAccent};`,
  },
];

export const Variants: StoryObj<MultiButtonStoryProps> = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {multiButtonVariantList.map((multiButton: any) => {
          const label = `${multiButton.variant.charAt(0).toUpperCase()}${multiButton.variant.slice(1)}`;

          return <MultiButton label={label} variant={multiButton.variant} onClick={mockOnClick} />;
        })}
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const multiButtons = canvas.getAllByRole('multiButton');

    for (const index in multiButtonVariantList) {
      if (multiButtons[index].children.length > 0) {
        const button = multiButtons[index].children[0];
        if (button instanceof HTMLElement) {
          const label = `${multiButtonVariantList[index].variant.charAt(0).toUpperCase()}${multiButtonVariantList[index].variant.slice(1)}`;
          await expect(button.innerText).toBe(label);

          await expect(button).toHaveStyle(multiButtonVariantList[index].buttonCss);

          await userEvent.click(button);
          await expect(mockOnClick).toHaveBeenCalledTimes(1);
          mockOnClick.mockReset();
        }

        const separator = multiButtons[index].children[1];
        if (separator instanceof HTMLElement) {
          await expect(separator).toHaveStyle(multiButtonVariantList[index].separatorCss);
        }

        const menuButton = multiButtons[index].children[2];
        if (menuButton instanceof HTMLElement) {
          await expect(menuButton).toHaveStyle(multiButtonVariantList[index].buttonCss);
        }
      }
    }
  },
};

const multiButtonColorList = [
  {
    color: Color.success,
    buttonCss: `background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast};`,
    separatorCss: `background-color: ${theme.button.success.hover};`,
  },
  {
    color: Color.destructive,
    buttonCss: `background-color: ${theme.button.destructive.default}; color: ${theme.button.destructive.contrast};`,
    separatorCss: `background-color: ${theme.button.destructive.hover};`,
  },
  {
    color: Color.neutral,
    buttonCss: `background-color: rgba(0, 0, 0, 0); color: ${theme.button.neutral.default}; outline: 1px solid ${theme.button.neutral.default};`,
    separatorCss: `background-color: rgba(0, 0, 0, 0);`,
  },
];

export const Colors: StoryObj<MultiButtonStoryProps> = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {multiButtonColorList.map((multiButton) => {
          const label = `${multiButton.color.charAt(0).toUpperCase()}${multiButton.color.slice(1)}`;
          const variant = multiButton.color === Color.success || multiButton.color === Color.destructive ? Variant.primary : Variant.secondary;

          return <MultiButton label={label} color={multiButton.color} variant={variant} onClick={mockOnClick} />;
        })}
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const multiButtons = canvas.getAllByRole('multiButton');

    for (const index in multiButtonColorList) {
      if (multiButtons[index].children.length > 0) {
        const button = multiButtons[index].children[0];
        if (button instanceof HTMLElement) {
          const label = `${multiButtonColorList[index].color.charAt(0).toUpperCase()}${multiButtonColorList[index].color.slice(1)}`;
          await expect(button.innerText).toBe(label);

          await expect(button).toHaveStyle(multiButtonColorList[index].buttonCss);

          await userEvent.click(button);
          await expect(mockOnClick).toHaveBeenCalledTimes(1);
          mockOnClick.mockReset();
        }

        const separator = multiButtons[index].children[1];
        if (separator instanceof HTMLElement) {
          await expect(separator).toHaveStyle(multiButtonColorList[index].separatorCss);
        }

        const menuButton = multiButtons[index].children[2];
        if (menuButton instanceof HTMLElement) {
          await expect(menuButton).toHaveStyle(multiButtonColorList[index].buttonCss);
        }
      }
    }
  },
};

export const Icon: StoryObj<MultiButtonStoryProps> = {
  render: () => {
    return <MultiButton label={'Icon'} icon={IconName.PlusSmall} onClick={mockOnClick} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const multiButton = canvas.getAllByRole('button');

    const button = multiButton[0];
    const menuButton = multiButton[1];
    const icon = button.children[0];
    if (!button || !menuButton || !icon) return;

    await expect(button.innerText).toBe('Icon');

    await expect(icon).toHaveStyle(`color: ${theme.button.success.contrast};`);

    await expect(icon.classList[1]).toBe(`icon-${IconName.PlusSmall}`);

    await expect(button).toHaveStyle(`background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast};`);

    await expect(menuButton).toHaveStyle(`background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast};`);

    await userEvent.click(button);
    await expect(mockOnClick).toHaveBeenCalledTimes(1);

    await expect(menuButton).toHaveStyle(
      `background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast}; cursor: pointer;`
    );
  },
};

export const Loading: StoryObj<MultiButtonStoryProps> = {
  render: () => {
    const [loading, setLoading] = useState(false);

    const onClick = () => {
      setLoading(true);
      mockOnClick();
    };

    return <MultiButton label={'Click here for loading'} isLoading={loading} onClick={onClick} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const multiButton = canvas.getAllByRole('button');

    const button = multiButton[0];
    const menuButton = multiButton[1];
    if (!button || !menuButton) return;

    await expect(button.innerText).toBe('Click here for loading');

    await expect(button).toHaveStyle(`background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast}; cursor: pointer;`);

    await expect(menuButton).toHaveStyle(
      `background-color: ${theme.button.success.default}; color: ${theme.button.success.contrast}; cursor: pointer;`
    );

    await userEvent.click(button);
    await expect(mockOnClick).toHaveBeenCalledTimes(1);

    await expect(button).toHaveStyle(
      `background-color: ${theme.button.success.disabled.default};color: ${theme.button.success.contrast}; cursor: auto;`
    );

    await expect(menuButton).toHaveStyle(
      `background-color: ${theme.button.success.disabled.default};color: ${theme.button.success.contrast}; cursor: auto;`
    );
  },
};

export const Disabled: StoryObj<MultiButtonStoryProps> = {
  render: () => {
    return <MultiButton label={'Disabled'} isDisabled={true} onClick={mockOnClick} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const multiButton = canvas.getAllByRole('multiButton');

    if (multiButton[0].children.length > 0) {
      const button = multiButton[0].children[0];
      if (button instanceof HTMLElement) {
        await expect(button.innerText).toBe('Disabled');

        await expect(button).toHaveStyle(
          `background-color: ${theme.button.success.disabled.default}; color: ${theme.button.success.contrast}; cursor: auto;`
        );

        await userEvent.click(button);
        await expect(mockOnClick).toHaveBeenCalledTimes(0);
      }

      const separator = multiButton[0].children[1];
      if (separator instanceof HTMLElement) {
        await expect(separator).toHaveStyle(`background-color: ${theme.button.success.disabled.text};`);
      }

      const menuButton = multiButton[0].children[2];
      if (menuButton instanceof HTMLElement) {
        await expect(menuButton).toHaveStyle(
          `background-color: ${theme.button.success.disabled.default}; color: ${theme.button.success.contrast}; cursor: auto;`
        );
      }
    }
  },
};
