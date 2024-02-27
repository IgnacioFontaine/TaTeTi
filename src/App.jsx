import { useState } from 'react';
import './App.css'

const TURNOS = {
  X: "x",
  O:"o"
}

const tablero = Array(9).fill(null);

const Square = ({ children, isSelected, updateBoard, index, }) => {
  const className = `square ${isSelected ? 'is-selected':''} `
  return (
    <div className={className}>
      {children}
    </div>
  )
}

function App() {

  const [board, setBoart] = useState(Array(9).fill(null));
  const [turns, setTurns] = useState(TURNOS.X);

  return (
    <>
      <div className='board'>
        <h1>Ta Te Ti</h1>
        <section className='game'>
          {tablero.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}>
                {board[index]}
                </Square>
            )
          })}
        </section>
        <section className='turns'>
          <Square isSelected={turns === TURNOS.X}> {TURNOS.X} </Square>
          <Square isSelected={turns === TURNOS.O}> {TURNOS.O} </Square>
        </section>
      </div>
    </>
  )
}

export default App
