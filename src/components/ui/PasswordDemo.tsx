import React, { useState } from "react";
import { Password } from "primereact/password";

interface PasswordDemoProps {
  placeholder?: string;
  width?: "sm" | "md" | "lg";
}

export default function PasswordDemo({
  placeholder = "Escribe tu contraseña",
  width = "lg",
}: PasswordDemoProps) {
  const [value, setValue] = useState("");

  const widthClass =
    width === "sm" ? "w-40" : width === "lg" ? "w-80" : "w-60";

  return (
      <Password
        value={value}
        onChange={(e) => setValue(e.target.value)}
        toggleMask
        feedback
        placeholder={placeholder}
        className={`${widthClass}`}
        inputClassName="w-full"
        panelClassName=" text-black font-bold text-center border border-[#7B8F90] rounded-xl p-2"
        weakLabel="Débil"
        mediumLabel="Media"
        strongLabel="Fuerte"
        promptLabel="Ingrese" 
      />
   
  );
}
