import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import IconDemo from './calendar';
import { Calendar } from 'primereact/calendar';

const meta: Meta<typeof IconDemo> = {
  title: 'UI/Calendar',
  component: IconDemo,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'hide', // Oculta el código en Docs
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story Default con layout personalizado
export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);

    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
        {/* Tarjeta 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Button Display</h3>
          <p className="text-sm text-gray-500 mb-4">
            Selecciona una fecha usando el calendario con botón integrado.
          </p>
          <Calendar
            id="buttondisplay1"
            value={date}
            onChange={(e) => setDate(e.value as Date)}
            showIcon
            className="w-full"
            placeholder="Selecciona fecha"
          />
        </div>
        {/* Puedes duplicar más tarjetas aquí si quieres */}
      </div>
    );
  },
};

// Story CustomExample simple
export const CustomExample: Story = {
  render: () => (
    <div className="p-4 border rounded bg-gray-100">
      <IconDemo />
    </div>
  ),
};
