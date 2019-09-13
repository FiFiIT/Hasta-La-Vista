import React, { useState } from "react";
import "./Kort.css";

const Kort = ({ number, checked }) => {
  const mapping = {
    0: "green",
    1: "red"
  };

  const [bg, setBg] = useState({ color: mapping[checked], checked: checked });

  const handleClick = () => {
    if (bg.color === "green") {
      setBg({ color: "red", checked: 1 });
    } else {
      setBg({ color: "green", checked: 0 });
    }
  };

  return (
    <label>
      <div
        className="Kort"
        style={{ backgroundColor: bg.color }}
        onClick={handleClick}
      >
        {number}
      </div>
    </label>
  );
};

export default Kort;
