import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function togglePanel() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="container">
      <button onClick={togglePanel}>
        {isOpen ? "Zapri panel" : "Odpri panel"}
      </button>

      {isOpen && (
        <div className="panel">
          <h2>Panel</h2>
          <p>Ta panel obstaja samo, ko je isOpen = true.</p>
        </div>
      )}
    </div>
  );
}
