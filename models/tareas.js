/***
 *  _listado:
 *         { '6ec0bd7f-01e0-43da-975e-2a8ad9ebae0b' : { id:12, desc: asd. completadoEN:999992 } }
 *         { '6ec0bd7f-12c0-43da-175e-3a8ad9ebae0b' : { id:12, desc: asd. completadoEN:999992 } }
 *         { '6ec0bd7f-11c0-23da-925e-4a8ad9ebae0b' : { id:12, desc: asd. completadoEN:999992 } }
 * 
 ***/

class Tareas {
    _listado = {};

    // nota: Guion bajo es una forma de decir una propiedad privada

    constructor(){
         this._listado = {};
    }

}

module.exports = Tareas; 