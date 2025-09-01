import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Botón Primario',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Botón Secundario',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Botón Outline',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Botón Ghost',
    variant: 'ghost',
  },
};

export const Small: Story = {
  args: {
    children: 'Botón Pequeño',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Botón Grande',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Botón Deshabilitado',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
