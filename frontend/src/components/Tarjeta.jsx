import { link } from "react-router-dom";

function Tarjeta ({item, onEliminar}){
    return(
        <article className="tarjeta">
            <img
             src={item.img}
             alt={item.titulo}
            />
            <h2>{item.titulo}</h2>
<p><strong>Año:</strong>{item.anio}</p>
<p><strong>Género:</strong>{item.genero}</p>
<p><strong>Director:</strong>{item.director}</p>
<p><strong>Duración:</strong>{item.duracion}min</p>

            <div className="acciones">
                <link to= {'/editar/${item.id'}>
                Editar
                </link>
                <button onClick={()=> onEliminar(item.id)}>
                    Eliminiar
                </button>
            </div>
        </article>
    );
}
export default Tarjeta; 