import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Basics/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text (Displays the first 2 letters as initials)',
    },
    imgSrc: {
      control: 'text',
      description: 'Image URL for the avatar',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithInitial: Story = {
  args: {
    label: 'Alice',
  },
};

export const InitialB: Story = {
  args: {
    label: 'Bob',
  },
};

export const InitialC: Story = {
  args: {
    label: 'Charlie',
  },
};

export const WithPhoto: Story = {
  args: {
    label: 'John Doe',
    imgSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=89&h=89&fit=crop',
    alt: 'John Doe avatar',
  },
};

// Different photos
export const WithPhoto2: Story = {
  args: {
    label: 'Jane Smith',
    imgSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=89&h=89&fit=crop',
    alt: 'Jane Smith avatar',
  },
};

export const AllExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar label="Alice" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Initial: A</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar label="Bob" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Initial: B</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar label="Charlie" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Initial: C</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar label="John Doe" imgSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=89&h=89&fit=crop" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>With Photo</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar label="Jane Smith" imgSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=89&h=89&fit=crop" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>With Photo</div>
      </div>
    </div>
  ),
};
