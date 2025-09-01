# Librería de Componentes - Next.js + Tailwind CSS + Storybook

Una librería de componentes moderna y reutilizable construida con Next.js, TypeScript, Tailwind CSS y Storybook.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Storybook** para documentación y desarrollo de componentes
- **Componentes accesibles** siguiendo las mejores prácticas
- **Totalmente personalizable** con clases de Tailwind
- **Responsive design** out of the box

## 📦 Componentes Disponibles

### Button
- Múltiples variantes: `primary`, `secondary`, `outline`, `ghost`
- Diferentes tamaños: `sm`, `md`, `lg`
- Estados: normal, deshabilitado
- Soporte para iconos

### Card
- Componente modular con `CardHeader`, `CardContent`, `CardFooter`
- Diseño flexible y responsive
- Fácil personalización

### Input
- Múltiples tipos: `text`, `email`, `password`, `number`, `tel`, `url`
- Estados: normal, con error, deshabilitado, requerido
- Validación integrada

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd storybook
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📚 Storybook

Para ver la documentación interactiva de los componentes:

```bash
npm run storybook
```

Esto abrirá Storybook en [http://localhost:6006](http://localhost:6006).

## 🎨 Uso de Componentes

### Importación

```tsx
import { Button, Card, CardHeader, CardContent, CardFooter, Input } from '@/components/ui';
```

### Ejemplos de Uso

#### Button
```tsx
// Botón primario
<Button variant="primary">Click me</Button>

// Botón con icono
<Button variant="outline">
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
  Agregar
</Button>

// Botón deshabilitado
<Button disabled>No disponible</Button>
```

#### Card
```tsx
<Card className="w-[350px]">
  <CardHeader>
    <h3 className="text-lg font-semibold">Título</h3>
    <p className="text-sm text-gray-500">Descripción</p>
  </CardHeader>
  <CardContent>
    <p>Contenido de la tarjeta</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Acción</Button>
  </CardFooter>
</Card>
```

#### Input
```tsx
// Input básico
<Input placeholder="Escribe algo..." />

// Input con error
<Input placeholder="Campo con error" error />

// Input deshabilitado
<Input value="No editable" disabled />

// Input requerido
<Input placeholder="Campo requerido" required />
```

## 🎯 Personalización

Todos los componentes aceptan una prop `className` para personalización adicional:

```tsx
<Button 
  variant="primary" 
  className="bg-red-500 hover:bg-red-600 text-white"
>
  Botón Personalizado
</Button>
```

## 🧪 Testing

El proyecto incluye configuración para testing con Vitest:

```bash
# Ejecutar tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Generar reporte de cobertura
npm run test:coverage
```

## 📁 Estructura del Proyecto

```
src/
├── app/                 # Next.js App Router
├── components/
│   └── ui/             # Componentes de la librería
│       ├── Button.tsx
│       ├── Button.stories.tsx
│       ├── Card.tsx
│       ├── Card.stories.tsx
│       ├── Input.tsx
│       ├── Input.stories.tsx
│       └── index.ts    # Exportaciones
└── styles/             # Estilos globales
```

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo Next.js
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run storybook` - Iniciar Storybook
- `npm run build-storybook` - Build de Storybook
- `npm test` - Ejecutar tests
- `npm run lint` - Ejecutar ESLint

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en el repositorio.

---

Desarrollado con ❤️ usando Next.js, TypeScript, Tailwind CSS y Storybook.
