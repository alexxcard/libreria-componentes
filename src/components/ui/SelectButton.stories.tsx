import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MultipleDemo from "./SelectButton";

const meta: Meta<typeof MultipleDemo> = {
  title: "UI/SelectButton",
  component: MultipleDemo,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "hide", // 🔒 oculta el código en la pestaña Docs
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <MultipleDemo />,
};
