import { Link } from "react-router-dom";
import fondo from "../imag/fondoform.png";
import "./Inicio.css";

function Inicio() {
  return (
    <main
      className="inicio"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 8, 13, 0.65), rgba(8, 8, 13, 0.85)), url(${fondo})`
      }}
    >
      <h2>CRUD de Películas</h2>

      <p>
        Aplicación desarrollada con React, Node.js,
        Express y almacenamiento en JSON.
      </p>

      <Link to="/catalogo">Ver catálogo</Link>
    </main>
  );
}

export default Inicio;