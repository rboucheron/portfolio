import React, { useState } from "react";

const Textarea = ({
  label,
  result,
}: {
  label: string;
  result: (Result: string) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);

  // Handle change for textarea
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);  // Update state
    result(value);  // Send value to parent component via result function
  };

  return (
    <div className="mb-10 w-3/4 m-auto">
      {(isFocus || inputValue !== "") && (
        <label
          className="block text-[#2f2f2f] dark:text-[#fffbf9] text-sm font-normal mb-1"
          htmlFor={label}
        >
          {label}
        </label>
      )}

      <textarea
        className={`bg-[#ff6d0a] ${
          isFocus
            ? "shadow-2xl dark:shadow-[#fffbf9e5] shadow-[#2f2f2f92] placeholder-[#ff6d0a]"
            : ""
        } rounded-md appearance-none border border-[#2f2f2f7e] dark:border-[#fffbf9bd] placeholder:text-sm w-full p-1.5 dark:text-[#2f2f2f] placeholder-[#fffbf9] text-[#fffbf9] leading-tight focus:outline-none h-28`} // Adjust height here
        id={label}
        placeholder={label}
        value={inputValue}  
        onChange={handleChange}  
        onFocus={() => setIsFocus(true)}  
        onBlur={() => setIsFocus(false)} 
      ></textarea>
    </div>
  );
};

export default Textarea;
