// importamos file sistema
const fs = require('fs');

// Ruta de archivo
const archivo = './db/data.json';

const guardarDB = (data) => {
    // Guardamos archivos pasando la ruta y la data
    fs.writeFileSync(archivo, JSON.stringify(data));

    // JSON.stringify convierte en un objeto en su version json valida en un string
}


const leerDB = () => {
    // Si existe el archivo
    if(!fs.existsSync(archivo)){
        return null;
    }

    // Leeemos el archivo codificandolo en formaot utf 9
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});

    // decodificamos el string de json
    const data = JSON.parse(info);

    console.log(data)

    return data;
}


module.exports = {
    guardarDB,
    leerDB
}