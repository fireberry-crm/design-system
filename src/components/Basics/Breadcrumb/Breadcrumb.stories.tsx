import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './Breadcrumb';
import { DSThemeContextProvider } from '../../../context/ThemeContext';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Basics/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items with label and optional href/onClick',
    },
    onItemClick: {
      action: 'itemClicked',
      description: 'Callback fired when an item is clicked. Receives the full item object and index.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
    ],
  },
};


export const TwoItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
    ],
  },
};

export const ThreeItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Details', href: '#' },
    ],
  },
};

export const MultipleItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Subcategory', href: '#' },
      { label: 'Product', href: '#' },
      { label: 'Details', href: '#' },
    ],
  },
};


export const WithOnItemClick: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Home2' },
      { label: 'Home3' },

    ],
    onItemClick: (item, index) => {
      console.log('Item clicked:', { item, index });
      alert(`Item clicked!\nLabel: ${item.label}\nIndex: ${index}\nHref: ${item.href || 'none'}`);
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px' }}>Default</h3>
        <Breadcrumb
          items={[
            { label: 'Text', href: '#' },
          ]}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Hover (Hover over first item)</h3>
        <Breadcrumb
          items={[
            { label: 'Text', href: '#' },
            { label: 'Text', href: '#' },
          ]}
        />
      </div>



      <div>
        <h3 style={{ marginBottom: '12px' }}>Selected (Last item is current page)</h3>
        <Breadcrumb
          items={[
            { label: 'Text', href: '#' },
            { label: 'Text', href: '#' },
            { label: 'Text' },
          ]}
        />
      </div>
    </div>
  ),
};

export const HebrewRTL: Story = {
  render: () => (
    <DSThemeContextProvider isRtl={true}>
      <div style={{ direction: 'rtl' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h3 style={{ marginBottom: '12px' }}>עברית - דף בית</h3>
            <Breadcrumb
              items={[
                { label: 'דף הבית', href: '#' },
              ]}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '12px' }}>עברית - שני פריטים</h3>
            <Breadcrumb
              items={[
                { label: 'דף הבית', href: '#' },
                { label: 'מוצרים', href: '#' },
              ]}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '12px' }}>עברית - מסלול ניווט מלא</h3>
            <Breadcrumb
              items={[
                { label: 'דף הבית', href: '#' },
                { label: 'קטגוריה', href: '#' },
                { label: 'תת קטגוריה', href: '#' },
                { label: 'מוצר', href: '#' },
                { label: 'פרטים' },
              ]}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: '12px' }}>עברית - הגדרות מערכת</h3>
            <Breadcrumb
              items={[
                { label: 'ראשי', href: '#' },
                { label: 'הגדרות', href: '#' },
                { label: 'משתמשים', href: '#' },
                { label: 'הרשאות' },
              ]}
            />
          </div>
        </div>
      </div>
    </DSThemeContextProvider>
  ),
};
