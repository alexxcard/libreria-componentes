import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "./navigation-menu";

const meta: Meta<typeof NavigationMenu> = {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Item Productos */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] bg-white shadow rounded-md">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-gray-200"
                  >
                    💻 Laptops
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-gray-200"
                  >
                    🎧 Accesorios
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Item Servicios */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] bg-white shadow rounded-md">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-gray-200"
                  >
                    🛠️ Mantenimiento
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-gray-200"
                  >
                    📞 Soporte Técnico
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* 👇 CLAVE: Aquí sí renderiza el contenido */}
      <NavigationMenuViewport />
    </NavigationMenu>
  ),
};