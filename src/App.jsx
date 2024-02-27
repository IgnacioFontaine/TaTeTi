import './App.css'

const TURNOS = {
  X: "x",
  O:"o"
}

const tablero = Array(9).fill(null);

const Square = ({ children, updateBoard, index, }) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

function App() {

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
                {index}
                </Square>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default App
