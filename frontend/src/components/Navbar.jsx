import {link} from "react-router-dom"
function Navbar(){
    return (
      <nav className="navbar">
        <h1>Catalogo de peliculas</h1>

        <div>
          <link to="/">Inicio</link>
          <link to="/Catalogo">Catalogo</link>
          <link to="/Agregar">Agregar</link>
        </div>
      </nav>
    );
}

export default Navbar;