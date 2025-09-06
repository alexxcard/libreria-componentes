import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TablaDeDatos from "./tabladedatos"; // Usar solo el nombre, sin extensión

// Tipado de los productos
type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  inventoryStatus: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK";
};

const meta: Meta<typeof TablaDeDatos> = {
  title: "UI/Tabla de Datos",
  component: TablaDeDatos,
  parameters: {
    layout: "centered",
    docs: { canvas: { sourceState: "shown" } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TablaDeDatos>;

// Datos simulados
const mockProducts: Product[] = [
  { id: "1000", name: "Bamboo Watch", image: "bamboo-watch.jpg", price: 65, category: "Accessories", rating: 5, inventoryStatus: "INSTOCK" },
  { id: "1001", name: "Black Watch", image: "black-watch.jpg", price: 72, category: "Accessories", rating: 4, inventoryStatus: "LOWSTOCK" },
  { id: "1002", name: "Blue Band", image: "blue-band.jpg", price: 79, category: "Fitness", rating: 3, inventoryStatus: "OUTOFSTOCK" },
];

// Story por defecto: una sola tabla centrada
export const Default: Story = {
  args: {
    products: mockProducts,
  },
};

// Story con varias tablas: grid responsivo y estético
export const MultipleTables: Story = {
  render: () => (
    <div className="p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-lg p-6">
          <TablaDeDatos products={mockProducts} />
        </div>
      ))}
    </div>
  ),
};
