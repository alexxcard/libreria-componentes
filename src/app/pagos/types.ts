export type Pago = {
  id: string
  cantidad: number
  estado: "pendiente" | "procesamiento" | "éxito" | "falló"
  email: string
}

export const datos: Pago[] = [
  { id: "m5gr84i9", cantidad: 316, estado: "éxito", email: "ken99@example.com" },
  { id: "3u1reuv4", cantidad: 242, estado: "éxito", email: "Abe45@example.com" },
  { id: "derv1ws0", cantidad: 837, estado: "procesamiento", email: "Monserrat44@example.com" },
  { id: "5kma53ae", cantidad: 874, estado: "éxito", email: "Silas22@example.com" },
  { id: "bhqecj4p", cantidad: 721, estado: "falló", email: "carmella@example.com" },
]
