/***
 *  _listado:
 *         { '6ec0bd7f-01e0-43da-975e-2a8ad9ebae0b' : { id:12, desc: asd. completadoEN:999992 } }
 *         { '6ec0bd7f-12c0-43da-175e-3a8ad9ebae0b' : { id:12, desc: asd. completadoEN:999992 } }
 *         { '6ec0bd7f-11c0-23da-925e-4a8ad9ebae0b' : { id:12, desc: asd. completadoEN:999992 } }
 * 
 ***/
 require('colors');

// Importamos tarea
const Tarea = require("./tarea");


// Clases de tareas
class Tareas {
    _listado = {};

    // assesor de los datos
    get listadoArr(){
        const listado = [];

        Object.keys(this._listado).forEach(key => {
           // console.log(key)

            const tarea = this._listado[key];
            listado.push(tarea);
           
            // Metodo sincrono. no es necesario await
        })


        return listado;
    }

    // nota: Guion bajo es una forma de decir una propiedad privada
    constructor(){
         this._listado = {};
    }

    // Borrar Tarea
    borrarTarea (id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }


    // Convertimos las tareas leidas en arreglo
    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    // Funcion para crear tareas
    crearTarea( desc = ''){
        const tarea = new Tarea(desc);
        
        // Creamos el objeto de tarea
        this._listado[tarea.id] = tarea;
    }

    // Listaado de tarea
    listadoCompleto() {
        /**
         * Ejmplo: completado verde - no completado rojo
         * 
         * 1. alma :: completado | pendiente
         * 2. alma :: completado | pendiente
         * 
         */

        let num;
 
         //  console.log(this.listadoArr)u
        this.listadoArr.forEach( ({desc , id, completadoEn}, i) => {
        const extado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red
            num = `${++i}.`.green;
            console.log(`${num} ${desc} :: ${extado}`)
        });

    }

    //Funcion para listar pendiente y completados
    listarPendienteCompletadas( completadas = true ){
        
        let num;
        let msg;
         //  console.log(this.listadoArr)
        this.listadoArr.forEach( ({desc , id, completadoEn}, i) => {

            if(completadas){
                if(completadoEn !== null){
                    msg = 'Completado'.green;
                    num = `${++i}.`.green;
                    console.log(`${num.toString().green} ${desc} :: ${msg} :: ${completadoEn.green}`)
                }
            }else{
                msg = 'Pendiente'.green;
                num = `${++i}.`.green;
                console.log(`${num.toString().green} ${desc} :: ${msg}`)
            }

          

        });
    }

    // Funcion para habilitar y deshabilitar tarea
    toggleCompletadas(ids = []) {

        // recorremos las tareas buscando las tareas por su id para colocarlo como completada
        ids.forEach(id => {
            
            const tarea = this._listado[id]

            if(!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        });

        // Barremos los id para desmarcar las no completadadas
        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
                
            }
        })
    }

}

module.exports = Tareas; 