export function Rules() {
  return (
    <div>
    <p>
      <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
        Rules
      </button>
    </p>
    <div style="min-height: 120px;">
      <div className="collapse collapse-horizontal" id="collapseWidthExample">
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" >Tablero de 3x3 casillas</a></li>
          <li><a className="dropdown-item" >Gana quien forme una línea horizontal,<br /> vertical o diagonal con sus fichas.</a></li>
          <li><a className="dropdown-item" >Empate si todas las casillas están ocupadas sin ganador</a></li>
        </ul>
      </div>
      </div>
  </div>
  )
}