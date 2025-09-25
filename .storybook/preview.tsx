import { Preview } from '@storybook/react';
import React from 'react';
import { DSThemeContextProvider } from '../src/context/ThemeContext';
import './main.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Foundations', 'Basics', 'Buttons', ['Button', 'MultiButton']],
      },
    },
  },

  decorators: [
    (Story) => (
      <DSThemeContextProvider>
        <Story />
      </DSThemeContextProvider>
    ),
  ],

  tags: ['autodocs'],
};

export default preview;
