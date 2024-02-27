import { useState } from 'react';
import confetti from "canvas-confetti";
import './App.css'

import { Square } from './Components/square.jsx';

import { TURNOS } from './Constants/constants.jsx';
import { checkWninner } from './Logic/board.jsx';
import { Winner } from './Components/winner.jsx';


function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNOS.X);

  //null = no hay ganador, false = empate
  const [winner, setWinner] = useState(null);

  

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
          {board.map((_, index) => {
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
        <Winner winner={winner} resetGame={resetGame} />
      </div>
    </>
  )
}

export default App
