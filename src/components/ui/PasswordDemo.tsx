import React, { useState } from "react";
import { Password } from "primereact/password";

interface PasswordDemoProps {
  placeholder?: string;
  width?: "sm" | "md" | "lg";
}

export default function PasswordDemo({
  placeholder = "Escribe tu contraseña",
  width = "md",
}: PasswordDemoProps) {
  const [value, setValue] = useState("");

  // Mapear el tamaño a clases de Tailwind
  const widthClass =
    width === "sm" ? "w-40" : width === "lg" ? "w-80" : "w-60";

  return (
    <div className="card flex justify-center p-6">
      <Password
        value={value}
        onChange={(e) => setValue(e.target.value)}
        toggleMask
        feedback
        placeholder={placeholder}
        className={widthClass}
      />
    </div>
  );
}
