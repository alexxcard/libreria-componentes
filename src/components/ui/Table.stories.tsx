import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { DataTable } from "@/app/pagos/data-table"
import { columns, payments } from "@/app/pagos/columns"

const meta: Meta<typeof DataTable> = {
  title: "UI/DataTable",
  component: DataTable,
}

export default meta
type Story = StoryObj<typeof DataTable>

export const Default: Story = {
  render: () => <DataTable columns={columns} data={payments} />,
}
