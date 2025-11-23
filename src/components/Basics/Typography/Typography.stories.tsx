import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import { TypographyType } from './types';
import { Color } from '../../../types';
import { palette } from '../../../context/ThemeContext/palette';

const descriptionStyle = {
  fontSize: '14px',
  marginTop: '8px',
  color: palette.gray7,
};

const meta: Meta<typeof Typography> = {
  title: 'Basics/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(TypographyType),
      description: 'Typography type ',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    color: {
      control: 'select',
      options: Object.values(Color),
      description: 'Semantic color',
      table: {
        defaultValue: { summary: 'neutral' },
      },
    },
    bold: {
      control: 'boolean',
      description: 'Make text bold (font-weight: 700)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    underline: {
      control: 'boolean',
      description: 'Add underline decoration',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    ellipsis: {
      control: 'boolean',
      description: 'Truncate with ellipsis (...) when text overflows',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Text content',
    },

  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

const sampleText = 'The quick brown fox jumps over the lazy dog.';

export const H1: Story = {
  args: {
    type: TypographyType.h1,
    children: sampleText,
  },
};

export const H1Bold: Story = {
  args: {
    type: TypographyType.h1,
    bold: true,
    children: sampleText,
  },
};

export const H2: Story = {
  args: {
    type: TypographyType.h2,
    children: sampleText,
  },
};

export const H2Bold: Story = {
  args: {
    type: TypographyType.h2,
    bold: true,
    children: sampleText,
  },
};

export const H3: Story = {
  args: {
    type: TypographyType.h3,
    children: sampleText,
  },
};

export const H3Bold: Story = {
  args: {
    type: TypographyType.h3,
    bold: true,
    children: sampleText,
  },
};

export const Title: Story = {
  args: {
    type: TypographyType.title,
    children: sampleText,
  },
};

export const TitleBold: Story = {
  args: {
    type: TypographyType.title,
    bold: true,
    children: sampleText,
  },
};

export const SubTitle: Story = {
  args: {
    type: TypographyType.subTitle,
    children: sampleText,
  },
};

export const SubTitleBold: Story = {
  args: {
    type: TypographyType.subTitle,
    bold: true,
    children: sampleText,
  },
};

export const LargeText: Story = {
  args: {
    type: TypographyType.largeText,
    children: sampleText,
  },
};

export const LargeTextBold: Story = {
  args: {
    type: TypographyType.largeText,
    bold: true,
    children: sampleText,
  },
};

export const Text: Story = {
  args: {
    type: TypographyType.text,
    children: sampleText,
  },
};

export const TextBold: Story = {
  args: {
    type: TypographyType.text,
    bold: true,
    children: sampleText,
  },
};

export const Caption: Story = {
  args: {
    type: TypographyType.caption,
    children: sampleText,
  },
};

export const CaptionBold: Story = {
  args: {
    type: TypographyType.caption,
    bold: true,
    children: sampleText,
  },
};

export const ColorSuccess: Story = {
  args: {
    type: TypographyType.text,
    color: Color.success,
    children: sampleText,
  },
};

export const ColorDestructive: Story = {
  args: {
    type: TypographyType.text,
    color: Color.destructive,
    children: sampleText,
  },
};

export const ColorWarning: Story = {
  args: {
    type: TypographyType.text,
    color: Color.warning,
    children: sampleText,
  },
};

export const ColorNeutral: Story = {
  args: {
    type: TypographyType.text,
    color: Color.neutral,
    children: sampleText,
  },
};

export const ColorInformation: Story = {
  args: {
    type: TypographyType.text,
    color: Color.information,
    children: sampleText,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <Typography type={TypographyType.title} bold color={Color.success}>
          Success - {sampleText}
        </Typography>
      </div>
      <div>
        <Typography type={TypographyType.title} bold color={Color.destructive}>
          Destructive - {sampleText}
        </Typography>
      </div>
      <div>
        <Typography type={TypographyType.title} bold color={Color.warning}>
          Warning - {sampleText}
        </Typography>
      </div>
      <div>
        <Typography type={TypographyType.title} bold color={Color.neutral}>
          Neutral (Default) - {sampleText}
        </Typography>
      </div>
      <div>
        <Typography type={TypographyType.title} bold color={Color.information}>
          Information - {sampleText}
        </Typography>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h2 style={{ color: palette.ocean8, marginBottom: '24px' }}>Sizes - Regular</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <Typography type={TypographyType.h1}>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              H1 - Font size: 32pt, Line Height: 38pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.h2}>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              H2 - Font size: 28pt, Line Height: 32pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.h3}>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              H3 - Font size: 24pt, Line Height: 28pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.title}>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              Title - Font size: 20pt, Line Height: 24pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.subTitle}>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              SubTitle - Font size: 18pt, Line Height: 24pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.largeText}>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              Large Text - Font size: 16pt, Line Height: 24pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.text}>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              Text - Font size: 14pt, Line Height: 20pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.caption}>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              Caption - Font size: 12pt, Line Height: 16pt
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ color: palette.ocean8, marginBottom: '24px' }}>Sizes - Bold</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <Typography type={TypographyType.h1} bold>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              H1 Bold - Font size: 32pt, Line Height: 38pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.h2} bold>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              H2 Bold - Font size: 28pt, Line Height: 32pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.h3} bold>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              H3 Bold - Font size: 24pt, Line Height: 28pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.title} bold>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              Title Bold - Font size: 20pt, Line Height: 24pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.subTitle} bold>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              SubTitle Bold - Font size: 18pt, Line Height: 24pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.largeText} bold>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              Large Text Bold - Font size: 16pt, Line Height: 24pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.text} bold>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              Text Bold - Font size: 14pt, Line Height: 20pt
            </div>
          </div>
          <div>
            <Typography type={TypographyType.caption} bold>
              {sampleText}
            </Typography>
            <div style={descriptionStyle}>
              Caption Bold - Font size: 12pt, Line Height: 16pt
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BoldProp: Story = {
  args: {
    type: TypographyType.text,
    bold: true,
    children: 'This text uses the bold prop',
  },
};

