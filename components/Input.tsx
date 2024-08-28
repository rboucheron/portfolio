import { Result } from "postcss";
import React, { useState } from "react";

const Input = ({
  label,
  type,
  result,
  placeHolder,
}: {
  label: string;
  type: "text" | "password" | "email";
  placeHolder: string;
  result: (Result: string) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    result(value);
  };
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="border border-[#343a40] appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none "
        id={label}
        type={type}
        placeholder={placeHolder}
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
