const { v4: uuidv4 } = require('uuid');
// Renombramos el paquete v4 a uuid

class Tarea {
    id = '';
    desc = '';
    completadoEn =  null;


    constructor(desc){

        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;

    }



}

module.exports = Tarea;