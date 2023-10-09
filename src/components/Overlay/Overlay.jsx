import React from "react";
import "./style.css";

function Overlay({ message, winner, onClose }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        {winner && (
          <>
            <h2>{`¡El ganador es ${winner === "cross" ? "X" : "O"}!`}</h2>
            <button onClick={onClose}>Cerrar</button>
          </>
        )}

        {!winner && (
          <>
            <h2>{message}</h2>
            <button onClick={onClose}>Cerrar</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Overlay;
