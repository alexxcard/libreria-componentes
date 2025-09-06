// .storybook/preview.ts
import type { Preview } from "@storybook/nextjs-vite";

// 👇 importa tus estilos globales
import "../src/styles/globals.css"; // tu Tailwind
import "primereact/resources/themes/lara-light-blue/theme.css"; // tema PrimeReact
import "primereact/resources/primereact.min.css"; // core de PrimeReact
import "primeicons/primeicons.css"; // íconos de PrimeReact

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
