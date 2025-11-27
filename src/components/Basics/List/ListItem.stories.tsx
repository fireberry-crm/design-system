import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ListItem, { ListItemIcon, ListItemText } from '../ListItem';
import { IconName } from '../Icon/types';
import { DSThemeContextProvider } from '../../../context/ThemeContext';
import List from '../List/List';

const meta = {
  title: 'Navigation/List/ListItem',
  component: ListItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Child components (ListItemIcon, ListItemText)',
    },
    selected: {
      control: 'boolean',
      description: 'Shows selected state with blue background and text',
    },
    active: {
      control: 'boolean',
      description: 'Shows active state with blue text but no background',
    },
    indent: {
      control: 'number',
      description: 'Indentation level (each level adds 28px)',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the item',
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ListItem {...args}>
        <ListItemIcon icon={IconName.Home} />
        <ListItemText>List Item</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ListItem {...args}>
        <ListItemIcon icon={IconName.Home} />
        <ListItemText>Home</ListItemText>
      </ListItem>
    </div>
  ),
};

export const WithRightIcon: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ListItem {...args}>
        <ListItemText>Documents</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
    </div>
  ),
};

export const WithBothIcons: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ListItem {...args}>
        <ListItemIcon icon={IconName.Files} />
        <ListItemText>Files</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
    </div>
  ),
};

export const WithMultipleEndIcons: Story = {
  args: {
    children: null,
    },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ListItem {...args}>
        <ListItemText>Document.pdf</ListItemText>
        <ListItemIcon icon={IconName.Edit} />
        <ListItemIcon icon={IconName.Trash} />
      </ListItem>
    </div>
  ),
};

export const Selected: Story = {
  args: {
    selected: true,
    children: null,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ListItem {...args}>
        <ListItemIcon icon={IconName.Home} />
        <ListItemText>Selected Item</ListItemText>
      </ListItem>
    </div>
  ),
};

export const Active: Story = {
  args: {
    active: true,
    children: null,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ListItem {...args}>
        <ListItemIcon icon={IconName.Settings} />
        <ListItemText>Active Item (colored text, no background)</ListItemText>
      </ListItem>
    </div>
  ),
};

export const WithClickHandler: Story = {
  args: {
    onClick: () => alert('Item clicked!'),
    children: null,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ListItem {...args}>
        <ListItemIcon icon={IconName.Star} />
        <ListItemText>Click me</ListItemText>
      </ListItem>
    </div>
  ),
};

export const Indented: Story = {
  args: {
    indent: 1,
    children: null,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ListItem indent={0}>
        <ListItemText>No indent (0)</ListItemText>
      </ListItem>
      <ListItem indent={1}>
        <ListItemText>Indent 1 (28px)</ListItemText>
      </ListItem>
      <ListItem indent={2}>
        <ListItemText>Indent 2 (56px)</ListItemText>
      </ListItem>
      <ListItem indent={3}>
        <ListItemText>Indent 3 (84px)</ListItemText>
      </ListItem>
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px' }}>Default</h3>
        <ListItem>
          <ListItemIcon icon={IconName.Home} />
          <ListItemText>Default State</ListItemText>
        </ListItem>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px' }}>Hover (hover over item)</h3>
        <ListItem>
          <ListItemIcon icon={IconName.Settings} />
          <ListItemText>Hover State</ListItemText>
        </ListItem>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px' }}>Selected</h3>
        <ListItem selected>
          <ListItemIcon icon={IconName.User} />
          <ListItemText>Selected State</ListItemText>
        </ListItem>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px' }}>Active</h3>
        <ListItem active>
          <ListItemIcon icon={IconName.Star} />
          <ListItemText>Active State</ListItemText>
        </ListItem>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px' }}>Clickable</h3>
        <ListItem onClick={() => alert('Clicked!')}>
          <ListItemIcon icon={IconName.Download} />
          <ListItemText>Clickable State</ListItemText>
        </ListItem>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    selected: false,
    active: false,
    indent: 0,
    children: null,
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ListItem {...args}>
        <ListItemIcon icon={IconName.Home} />
        <ListItemText>Playground Item</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
    </div>
  ),
};

export const WithIndentRTL: Story = {
  args: {
    children: null,
  },
  render: () => (
    <DSThemeContextProvider isRtl={true}>
      <div style={{ direction: 'rtl' }}>
        <List>
          <ListItem indent={0}>
            <ListItemIcon icon={IconName.Home} />
            <ListItemText>No indent (0)</ListItemText>
          </ListItem>
          <ListItem indent={1}>
            <ListItemIcon icon={IconName.Settings} />
            <ListItemText>Indent 1 (28px from right)</ListItemText>
          </ListItem>
          <ListItem indent={2}>
            <ListItemIcon icon={IconName.User} />
            <ListItemText>Indent 2 (56px from right)</ListItemText>
          </ListItem>
          <ListItem indent={3}>
            <ListItemIcon icon={IconName.Star} />
            <ListItemText>Indent 3 (84px from right)</ListItemText>
          </ListItem>
        </List>
      </div>
    </DSThemeContextProvider>
  ),
};
