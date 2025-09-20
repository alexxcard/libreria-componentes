import type { Meta, StoryObj } from "@storybook/react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar"

const meta: Meta<typeof Menubar> = {
  title: "Components/Menubar",
  component: Menubar,
  tags: ["autodocs"],
}
export default meta

type Story = StoryObj<typeof Menubar>

export const DefaultStory: Story = {
  name: "Default",
  render: () => (
    <div className="flex h-screen w-full items-center justify-center">
      <Menubar>
        {/* Archivo */}
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Nuevo</MenubarItem>
            <MenubarItem>Abrir</MenubarItem>
            <MenubarItem>Guardar</MenubarItem>
            <MenubarItem>Exportar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Editar */}
        <MenubarMenu>
          <MenubarTrigger>Editar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Copiar</MenubarItem>
            <MenubarItem>Pegar</MenubarItem>
            <MenubarItem>Cortar</MenubarItem>
            <MenubarItem>Deshacer</MenubarItem>
            <MenubarItem>Rehacer</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Perfiles */}
        <MenubarMenu>
          <MenubarTrigger>Perfiles</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Ver perfil</MenubarItem>
            <MenubarItem>Editar perfil</MenubarItem>
            <MenubarItem>Configuración</MenubarItem>
            <MenubarItem>Cerrar sesión</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Vista */}
        <MenubarMenu>
          <MenubarTrigger>Vista</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Pantalla completa</MenubarItem>
            <MenubarItem>Zoom in</MenubarItem>
            <MenubarItem>Zoom out</MenubarItem>
            <MenubarItem>Modo oscuro</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
}