export const Underline: Story = {
  args: {
    type: TypographyType.text,
    underline: true,
    children: 'This text has an underline decoration',
  },
};

export const Ellipsis: Story = {
  render: () => (
    <div style={{ width: '300px', border: `1px solid ${palette.gray4}`, padding: '8px' }}>
      <Typography type={TypographyType.text} ellipsis>
        This is a very long text that will be truncated with an ellipsis when it exceeds the container width
      </Typography>
    </div>
  ),
};

export const CombinedModifiers: Story = {
  args: {
    type: TypographyType.title,
    bold: true,
    underline: true,
    color: Color.information,
    children: 'Bold, underlined, colored title',
  },
};

export const AllModifiers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ color: palette.ocean8, marginBottom: '12px' }}>Bold Prop</h3>
        <Typography type={TypographyType.text} bold>
          Regular text type with bold prop
        </Typography>
      </div>

      <div>
        <h3 style={{ color: palette.ocean8, marginBottom: '12px' }}>Underline</h3>
        <Typography type={TypographyType.text} underline>
          Text with underline decoration
        </Typography>
      </div>

      <div>
        <h3 style={{ color: palette.ocean8, marginBottom: '12px' }}>Ellipsis</h3>
        <div style={{ width: '250px', border: `1px dashed ${palette.gray4}`, padding: '8px' }}>
          <Typography type={TypographyType.text} ellipsis>
            This is a very long text that demonstrates ellipsis truncation when content overflows
          </Typography>
        </div>
      </div>

      <div>
        <h3 style={{ color: palette.ocean8, marginBottom: '12px' }}>Combined</h3>
        <Typography type={TypographyType.title} bold underline color={Color.success}>
          Bold + Underline + Color
        </Typography>
      </div>
    </div>
  ),
};
