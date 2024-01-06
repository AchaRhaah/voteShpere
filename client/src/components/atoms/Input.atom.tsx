// Input.tsx
import { useState } from "react";

interface InputProps {
  label: string;
  desc?: string;
  value?: string;
  disabled?: boolean;
  minDate?: string;
  type?: "Email" | "password" | "text" | "date";
  onChange?: (value: string) => void;
}

export default function Input({
  label,
  type = "text",
  desc = label,
  value,
  onChange,
  minDate,
  disabled = false,
}: InputProps) {
  const [min, setMin] = useState(minDate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="relative w-full my-3 text-sm flex flex-col ">
      <label className="font-medium mb-1">{label}</label>
      <input
        onChange={handleChange}
        placeholder={desc}
        type={type}
        value={value}
        min={min}
        disabled={disabled}
        className="border rounded-lg p-2 outline-none"
      />
    </div>
  );
}
