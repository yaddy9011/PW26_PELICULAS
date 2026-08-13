import "./Catalogo.css";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom"; 
import Tarjeta from "../components/Tarjeta"; 
import { 
  obtenerTodos, 
  eliminar 
} from "../services/api"; 
 
function Catalogo() { 
  const [datos, setDatos] = useState([]); 
  const [cargando, setCargando] = useState(true); 
  const [error, setError] = useState(""); 
 
  async function cargarDatos() { 
    try { 
      setCargando(true); 
      const respuesta = await obtenerTodos(); 
      setDatos(respuesta); 
      setError(""); 
    } catch (error) { 
      setError(error.message); 
    } finally { 
      setCargando(false); 
    } 
  } 
 
  useEffect(() => { 
    cargarDatos(); 
  }, []); 
 
  async function manejarEliminar(id) { 
    const confirmar = window.confirm( 
      "¿Seguro que desea eliminar este registro?" 
    ); 
 
    if (!confirmar) return; 
 
    try { 
      await eliminar(id); 
      setDatos(datos.filter((item) => item.id !== id)); 
    } catch (error) { 
      alert(error.message); 
    } 
  } 
 
  if (cargando) return <p>Cargando...</p>; 
  if (error) return <p>{error}</p>; 
 
  return ( 
      <main className="catalogo-pagina">
      <div className="encabezado-catalogo"> 
        <h2>Catálogo de Películas</h2> 
        <Link to="/agregar">Agregar nuevo</Link> 
      </div> 
 
      <section className="catalogo"> 
        {datos.length === 0 ? ( 
          <p>No hay registros.</p> 
        ) : ( 
          datos.map((item) => ( 
            <Tarjeta 
              key={item.id} 
              item={item} 
              onEliminar={manejarEliminar} 
            /> 
          )) 
        )} 
      </section> 
    </main> 
  ); 
} 
 
export default Catalogo;