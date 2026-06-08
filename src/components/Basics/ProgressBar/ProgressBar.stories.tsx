import { StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import React from 'react';
import { standard } from '../../../context/ThemeContext/themes';
import ProgressBar from './index';
import { ProgressBarProps } from './types';

export default {
  component: ProgressBar,
  title: 'Basics/ProgressBar',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'Current progress (0–100 or 0–max). Required for determinate bars.',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value. Defaults to 100.',
    },
    width: {
      control: { type: 'number' },
      description: 'Width of the bar in pixels. Defaults to 100% of the container.',
    },
  },
};

type ProgressBarStoryProps = ProgressBarProps & {
  canvasElement: HTMLElement;
};

const theme = standard();

export const Overview: StoryObj<ProgressBarStoryProps> = {
  args: {
    value: 40,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const track = canvas.getByRole('progressbar');
    const fill = track.children[0] as HTMLElement;

    await expect(track).toHaveStyle(`background-color: ${theme.progressBar.track}`);
    await expect(fill).toHaveStyle(`background-color: ${theme.progressBar.fill}`);
    await expect(fill.offsetWidth / track.clientWidth).toBeCloseTo(0.4, 2);
    await expect(track).toHaveAttribute('aria-valuenow', '40');
    await expect(track).toHaveAttribute('aria-valuemax', '100');
  },
};

export const WithMax: StoryObj<ProgressBarStoryProps> = {
  args: {
    value: 540,
    max: 1200,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const track = canvas.getByRole('progressbar');
    const fill = track.children[0] as HTMLElement;

    await expect(track).toHaveAttribute('aria-valuemax', '1200');
    await expect(fill.offsetWidth / track.clientWidth).toBeCloseTo(0.45, 2);
  },
};

export const FixedWidth: StoryObj<ProgressBarStoryProps> = {
  args: {
    value: 70,
    width: 240,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const track = canvas.getByRole('progressbar');

    await expect(track).toHaveStyle('width: 240px;');
  },
};

export const Overflow: StoryObj<ProgressBarStoryProps> = {
  args: {
    value: 150,
    max: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const track = canvas.getByRole('progressbar');
    const fill = track.children[0] as HTMLElement;

    // A value above max renders as a full progress bar.
    await expect(fill.offsetWidth / track.clientWidth).toBeCloseTo(1, 2);
  },
};

export const States: StoryObj<ProgressBarStoryProps> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }}>
      <ProgressBar value={0} />
      <ProgressBar value={25} />
      <ProgressBar value={50} />
      <ProgressBar value={75} />
      <ProgressBar value={100} />
    </div>
  ),
};
