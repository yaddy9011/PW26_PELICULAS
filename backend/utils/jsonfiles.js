const fs = requiere('fs');
const path = require('path');

const rutaArchivo = path.join(__dirname, '../data/archivo.json');

function leerDatos() {
    try {
        const datos = fs.readFileSync(rutaArchivo, 'utf-8');
        return contenido? JSON.parse(contenido) : [];
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return [];
    }
}
function guardarDatos(datos) {
    fs.writeFileSync(
        rutaArchivo,
        JSON.stringify(datos, null, 2),
        "utf-8"
    );
}

module.exports = {
    leerDatos, 
    guardarDatos
};