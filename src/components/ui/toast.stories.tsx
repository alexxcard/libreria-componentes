// toast.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import SeverityDemo from "./toast";

const meta: Meta<typeof SeverityDemo> = {
  title: "UI/Toast",
  component: SeverityDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
El componente Toast permite mostrar notificaciones emergentes con diferentes niveles de severidad.
Gracias a los **controles de Storybook**, puedes personalizar la severidad, el resumen, el detalle y 
el color del botón en tiempo real.
        `,
      },
    },
  },
  argTypes: {
    severity: {
      control: "select",
      options: ["success", "info", "warn", "error", "secondary", "contrast"],
      description: "Nivel de severidad del Toast",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "success" },
      },
    },
    summary: {
      control: "text",
      description: "Título del Toast",
    },
    detail: {
      control: "text",
      description: "Mensaje que aparece en el Toast",
    },
    color: {
      control: "color",
      description: "Color personalizado para el botón",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SeverityDemo>;

export const Default: Story = {
  args: {
    severity: "error",
    summary: "error\n",
    detail: "",
    color: "#000000",
  },
};
