import "./Inicio.css";
import { Link } from "react-router-dom"; 
 
function Inicio() { 
  return ( 
    <main className="inicio"> 
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
