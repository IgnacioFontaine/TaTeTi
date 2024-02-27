import './App.css'

const TURNOS = {
  X: "x",
  O:"o"
}

const tablero = Array(9).fill(null);

function App() {

  return (
    <>
      <div className='board'>
        <h1>Ta Te Ti</h1>
        <section className='game'>
          {tablero.map((_, index) => {
            return (
              <div className='cell' key={index}>
                <span className='cell_content'>
                  {index}
                </span>
              </div>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default App
