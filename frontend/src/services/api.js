const API_URL = "http://localhost:3000/api/peliculas"; 
 
async function procesarRespuesta(respuesta) { 
  if (!respuesta.ok) { 
    const error = await respuesta.json(); 
    throw new Error(error.mensaje || "Ocurrió un error"); 
  } 
 
  return respuesta.json(); 
} 
 
export async function obtenerTodos() { 
  const respuesta = await fetch(API_URL); 
  return procesarRespuesta(respuesta); 
} 
 
export async function obtenerPorId(id) { 
  const respuesta = await fetch(`${API_URL}/${id}`); 
  return procesarRespuesta(respuesta); 
} 
 
export async function crear(datos) { 
  const respuesta = await fetch(API_URL, { 
    method: "POST", 
    headers: { 
      "Content-Type": "application/json" 
    }, 
    body: JSON.stringify(datos) 
  }); 
 
  return procesarRespuesta(respuesta); 
} 
 
export async function actualizar(id, datos) { 
  const respuesta = await fetch(`${API_URL}/${id}`, { 
    method: "PUT", 
    headers: { 
      "Content-Type": "application/json" 
    }, 
    body: JSON.stringify(datos) 
  }); 
 
  return procesarRespuesta(respuesta); 
} 
 
export async function eliminar(id) { 
  const respuesta = await fetch(`${API_URL}/${id}`, { 
    method: "DELETE" 
  }); 
 
  return procesarRespuesta(respuesta); 
}