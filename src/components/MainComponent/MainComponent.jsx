import { useEffect, useState } from "react";
import "./style.css";
import Overlay from "../Overlay/Overlay";

const PLAYERS = ["cross", "circle"];

const COMBINACIONES_GANADORAS = [
  // Filas
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columnas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonales
  [0, 4, 8],
  [2, 4, 6],
];

function MainComponent() {
  const [cuadricula, setCuadricula] = useState(Array(9).fill(null)); // Inicializa la cuadrícula
  const [winner, setWinner] = useState(null);

  const verificarGanador = (cuadricula) => {
    for (let i = 0; i < COMBINACIONES_GANADORAS.length; i++) {
      const [a, b, c] = COMBINACIONES_GANADORAS[i];
      if (
        cuadricula[a] &&
        cuadricula[a] === cuadricula[b] &&
        cuadricula[a] === cuadricula[c]
      ) {
        return cuadricula[a]; // Retorna el jugador ganador
      }
    }
    return null; // No hay ganador aún
  };

  const handleClick = (index) => {
    if (cuadricula[index] === null && !winner) {
      const nuevoCuadricula = [...cuadricula];
      const jugadorActual = PLAYERS[nuevoCuadricula.filter(Boolean).length % 2];
      nuevoCuadricula[index] = jugadorActual;
      setCuadricula(nuevoCuadricula);

      const ganador = verificarGanador(nuevoCuadricula);
      if (ganador) {
        setWinner(ganador); // Establece el ganador si lo hay
      }
    }
  };

  const resetGame = () => {
    setWinner(null);
    setCuadricula(Array(9).fill(null));
  };

  return (
    <div className="Main">
      <div className="containerTitleContainer">
        <h2>TIC TAC TOE</h2>
        <div id="containerButtons">
          {cuadricula.map((jugador, index) => (
            <>
              <div
                key={index}
                className={`elemento ${jugador}`}
                onClick={() => handleClick(index)}
              ></div>
            </>
          ))}
          <div className="winnerText">
            {console.log("winner")}
            {console.log(winner)}
            {winner && (
              <Overlay
                winner={`${winner}`}
                onClose={resetGame}
              />
            )}
            {!winner && !cuadricula.includes(null) && (
              <Overlay message="¡Empate!" onClose={resetGame} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
