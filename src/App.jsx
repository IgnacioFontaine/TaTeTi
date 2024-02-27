import { useState } from 'react';
import './App.css'

const TURNOS = {
  X: "x",
  O:"o"
}

const tablero = Array(9).fill(null);




const Square = ({ children, isSelected, updateBoard, index, }) => {

  const className = `square ${isSelected ? 'is-selected' : ''} `
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div
      className={className}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNOS.X);

  const updateBoard = (index) => {
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);


    const newTurn = turn === TURNOS.X ? TURNOS.O : TURNOS.X;
    setTurn(newTurn);
  }

  return (
    <>
      <div className='board'>
        <h1>Ta Te Ti</h1>
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
      </div>
    </>
  )
}

export default App
