import React from "react";
import { Sun, Moon} from "lucide-react";
import { useState } from "react";

function ToggleMode(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <button onClick={toggleMode} className="navelement">
      {isDarkMode ? <Moon color="#f66d0d" /> : <Sun color="#f66d0d" />}
    </button>
  );
}

export default ToggleMode;
