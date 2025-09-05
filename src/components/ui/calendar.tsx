import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function IconDemo() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      {/* Tarjeta 1 */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Button Display</h3>
        <p className="text-sm text-gray-500 mb-4">
          Selecciona una fecha usando el calendario con botón integrado.
        </p>
        <Calendar
          id="buttondisplay1"
          value={date}
          onChange={(e) => setDate(e.value as Date)}
          showIcon
          className="w-full"
          placeholder="Selecciona fecha"
        />
      </div>

      {/* Tarjeta 2 */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Icon Display</h3>
        <p className="text-sm text-gray-500 mb-4">
          Calendario con ícono visible para una experiencia más intuitiva.
        </p>
        <Calendar
          id="buttondisplay2"
          value={date}
          onChange={(e) => setDate(e.value as Date)}
          showIcon
          className="w-full"
          placeholder="Selecciona fecha"
        />
      </div>

      {/* Tarjeta 3 */}
      <div className="bg-red-500 shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Icon Template</h3>
        <p className="text-sm text-gray-500 mb-4">
          Muestra un calendario solo para seleccionar la hora con ícono personalizado.
        </p>
        <Calendar
          id="buttondisplay3"
          value={date}
          onChange={(e) => setDate(e.value as Date)}
          showIcon
          timeOnly
          className="w-full"
          placeholder="Selecciona hora"
        />
      </div>
    </div>
  );
}
