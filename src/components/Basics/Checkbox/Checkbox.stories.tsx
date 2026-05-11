import { useArgs } from '@storybook/preview-api';
import { StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React, { useState } from 'react';
import { standard } from '../../../context/ThemeContext/themes';
import { Color } from '../../../types';
import { IconName, IconSize } from '../Icon/types';
import Checkbox from './index';
import { CheckboxProps, Variant } from './types';

const mockOnChange = fn();

export default {
  component: Checkbox,
  title: 'Basics/Checkbox',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: [Color.success, Color.information],
      description: 'Checkbox color',
    },
    error: {
      control: 'boolean',
      description: 'Checkbox error state',
    },
    errorLabel: {
      control: 'text',
      description: 'Checkbox error message',
    },
    isChecked: {
      control: 'boolean',
      description: 'Checkbox checked state',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Checkbox disabled state',
    },
    isIndeterminate: {
      control: 'boolean',
      description: 'Checkbox indeterminate state',
    },
    label: {
      control: 'text',
      description: 'Checkbox label',
    },
    variant: {
      control: 'radio',
      options: [Variant.circle, Variant.square],
      description: 'Checkbox variant',
    },
    id: {
      control: 'text',
      description: 'Checkbox id',
    },
    name: {
      control: 'text',
      description: 'Checkbox name',
    },
    value: {
      control: 'text',
      description: 'Checkbox value',
    },
  },
  async beforeEach() {
    return () => {
      mockOnChange.mockReset();
    };
  },
};

type CheckboxStoryProps = CheckboxProps & {
  canvasElement: HTMLElement;
};
const theme = standard();

export const Overview: StoryObj<CheckboxStoryProps> = {
  args: { isChecked: true },
  render: function Render(args) {
    const [{ isChecked }, updateArgs] = useArgs();

    function onChange(checked: boolean) {
      updateArgs({ isChecked: checked });
    }

    return <Checkbox {...args} onChange={onChange} isChecked={isChecked} />;
  },
};

export const WithLabel: StoryObj<CheckboxStoryProps> = {
  render: () => {
    const [isChecked, setIsChecked] = useState(true);

    const onChange = () => {
      setIsChecked((prevState) => !prevState);
      mockOnChange();
    };

    return <Checkbox isChecked={isChecked} label={'Label'} onChange={onChange} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkboxWrapper');

    const input = checkbox.children[0];
    const checkboxBase = checkbox.children[1];
    const label = checkbox.children[2];
    const icon = checkboxBase.children[0];

    await expect(input).toBeChecked();

    await expect(checkboxBase).toHaveStyle(
      `background-color: ${theme.checkbox.success.default}; color: ${theme.checkbox.success.contrast}; border-radius: 4px`
    );
    await expect(label).toHaveStyle(`color: ${theme.radioButton.text}`);
    await expect(icon).toHaveStyle(`color: ${theme.checkbox.success.contrast}; font-size: ${IconSize['10px']}`);

    await expect(label.textContent).toBe('Label');

    await expect(icon.classList[1]).toBe(`icon-${IconName.Check}`);

    await userEvent.click(checkboxBase);
    await expect(mockOnChange).toHaveBeenCalledTimes(1);

    await expect(input).not.toBeChecked();
  },
};

