import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

interface GroupedDemoProps {
  placeholder?: string;
  width?: "sm" | "md" | "lg";
}

export default function GroupedDemo({
  placeholder = "Selecciona una opción",
  width = "md",
}: GroupedDemoProps) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const groupedCities = [
    {
      label: "Germany",
      code: "DE",
      items: [
        { label: "Berlin", value: "Berlin" },
        { label: "Frankfurt", value: "Frankfurt" },
        { label: "Hamburg", value: "Hamburg" },
        { label: "Munich", value: "Munich" },
      ],
    },
    {
      label: "USA",
      code: "US",
      items: [
        { label: "Chicago", value: "Chicago" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "New York", value: "New York" },
        { label: "San Francisco", value: "San Francisco" },
      ],
    },
    {
      label: "Japan",
      code: "JP",
      items: [
        { label: "Kyoto", value: "Kyoto" },
        { label: "Osaka", value: "Osaka" },
        { label: "Tokyo", value: "Tokyo" },
        { label: "Yokohama", value: "Yokohama" },
      ],
    },
  ];

  // Mapear el tamaño a clases de Tailwind
  const widthClass =
    width === "sm" ? "w-40" : width === "lg" ? "w-80" : "w-60";

  return (
    <div className="card flex justify-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={groupedCities}
        optionLabel="label"
        optionGroupLabel="label"
        optionGroupChildren="items"
        placeholder={placeholder}
        className={widthClass}
      />
    </div>
  );
}
