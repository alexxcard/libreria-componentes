import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
  ChartConfig,
} from "./chart"

// 1️⃣ Configuración de Storybook
const meta: Meta<typeof ChartContainer> = {
  title: "Components/Chart",
  component: ChartContainer,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f9fafb" },
        { name: "dark", value: "#111827" },
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof ChartContainer>

// 2️⃣ Datos de ejemplo
const data = [
  { date: "2025-01-01", ventas: 400, gastos: 240 },
  { date: "2025-01-02", ventas: 300, gastos: 139 },
  { date: "2025-01-03", ventas: 200, gastos: 980 },
  { date: "2025-01-04", ventas: 278, gastos: 390 },
]

// 3️⃣ Configuración de colores y labels
const chartConfig: ChartConfig = {
  ventas: { label: "Ventas", color: "var(--chart-1)" },
  gastos: { label: "Gastos", color: "var(--chart-2)" },
}

// 4️⃣ Story centrada y funcional
export const Default: Story = {
  render: () => (
    <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
        {/* ChartContainer ya incluye ResponsiveContainer */}
        <ChartContainer config={chartConfig} style={{ width: "100%", height: 400 }}>
          <BarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis dataKey="date" stroke="var(--foreground)" />
            <YAxis stroke="var(--foreground)" />
            <Bar dataKey="ventas" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="gastos" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
            <ChartTooltipContent />
            <ChartLegendContent />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  ),
}
