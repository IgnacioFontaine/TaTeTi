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
        <section>
          <span>Acá va el tablero</span>
        </section>
      </div>
    </>
  )
}

export default App
