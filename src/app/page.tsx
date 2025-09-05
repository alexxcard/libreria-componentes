import { Button, Card, CardHeader, CardContent, CardFooter, Input, } from '@/components/ui';


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Librería de Componentes
          </h1>
          <p className="text-xl text-gray-600">
            Una colección de componentes reutilizables para Next.js con Tailwind CSS
          </p>
        </div>

        {/* Sección de Botones */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Botones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Variantes</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="primary" className="w-full">Primary</Button>
                <Button variant="secondary" className="w-full">Secondary</Button>
                <Button variant="outline" className="w-full">Outline</Button>
                <Button variant="ghost" className="w-full">Ghost</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Tamaños</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button size="sm" className="w-full">Small</Button>
                <Button size="md" className="w-full">Medium</Button>
                <Button size="lg" className="w-full">Large</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Estados</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">Normal</Button>
                <Button disabled className="w-full">Deshabilitado</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Con Iconos</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Agregar
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Descargar
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sección de Tarjetas */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Tarjetas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Tarjeta Simple</h3>
                <p className="text-sm text-gray-500">Una tarjeta básica con contenido</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Esta es una tarjeta simple que muestra información básica.
                </p>
              </CardContent>
              
              
              </Card>
           
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Con Acciones</h3>
                <p className="text-sm text-gray-500">Tarjeta con botones de acción</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Esta tarjeta incluye botones de acción en el pie de página.
                </p>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline" size="sm">Cancelar</Button>
                <Button size="sm">Confirmar</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Destacada</h3>
                <p className="text-sm text-gray-500">Tarjeta con estilo especial</p>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">Contenido destacado</p>
                  <p className="text-blue-600 text-sm mt-1">
                    Esta tarjeta tiene un contenido especial con fondo azul.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sección de Inputs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Campos de Entrada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Tipos de Input</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Texto</label>
                  <Input placeholder="Escribe algo aquí..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="correo@ejemplo.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contraseña</label>
                  <Input type="password" placeholder="Tu contraseña" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Número</label>
                  <Input type="number" placeholder="123" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Estados del Input</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Normal</label>
                  <Input placeholder="Campo normal" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Con valor</label>
                  <Input value="Texto de ejemplo" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Deshabilitado</label>
                  <Input value="Campo deshabilitado" disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Con error</label>
                  <Input placeholder="Campo con error" error />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sección de Información */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <h3 className="text-xl font-semibold">¿Cómo usar esta librería?</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Esta librería de componentes está construida con Next.js, TypeScript y Tailwind CSS.
                Todos los componentes son completamente personalizables y accesibles.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="primary">
                  Ver en Storybook
                </Button>
                <Button variant="outline">
                  Documentación
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
