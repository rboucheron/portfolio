import React from "react";
import { useState, useEffect } from "react";

function Title(props) {
  const [RotateLetter, setRotateLetter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotateLetter(window.scrollY);

    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="title">
      <h1>
        <span style={{ transform: `rotate(${RotateLetter}deg)` }}>R</span>
        <span style={{ transform: `rotate(-${RotateLetter}deg)` }}>a</span>
        <span style={{ transform: `rotate(${RotateLetter}deg)` }}>p</span>
        <span style={{ transform: `rotate(-${RotateLetter}deg)` }}>h</span>
        <span style={{ transform: `rotate(${RotateLetter}deg)` }}>a</span>
        <span style={{ transform: `rotate(-${RotateLetter}deg)` }}>ë</span>
        <span style={{ transform: `rotate(${RotateLetter}deg)` }}>l</span> &nbsp;
        <span style={{ transform: `rotate(-${RotateLetter}deg)` }}>B</span>
        <span style={{ transform: `rotate(${RotateLetter}deg)` }}>o</span>
        <span style={{ transform: `rotate(-${RotateLetter}deg)` }}>u</span>
        <span style={{ transform: `rotate(${RotateLetter}deg)` }}>c</span>
        <span style={{ transform: `rotate(-${RotateLetter}deg)` }}>h</span>
        <span style={{ transform: `rotate(${RotateLetter}deg)` }}>e</span>
        <span style={{ transform: `rotate(-${RotateLetter}deg)` }}>r</span>
        <span style={{ transform: `rotate(${RotateLetter}deg)` }}>o</span>
        <span style={{ transform: `rotate(-${RotateLetter}deg)` }}>n</span>
      </h1>
      <p>Je suis développeur fullstack junior, passionné par l'informatique.</p>
    </div>
  );
}

export default Title;
