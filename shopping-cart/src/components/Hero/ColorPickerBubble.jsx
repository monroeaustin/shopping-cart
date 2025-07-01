import React, { useState } from "react";

const colors = [
  { name: "orange", hex: "#D8751E" },
  { name: "teal", hex: "#00CFC3" },
  { name: "gray", hex: "#D3D3D3" },
];

function ColorPickerBubble({ onSelect }) {
  const [selectedColor, setSelectedColor] = useState("orange");

  const handlePick = (color) => {
    setSelectedColor(color.name);
    if (onSelect) onSelect(color.name);
  };

  return (
    <div
      className="absolute w-[112px] h-[137px] bottom-[-8%] left-[16%] bg-no-repeat bg-center bg-contain"
      style={{ backgroundImage: "url('/Picker.svg')" }}
    >
      <div className="flex justify-center absolute top-[40%] left-1/2 -translate-x-1/2 space-x-2">
        {colors.map((color) => (
          <div
            key={color.name}
            onClick={() => handlePick(color)}
            className={`w-5 h-5 rounded-full cursor-pointer border-2 transition-all duration-150 ${
              selectedColor === color.name ? "border-white scale-110" : "border-transparent"
            }`}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPickerBubble;
