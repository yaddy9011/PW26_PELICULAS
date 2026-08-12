//Hyrum estubo aquí
const { leerDatos, guardarDatos } = require("../utils/jsonfiles"); 
 
function obtenerTodos(req, res) { 
  const datos = leerDatos(); 
  res.json(datos); 
} 
 
function obtenerPorId(req, res) { 
  const datos = leerDatos(); 
  const id = Number(req.params.id); 
  const registro = datos.find((item) => item.id === id); 
 
  if (!registro) { 
    return res.status(404).json({ 
      mensaje: "Película no encontrado" 
    }); 
  } 
 
  res.json(registro); 
} 
 
function crear(req, res) { 
  const datos = leerDatos(); 
 
  if (!req.body || Object.keys(req.body).length === 0) { 
    return res.status(400).json({ 
      mensaje: "Debe enviar los datos del registro" 
    }); 
  } 
 
  const nuevoRegistro = { 
    id: datos.length > 0 
      ? Math.max(...datos.map((item) => item.id)) + 1 
      : 1, 
    ...req.body 
  }; 
 
  datos.push(nuevoRegistro); 
  guardarDatos(datos); 
 
  res.status(201).json(nuevoRegistro); 
} 
 
function actualizar(req, res) { 
  const datos = leerDatos(); 
  const id = Number(req.params.id); 
  const indice = datos.findIndex((item) => item.id === id); 
 
  if (indice === -1) { 
    return res.status(404).json({ 
      mensaje: "Película no encontrado" 
    }); 
  } 
 
  datos[indice] = { 
    ...datos[indice], 
    ...req.body, 
    id 
  }; 
 
  guardarDatos(datos); 
  res.json(datos[indice]); 
}
function eliminar(req, res) { 
  const datos = leerDatos(); 
  const id = Number(req.params.id); 
  const indice = datos.findIndex((item) => item.id === id); 
 
  if (indice === -1) { 
    return res.status(404).json({ 
      mensaje: "Película no encontrado" 
    }); 
  } 
 
  const eliminado = datos.splice(indice, 1); 
  guardarDatos(datos); 
 
  res.json({ 
    mensaje: "Registro eliminado correctamente", 
    registro: eliminado[0] 
  }); 
} 
 
module.exports = { 
  obtenerTodos, 
  obtenerPorId, 
  crear, 
  actualizar, 
  eliminar 
}; 