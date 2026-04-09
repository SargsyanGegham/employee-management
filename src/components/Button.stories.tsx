import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';


export const ActionsData = {
  onClick: () => {},
};

const meta = {
  component: Button,
  title: 'Components/Button', // Changed from 'Task' to more appropriate 'Components/Button'
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
    children: 'Button', // Add default children text
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default button story
export const Default: Story = {
  args: {
    children: 'Default Button',
    color: 'primary',
    variant: 'contained',
    size: 'medium',
  },
};

// Secondary button variant
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    color: 'secondary',
    variant: 'contained',
  },
};

// Outlined button variant
export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
    color: 'primary',
  },
};

// Text button variant
export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
    color: 'primary',
  },
};

// Small button
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

// Large button
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

// Error button
export const Error: Story = {
  args: {
    children: 'Error Button',
    color: 'error',
  },
};

// Success button
export const Success: Story = {
  args: {
    children: 'Success Button',
    color: 'success',
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

// Full width button
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

// Custom onClick example
export const WithCustomClick: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};