import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import List from './List';
import ListItem, { ListItemIcon, ListItemText } from '../ListItem';
import Collapse from '../Collapse';
import { IconName } from '../Icon/types';

const meta = {
  title: 'Navigation/List/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <ListItem>
        <ListItemText>List Item 1</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>List Item 2</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>List Item 3</ListItemText>
      </ListItem>
    </List>
  ),
};

export const NoIcon: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <ListItem>
        <ListItemText>Option 1</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Option 2</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Option 3</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Option 4</ListItemText>
      </ListItem>
    </List>
  ),
};

export const LeftIcon: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <ListItem>
        <ListItemIcon icon={IconName.Home} />
        <ListItemText>Home</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon icon={IconName.Settings} />
        <ListItemText>Settings</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon icon={IconName.User} />
        <ListItemText>User</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon icon={IconName.Star} />
        <ListItemText>Favorites</ListItemText>
      </ListItem>
    </List>
  ),
};

export const RightIcon: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <ListItem>
        <ListItemText>Documents</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
      <ListItem>
        <ListItemText>Downloads</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
      <ListItem>
        <ListItemText>Pictures</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
      <ListItem>
        <ListItemText>Videos</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
    </List>
  ),
};

export const MultipleEndIcons: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <ListItem>
        <ListItemText>Document.pdf</ListItemText>
        <ListItemIcon icon={IconName.Edit} />
        <ListItemIcon icon={IconName.Trash} />
      </ListItem>
      <ListItem>
        <ListItemText>Favorites</ListItemText>
        <ListItemIcon icon={IconName.Star} />
        <ListItemIcon icon={IconName.Heart} />
      </ListItem>
      <ListItem>
        <ListItemText>Project Files</ListItemText>
        <ListItemIcon icon={IconName.Download} />
        <ListItemIcon icon={IconName.Share} />
      </ListItem>
      <ListItem>
        <ListItemText>Account Settings</ListItemText>
        <ListItemIcon icon={IconName.User} />
        <ListItemIcon icon={IconName.Settings} />
      </ListItem>
    </List>
  ),
};

export const BothIcons: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <ListItem>
        <ListItemIcon icon={IconName.Files} />
        <ListItemText>Files</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
      <ListItem>
        <ListItemIcon icon={IconName.Home} />
        <ListItemText>Home</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
      <ListItem>
        <ListItemIcon icon={IconName.Image} />
        <ListItemText>Images</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
      <ListItem>
        <ListItemIcon icon={IconName.User} />
        <ListItemText>Profile</ListItemText>
        <ListItemIcon icon={IconName.AngleRightSmall} />
      </ListItem>
    </List>
  ),
};

export const WithClickHandler: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <ListItem onClick={() => alert('Item 1 clicked')}>
        <ListItemText>Click me - Item 1</ListItemText>
      </ListItem>
      <ListItem onClick={() => alert('Item 2 clicked')}>
        <ListItemText>Click me - Item 2</ListItemText>
      </ListItem>
      <ListItem onClick={() => alert('Item 3 clicked')}>
        <ListItemText>Click me - Item 3</ListItemText>
      </ListItem>
      <ListItem onClick={() => alert('Item 4 clicked')}>
        <ListItemText>Click me - Item 4</ListItemText>
      </ListItem>
    </List>
  ),
};

export const SelectedState: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <ListItem>
        <ListItemText>Option 1</ListItemText>
      </ListItem>
      <ListItem selected>
        <ListItemText>Option 2 (Selected)</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Option 3</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Option 4</ListItemText>
      </ListItem>
    </List>
  ),
};

export const ActiveState: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <ListItem>
        <ListItemIcon icon={IconName.Home} />
        <ListItemText>Normal Item</ListItemText>
      </ListItem>
      <ListItem active>
        <ListItemIcon icon={IconName.Settings} />
        <ListItemText>Active Item (colored text and icon, no background)</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon icon={IconName.User} />
        <ListItemText>Normal Item</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon icon={IconName.Star} />
        <ListItemText>Normal Item</ListItemText>
      </ListItem>
    </List>
  ),
};

export const WithIndent: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <ListItem>
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
      <ListItem indent={1}>
        <ListItemIcon icon={IconName.Home} />
        <ListItemText>Indent 1 with icon</ListItemText>
      </ListItem>
      <ListItem indent={2}>
        <ListItemIcon icon={IconName.Settings} />
        <ListItemText>Indent 2 with icon</ListItemText>
      </ListItem>
    </List>
  ),
};

