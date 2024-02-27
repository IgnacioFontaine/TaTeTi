import { useState } from 'react';
import confetti from "canvas-confetti";
import './App.css'

import { Square } from './assets/Components/square.jsx';

import { WINNER_COMBOS, TURNOS } from './Constants/constants.jsx';

const tablero = Array(9).fill(null);

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNOS.X);

  //null = no hay ganador, false = empate
  const [winner, setWinner] = useState(null);

  const checkWninner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;

      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        //Ganador
        return boardToCheck[a]
      }
    }
    //No hubo ganador
    return null
  }

  //Chequear juego terminado
  const checkEndGame = (newBoard) => {
    return newBoard.every(square => square != null);
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //Modificar turno
    const newTurn = turn === TURNOS.X ? TURNOS.O : TURNOS.X;
    setTurn(newTurn);

    //Chequeo ganador
    const newWinner = checkWninner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      //Empate
      setWinner(false);
    }
  }

  //Resetear juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNOS.X);
    setWinner(null);
  }
  

  return (
    <>
      <div className='board'>
        <h1>Ta Te Ti</h1>
        <button onClick={resetGame}>Reset</button>
        <section className='game'>
          {tablero.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
                </Square>
            )
          })}
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNOS.X}> {TURNOS.X} </Square>
          <Square isSelected={turn === TURNOS.O}> {TURNOS.O} </Square>
        </section>
        {
          winner != null && (
            <section className='winner'>
              <div className='text' >
                <h2>
                  {winner === false
                    ? 'Empate'
                    : 'Ganó:'
                }
                </h2>
                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Reiniciar</button>
                </footer>
              </div>
            </section>
          )
        }
      </div>
    </>
  )
}

export default App
