import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BasicDemo from "./BasicDemo";

const meta: Meta<typeof BasicDemo> = {
  title: "UI/InputText",
  component: BasicDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {    
  },
};

// Ejemplo con ancho personalizado
export const WideInput: Story = {
  render: () => (
    <div className="p-6 w-full md:w-80">
      <BasicDemo />
    </div>
  ),
};