export const DynamicIcon: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>({});
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

    const toggleItem = (itemId: string) => {
      setOpenItems((prev) => ({
        ...prev,
        [itemId]: !prev[itemId],
      }));
    };

    const selectItem = (itemId: string) => {
      setSelectedItem(itemId);
    };

    const handleParentClick = (itemId: string) => {
      toggleItem(itemId);
      selectItem(itemId);
    };

    // Helper to check if any child of a parent is selected
    const isParentActive = (parentId: string) => {
      if (!selectedItem) return false;
      return selectedItem.startsWith(parentId + '.') && selectedItem !== parentId;
    };

    return (
      <div>
        <List>
          <ListItem
            onClick={() => handleParentClick('item1')}
            selected={selectedItem === 'item1'}
            active={isParentActive('item1')}
          >
            <ListItemText>Parent Item 1</ListItemText>
            <ListItemIcon icon={openItems['item1'] ? IconName.AngleDownSmall : IconName.AngleRightSmall} />
          </ListItem>
        </List>
        <Collapse isOpen={openItems['item1']}>
          <List>
            <ListItem
              indent={1}
              onClick={() => selectItem('item1.1')}
              selected={selectedItem === 'item1.1'}
            >
              <ListItemIcon icon={IconName.Home} />
              <ListItemText>Child Item 1.1</ListItemText>
            </ListItem>
            <ListItem
              indent={1}
              onClick={() => selectItem('item1.2')}
              selected={selectedItem === 'item1.2'}
            >
              <ListItemIcon icon={IconName.Settings} />
              <ListItemText>Child Item 1.2</ListItemText>
            </ListItem>
            <ListItem
              indent={1}
              onClick={() => selectItem('item1.3')}
              selected={selectedItem === 'item1.3'}
            >
              <ListItemIcon icon={IconName.User} />
              <ListItemText>Child Item 1.3</ListItemText>
            </ListItem>
          </List>
        </Collapse>

        <List>
          <ListItem
            onClick={() => handleParentClick('item2')}
            selected={selectedItem === 'item2'}
            active={isParentActive('item2')}
          >
            <ListItemText>Parent Item 2</ListItemText>
            <ListItemIcon icon={openItems['item2'] ? IconName.AngleDownSmall : IconName.AngleRightSmall} />
          </ListItem>
        </List>
        <Collapse isOpen={openItems['item2']}>
          <List>
            <ListItem
              indent={1}
              onClick={() => selectItem('item2.1')}
              selected={selectedItem === 'item2.1'}
            >
              <ListItemIcon icon={IconName.Star} />
              <ListItemText>Child Item 2.1</ListItemText>
            </ListItem>
            <ListItem
              indent={1}
              onClick={() => selectItem('item2.2')}
              selected={selectedItem === 'item2.2'}
            >
              <ListItemIcon icon={IconName.Heart} />
              <ListItemText>Child Item 2.2</ListItemText>
            </ListItem>
          </List>
        </Collapse>

        <List>
          <ListItem
            onClick={() => handleParentClick('item3')}
            selected={selectedItem === 'item3'}
            active={isParentActive('item3')}
          >
            <ListItemText>Parent Item 3</ListItemText>
            <ListItemIcon icon={openItems['item3'] ? IconName.AngleDownSmall : IconName.AngleRightSmall} />
          </ListItem>
        </List>
        <Collapse isOpen={openItems['item3']}>
          <List>
            <ListItem
              indent={1}
              onClick={() => selectItem('item3.1')}
              selected={selectedItem === 'item3.1'}
            >
              <ListItemIcon icon={IconName.Download} />
              <ListItemText>Child Item 3.1</ListItemText>
            </ListItem>
            <ListItem
              indent={1}
              onClick={() => selectItem('item3.2')}
              selected={selectedItem === 'item3.2'}
            >
              <ListItemIcon icon={IconName.Share} />
              <ListItemText>Child Item 3.2</ListItemText>
            </ListItem>
            <ListItem
              indent={1}
              onClick={() => selectItem('item3.3')}
              selected={selectedItem === 'item3.3'}
            >
              <ListItemIcon icon={IconName.Edit} />
              <ListItemText>Child Item 3.3</ListItemText>
            </ListItem>
            <ListItem
              indent={1}
              onClick={() => selectItem('item3.4')}
              selected={selectedItem === 'item3.4'}
            >
              <ListItemIcon icon={IconName.Trash} />
              <ListItemText>Child Item 3.4</ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  },
};
