import { useEffect, useState } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import Formulario from "../components/Formulario"; 
import { 
  obtenerPorId, 
  actualizar 
} from "../services/api"; 
 
function Editar() { 
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [datos, setDatos] = useState(null); 
 
  useEffect(() => { 
    async function cargarRegistro() { 
      try { 
        const respuesta = await obtenerPorId(id); 
        setDatos(respuesta); 
      } catch (error) { 
        alert(error.message); 
        navigate("/catalogo"); 
      } 
    } 
 
    cargarRegistro(); 
  }, [id, navigate]); 
 
  async function manejarSubmit(evento) { 
    evento.preventDefault(); 
 
    try { 
      await actualizar(id, datos); 
      alert("Registro actualizado correctamente"); 
      navigate("/catalogo"); 
    } catch (error) { 
      alert(error.message); 
    } 
  } 
 
  if (!datos) return <p>Cargando...</p>; 
 
  return ( 
    <main> 
      <h2>Editar película</h2> 
 
      <Formulario 
        datos={datos} 
        setDatos={setDatos} 
        onSubmit={manejarSubmit} 
        textoBoton="Actualizar" 
      /> 
    </main> 
  ); 
} 
 
export default Editar;