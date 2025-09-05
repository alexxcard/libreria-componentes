import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ToggleButton from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "UI/ToggleButton",
  component: ToggleButton,
  parameters: {
    docs: {
      description: {
        component:
          "Componente ToggleButton de PrimeReact con estado interactivo.",
      },
    },
  },
  argTypes: {
    onLabel: { control: "text" },
    offLabel: { control: "text" },
    onIcon: { control: "text" },
    offIcon: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ✅ Playground interactivo (con controles en Docs)
export const Playground: Story = {
  args: {
    onLabel: "Encendido",
    offLabel: "Apagado",
    onIcon: "pi pi-check",
    offIcon: "pi pi-times",
    checked: false,
    disabled: false,
  },
};

// ✅ Estado inicial en ON
export const ToggledOn: Story = {
  args: {
    onLabel: "Encendido",
    offLabel: "Apagado",
    checked: true,
  },
};

// ✅ Ejemplo con varios estados (similar a AllStates del Input)
export const AllStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-2">Normal</label>
        <ToggleButton onLabel="Encendido" offLabel="Apagado" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Activo</label>
        <ToggleButton onLabel="Encendido" offLabel="Apagado" checked />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Deshabilitado</label>
        <ToggleButton onLabel="Encendido" offLabel="Apagado" disabled />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Activo + Deshabilitado
        </label>
        <ToggleButton
          onLabel="Encendido"
          offLabel="Apagado"
          checked
          disabled
        />
      </div>
    </div>
  ),
};
