import type { Meta, StoryObj } from '@storybook/react';
import Card, { CardHeader, CardContent, CardFooter } from './Card';
import Button from './Button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <h3 className="text-lg font-semibold">Título de la Tarjeta</h3>
        <p className="text-sm text-gray-500">Descripción de la tarjeta</p>
      </CardHeader>
      <CardContent>
        <p>Este es el contenido de la tarjeta. Puede contener cualquier tipo de contenido.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">Acción</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardContent>
        <p>Una tarjeta simple con solo contenido.</p>
      </CardContent>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <h3 className="text-xl font-bold">Tarjeta con Encabezado</h3>
      </CardHeader>
      <CardContent>
        <p>Esta tarjeta tiene un encabezado prominente.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>
        <p>Esta tarjeta tiene un pie de página con botones.</p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button variant="primary">Confirmar</Button>
      </CardFooter>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Tarjeta 1</h3>
        </CardHeader>
        <CardContent>
          <p>Contenido de la primera tarjeta.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Tarjeta 2</h3>
        </CardHeader>
        <CardContent>
          <p>Contenido de la segunda tarjeta.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Tarjeta 3</h3>
        </CardHeader>
        <CardContent>
          <p>Contenido de la tercera tarjeta.</p>
        </CardContent>
      </Card>
    </div>
  ),
};
