import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Collapse from './Collapse';
import List from '../List';
import ListItem, { ListItemIcon, ListItemText } from '../ListItem';
import Button from '../../Buttons/Button';
import { IconName } from '../Icon/types';
import { Variant } from '../../../types';

const meta = {
  title: 'Basics/Collapse',
  component: Collapse,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
    isOpen: false,
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button variant={Variant.primary} onClick={() => setIsOpen(!isOpen)} label={isOpen ? 'Hide Content' : 'Show Content'} />
        <Collapse isOpen={isOpen}>
          <div style={{ padding: '16px', backgroundColor: '#f5f5f5', marginTop: '8px' }}>
            This is collapsible content that can be shown or hidden.
          </div>
        </Collapse>
      </div>
    );
  },
};

export const WithList: Story = {
  args: {
    children: null,
    isOpen: false,
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button variant={Variant.primary} onClick={() => setIsOpen(!isOpen)} label={isOpen ? 'Hide List' : 'Show List'} />
        <Collapse isOpen={isOpen}>
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
              <ListItemText>Profile</ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  },
};

export const WithAccordion: Story = {
  args: {
    children: null,
    isOpen: false,
  },
  render: () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
      setOpenSection(openSection === section ? null : section);
    };

    return (
      <div>
        <List>
          <ListItem onClick={() => toggleSection('section1')}>
            <ListItemText>Section 1</ListItemText>
            <ListItemIcon icon={openSection === 'section1' ? IconName.AngleUpSmall : IconName.AngleDownSmall} />
          </ListItem>
        </List>
        <Collapse isOpen={openSection === 'section1'}>
          <List>
            <ListItem indent={1}>
              <ListItemText>Item 1.1</ListItemText>
            </ListItem>
            <ListItem indent={1}>
              <ListItemText>Item 1.2</ListItemText>
            </ListItem>
            <ListItem indent={1}>
              <ListItemText>Item 1.3</ListItemText>
            </ListItem>
          </List>
        </Collapse>

        <List>
          <ListItem onClick={() => toggleSection('section2')}>
            <ListItemText>Section 2</ListItemText>
            <ListItemIcon icon={openSection === 'section2' ? IconName.AngleUpSmall : IconName.AngleDownSmall} />
          </ListItem>
        </List>
        <Collapse isOpen={openSection === 'section2'}>
          <List>
            <ListItem indent={1}>
              <ListItemText>Item 2.1</ListItemText>
            </ListItem>
            <ListItem indent={1}>
              <ListItemText>Item 2.2</ListItemText>
            </ListItem>
            <ListItem indent={1}>
              <ListItemText>Item 2.3</ListItemText>
            </ListItem>
          </List>
        </Collapse>

        <List>
          <ListItem onClick={() => toggleSection('section3')}>
            <ListItemText>Section 3</ListItemText>
            <ListItemIcon icon={openSection === 'section3' ? IconName.AngleUpSmall : IconName.AngleDownSmall} />
          </ListItem>
        </List>
        <Collapse isOpen={openSection === 'section3'}>
          <List>
            <ListItem indent={1}>
              <ListItemText>Item 3.1</ListItemText>
            </ListItem>
            <ListItem indent={1}>
              <ListItemText>Item 3.2</ListItemText>
            </ListItem>
            <ListItem indent={1}>
              <ListItemText>Item 3.3</ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  },
};
