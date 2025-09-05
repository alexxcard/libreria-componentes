import React, { useState } from "react";
import { ToggleButton as PrimeToggleButton } from "primereact/togglebutton";

interface Props {
  onLabel?: string;
  offLabel?: string;
  onIcon?: string;
  offIcon?: string;
  checked?: boolean;
  disabled?: boolean;
}

const ToggleButton: React.FC<Props> = ({
  onLabel = "On",
  offLabel = "Off",
  onIcon = "pi pi-check",
  offIcon = "pi pi-times",
  checked,
  disabled = false,
}) => {
  const [value, setValue] = useState<boolean>(checked ?? false);

  return (
    <PrimeToggleButton
      onLabel={onLabel}
      offLabel={offLabel}
      onIcon={onIcon}
      offIcon={offIcon}
      checked={value}
      onChange={(e) => setValue(e.value)}
      disabled={disabled}
    />
  );
};

export default ToggleButton;
