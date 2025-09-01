import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Escribe algo aquí...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Texto de ejemplo',
    placeholder: 'Escribe algo aquí...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'correo@ejemplo.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Contraseña',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Ingresa un número',
  },
};

export const Disabled: Story = {
  args: {
    value: 'Campo deshabilitado',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Campo con error',
    error: true,
  },
};

export const Required: Story = {
  args: {
    placeholder: 'Campo requerido',
    required: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">Normal</label>
        <Input placeholder="Campo normal" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Con valor</label>
        <Input value="Texto de ejemplo" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Deshabilitado</label>
        <Input value="Campo deshabilitado" disabled />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Con error</label>
        <Input placeholder="Campo con error" error />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Requerido</label>
        <Input placeholder="Campo requerido" required />
      </div>
    </div>
  ),
};

export const DifferentTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">Texto</label>
        <Input type="text" placeholder="Texto normal" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <Input type="email" placeholder="correo@ejemplo.com" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Contraseña</label>
        <Input type="password" placeholder="Contraseña" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Número</label>
        <Input type="number" placeholder="123" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Teléfono</label>
        <Input type="tel" placeholder="+1 234 567 890" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">URL</label>
        <Input type="url" placeholder="https://ejemplo.com" />
      </div>
    </div>
  ),
};
