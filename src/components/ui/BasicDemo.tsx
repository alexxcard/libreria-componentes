import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function BasicDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex justify-center p-6">
      <FloatLabel>
        <InputText
          id="username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-60"
        />
        <label htmlFor="username">Username</label>
      </FloatLabel>
    </div>
  );
}
