import type { Meta, StoryObj } from '@storybook/react';
import MeterDemo from './PasswordDemo';

const meta: Meta<typeof MeterDemo> = {
  title: 'UI/Password',
  component: MeterDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story por defecto
export const Default: Story = {
  args: {},
};

// Story con placeholder personalizado
export const WithPlaceholder: Story = {
  render: () => (
    <div className="p-6 w-full md:w-96">
      <MeterDemo />
    </div>
  ),
};
