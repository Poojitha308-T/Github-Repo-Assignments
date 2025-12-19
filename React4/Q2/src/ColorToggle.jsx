import { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <div
        style={{
          padding: "20px",
          color: "white",
          backgroundColor: isRed ? "red" : "blue",
        }}
      >
        This div changes color
      </div>

      <button onClick={toggleColor} style={{ marginTop: "10px" }}>
        Toggle Color
      </button>
    </div>
  );
}
export default ColorToggle;
