import "./footer.css"

export function Footer() {
  return (
    <footer className="my-footer"> 
      <div >
        <a href="https://github.com/IgnacioFontaine" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ignacio-fontaine/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <div className="derechos-de-autor" >Creado por Ignacio Fontaine (2024) &#169;</div>
    </footer>
  )
}