export const Variants: StoryObj<CheckboxStoryProps> = {
  render: () => {
    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(true);

    const handleCheckbox1 = () => {
      setIsChecked1((prevState) => !prevState);
      mockOnChange();
    };

    const handleCheckbox2 = () => {
      setIsChecked2((prevState) => !prevState);
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
        <Checkbox isChecked={isChecked1} label={'Rounded'} onChange={handleCheckbox1} />
        <Checkbox isChecked={isChecked2} variant={Variant.circle} label={'Circle'} onChange={handleCheckbox2} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkboxWrapper');

    for (const index in checkboxes) {
      const input = checkboxes[index].children[0];
      const checkboxBase = checkboxes[index].children[1];
      const label = checkboxes[index].children[2];
      const icon = checkboxBase.children[0];

      await expect(input).toBeChecked();

      await expect(checkboxBase).toHaveStyle(
        `background-color: ${theme.checkbox.success.default}; color: ${theme.checkbox.success.contrast}; border-radius: ${index === '0' ? '4px' : '50%'}`
      );
      await expect(label).toHaveStyle(`color: ${theme.radioButton.text}`);
      await expect(icon).toHaveStyle(`color: ${theme.checkbox.success.contrast}; font-size: ${IconSize['10px']}`);

      await expect(label.textContent).toBe(`${index === '0' ? 'Rounded' : 'Circle'}`);

      await expect(icon.classList[1]).toBe(`icon-${IconName.Check}`);

      await userEvent.click(checkboxBase);
      await expect(mockOnChange).toHaveBeenCalledTimes(1);
      mockOnChange.mockReset();

      await expect(input).not.toBeChecked();
    }
  },
};

export const Colors: StoryObj<CheckboxStoryProps> = {
  render: () => {
    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(true);

    const handleCheckbox1 = () => {
      setIsChecked1((prevState) => !prevState);
      mockOnChange();
    };

    const handleCheckbox2 = () => {
      setIsChecked2((prevState) => !prevState);
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
        <Checkbox isChecked={isChecked1} variant={Variant.circle} label={'Success'} onChange={handleCheckbox1} />
        <Checkbox isChecked={isChecked2} variant={Variant.circle} color={Color.information} label={'Information'} onChange={handleCheckbox2} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkboxWrapper');

    for (const index in checkboxes) {
      const input = checkboxes[index].children[0];
      const checkboxBase = checkboxes[index].children[1];
      const label = checkboxes[index].children[2];
      const icon = checkboxBase.children[0];

      await expect(input).toBeChecked();

      await expect(checkboxBase).toHaveStyle(
        `background-color: ${index === '0' ? theme.checkbox.success.default : theme.checkbox.information.default}; color: ${theme.checkbox.success.contrast}; border-radius: 50%`
      );
      await expect(label).toHaveStyle(`color: ${theme.radioButton.text}`);
      await expect(icon).toHaveStyle(`color: ${theme.checkbox.success.contrast}; font-size: ${IconSize['10px']}`);

      await expect(label.textContent).toBe(`${index === '0' ? 'Success' : 'Information'}`);

      await expect(icon.classList[1]).toBe(`icon-${IconName.Check}`);

      await userEvent.click(checkboxBase);
      await expect(mockOnChange).toHaveBeenCalledTimes(1);
      mockOnChange.mockReset();

      await expect(input).not.toBeChecked();
    }
  },
};

export const States: StoryObj<CheckboxStoryProps> = {
  render: () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(true);
    const [isIndeterminate, setIsIndeterminate] = useState(true);

    const handleCheckbox1 = () => {
      setIsChecked1((prevState) => !prevState);
      mockOnChange();
    };

    const handleCheckbox2 = () => {
      setIsChecked2((prevState) => !prevState);
      mockOnChange();
    };
    const handleCheckbox3 = () => {
      setIsIndeterminate((prevState) => !prevState);
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
        <Checkbox isChecked={isChecked1} label={'Default'} onChange={handleCheckbox1} />
        <Checkbox isChecked={isChecked2} label={'Selected'} onChange={handleCheckbox2} />
        <Checkbox isIndeterminate={isIndeterminate} label={'Indeterminate'} onChange={handleCheckbox3} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkboxWrapper');

    for (const index in checkboxes) {
      const input = checkboxes[index].children[0];
      const checkboxBase = checkboxes[index].children[1];
      const label = checkboxes[index].children[2];
      const icon = checkboxBase.children[0];

      const expectedLabel = index === '2' ? 'Indeterminate' : index === '1' ? 'Selected' : 'Default';

      if (index === '0') {
        await expect(input).not.toBeChecked();

        await expect(checkboxBase).toHaveStyle(
          `background-color: rgba(0, 0, 0, 0); border: 1px solid ${theme.checkbox.success.border}; border-radius: 4px`
        );
      } else {
        await expect(input).toBeChecked();

        await expect(checkboxBase).toHaveStyle(
          `background-color: ${theme.checkbox.success.default}; color: ${theme.checkbox.success.contrast}; border-radius: 4px`
        );

        await expect(icon).toHaveStyle(`color: ${theme.checkbox.success.contrast}; font-size: ${IconSize['10px']}`);

        await expect(icon.classList[1]).toBe(`icon-${index == '1' ? IconName.Check : IconName.Minus}`);
      }

      await expect(label).toHaveStyle(`color: ${theme.radioButton.text}`);

      await expect(label.textContent).toBe(expectedLabel);

      await userEvent.click(checkboxBase);
      await expect(mockOnChange).toHaveBeenCalledTimes(1);
      mockOnChange.mockReset();
    }
  },
};

export const Disabled: StoryObj<CheckboxStoryProps> = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Checkbox isChecked={false} isDisabled={true} label={'Default'} onChange={mockOnChange} />
        <Checkbox isChecked={true} isDisabled={true} label={'Selected'} onChange={mockOnChange} />
        <Checkbox isIndeterminate={true} isDisabled={true} label={'Indeterminate'} onChange={mockOnChange} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkboxWrapper');

    for (const index in checkboxes) {
      const input = checkboxes[index].children[0];
      const checkboxBase = checkboxes[index].children[1];
      const label = checkboxes[index].children[2];
      const icon = checkboxBase.children[0];

      const expectedLabel = index === '2' ? 'Indeterminate' : index === '1' ? 'Selected' : 'Default';

      if (index === '0') {
        await expect(input).not.toBeChecked();

        await expect(checkboxBase).toHaveStyle(
          `background-color: ${theme.checkbox.success.disabled.accent}; border: 1px solid ${theme.checkbox.success.disabled.border}; border-radius: 4px`
        );
      } else {
        await expect(input).toBeChecked();

        await expect(checkboxBase).toHaveStyle(
          `background-color: ${theme.checkbox.success.disabled.accent}; color: ${theme.checkbox.success.disabled.default}; border-radius: 4px`
        );

        await expect(icon).toHaveStyle(`color: ${theme.checkbox.success.disabled.default}; font-size: ${IconSize['10px']}`);

        await expect(icon.classList[1]).toBe(`icon-${index == '1' ? IconName.Check : IconName.Minus}`);
      }

      await expect(label).toHaveStyle(`color: ${theme.radioButton.text}`);

      await expect(label.textContent).toBe(expectedLabel);

      await userEvent.click(input);
      await expect(mockOnChange).toHaveBeenCalledTimes(0);
    }
  },
};

export const Error: StoryObj<CheckboxStoryProps> = {
  render: () => {
    const [error, setError] = useState(true);

    const handleCheckbox = () => {
      setError((prevState) => !prevState);
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
        <Checkbox error={error} isIndeterminate={true} label={'Label'} errorLabel={'Error label'} onChange={handleCheckbox} />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkboxWrapper');

    const input = checkbox.children[0];
    const checkboxBase = checkbox.children[1];
    const label = checkbox.children[2];

    await expect(checkboxBase).toHaveStyle(
      `background-color: rgba(0, 0, 0, 0); border: 1px solid ${theme.checkbox.success.error}; border-radius: 4px`
    );
    await expect(label).toHaveStyle(`color: ${theme.radioButton.text}`);

    await expect(label.textContent).toBe('Label');

    await userEvent.click(input);
    await expect(mockOnChange).toHaveBeenCalledTimes(1);
  },
};
