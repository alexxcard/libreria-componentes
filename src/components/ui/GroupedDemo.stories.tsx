import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import GroupedDemo from './GroupedDemo';

const meta: Meta<typeof GroupedDemo> = {
  title: 'UI/MenuDesplegable',
  component: GroupedDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto que aparece cuando no hay selección',
    },
    width: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del menú desplegable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ✅ Story por defecto
export const Default: Story = {
  args: {
    placeholder: 'Selecciona una ciudad',
    width: 'md',
  },
};

// ✅ Ejemplo con placeholder diferente
export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Elige tu ciudad favorita',
    width: 'md',
  },
};

// ✅ Ejemplo ancho pequeño
export const Small: Story = {
  args: {
    placeholder: 'Dropdown Pequeño',
    width: 'sm',
  },
};

// ✅ Ejemplo ancho grande
export const Large: Story = {
  args: {
    placeholder: 'Dropdown Grande',
    width: 'lg',
  },
};

// ✅ Story con múltiples instancias
export const MultipleDropdowns: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2 p-6">
      <GroupedDemo placeholder="Primero" width="sm" />
      <GroupedDemo placeholder="Segundo" width="lg" />
    </div>
  ),
};
