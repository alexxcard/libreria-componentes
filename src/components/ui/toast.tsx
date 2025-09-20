// toast.tsx
import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function SeverityDemo() {
  // Referencia para poder mostrar los mensajes Toast
  const toast = useRef<Toast | null>(null);

  // Función para mostrar el Toast con diferentes configuraciones
  const mostrarToast = (
    severidad: "success" | "info" | "warn" | "error" | "secondary" | "contrast",
    titulo: string,
    mensaje: string
  ) => {
    toast.current?.show({ severity: severidad, summary: titulo, detail: mensaje, life: 3000 });
  };

  return (
    <div className="card flex justify-content-center">
      {/* Contenedor de los mensajes emergentes */}
      <Toast ref={toast} />

      {/* Botones para disparar diferentes tipos de notificaciones */}
      <div className="flex flex-wrap gap-2">
        <Button
          label="Éxito"
          style={{ backgroundColor: "#22c55e", border: "none" }} // verde
          onClick={() => mostrarToast("success", "Éxito", "Operación completada correctamente")}
        />

        <Button
          label="Información"
          style={{ backgroundColor: "#3b82f6", border: "none" }} // azul
          onClick={() => mostrarToast("info", "Información", "Este es un mensaje informativo")}
        />

        <Button
          label="Advertencia"
          style={{ backgroundColor: "#facc15", border: "none", color: "#000" }} // amarillo
          onClick={() => mostrarToast("warn", "Advertencia", "Por favor revisa esta acción")}
        />

        <Button
          label="Error"
          style={{ backgroundColor: "#66030D", border: "none" }} // rojo
          onClick={() => mostrarToast("error", "Error", "Ocurrió un problema inesperado")}
        />

        <Button
          label="Secundario"
          style={{ backgroundColor: "#6b7280", border: "none" }} // gris
          onClick={() => mostrarToast("secondary", "Secundario", "Este es un mensaje secundario")}
        />

        <Button
          label="Contraste"
          style={{ backgroundColor: "#000", color: "#fff", border: "none" }} // negro contraste
          onClick={() => mostrarToast("contrast", "Contraste", "Mensaje con alto contraste")}
        />
      </div>
    </div>
  );
}
