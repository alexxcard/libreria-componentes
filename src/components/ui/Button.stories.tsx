import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ToggleButton } from 'primereact/togglebutton';

const meta: Meta<typeof ToggleButton> = {
  title: 'UI/ToggleButton',
  component: ToggleButton,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#f3f4f6',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Componente ToggleButton de PrimeReact con estado invalid.',
      },
      source: {
        type: 'dynamic',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

// Historia por defecto usando args
export const Default: Story = {
  args: {
    checked: false,
    onIcon: 'pi pi-check',
    offIcon: 'pi pi-times',
  },
  render: (args) => {
    // Componente inline que maneja el estado local
    const Wrapper = () => {
      const [checked, setChecked] = useState(args.checked);
      return (
        <ToggleButton
          {...args}
          checked={checked}
          onChange={(e) => setChecked(e.value)}
          invalid
          className="w-8rem"
        />
      );
    };
    return <Wrapper />;
  },
};
