import "./Formulario.css";
function Formulario ({datos, setDatos, onSubmit, textoBoton}) {
    function manejarCambio(evento){
        const {name, value} = evento.target;

        setDatos({
            ...datos,
            [name]:value
        });
    } 

return (
<div className="seccionform">
<form className="formulario" onSubmit={onSubmit}>
        
        <label>
            Titulo
            <input 
            type="text"
            name="titulo"
            value={datos.titulo}
            onChange={manejarCambio}
            required
            />
        </label>

        <label>
            Año
            <input
            type="number"
            name= "anio"
            value={datos.anio}
            onChange={manejarCambio}
            required
            />
        </label>

        <label>
            Genero 
            <input 
            type="text"
            name="genero"
            value={datos.genero}
            onChange={manejarCambio}
            required
            />
        </label>

        <label>
            Director
            <input 
            type="text"
            name="director"
            value={datos.director}
            onChange={manejarCambio}
            required
            />
        </label>
         
        <label>
            Duración en minutos
            <input
            type="number"
            name="duracion"
            value={datos.duracion}
            onChange={manejarCambio}
            required
            />  
        </label>
        
        <label>
         Clasificación
         <input
          type="text"
          name="clasificacion"
          value={datos.clasificacion}
          onChange={manejarCambio}
          required
            />
        </label>

        <label>
         Plataforma
         <input
          type="text"
          name="plataforma"
          value={datos.plataforma}
          onChange={manejarCambio}
          required
            />
        </label>

        <label>
            URL del póster
            <input
            type="url"
            name="imagen"
            value={datos.imagen}
            onChange={manejarCambio}
            required
            />
        </label>

        <button type="submit">{textoBoton} </button>
    </form>
    </div>
    );

}

export default Formulario; 