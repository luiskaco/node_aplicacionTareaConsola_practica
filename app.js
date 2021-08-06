require('colors')
// const {mostrarMenu, pausa} = require('./helper/mensajes'); FOrma manual
// importamos menu
const {inquirerMenu, pausa,leerInput, listadoTareasBorrar, confirmar, mostrarlistadochecklist} = require('./helper/inquirer');

// Importamos clase de datea
const Tareas = require('./models/tareas');

// Importamos guardar archivo
const {guardarDB, leerDB} = require('./helper/guardarArchivo');

// Limpiar consola
console.clear();

const main = async () => {
    let opt = ''

        // Instanciando tareas
        const tareas = new Tareas();

        // leer tareas del archivo fs
        const tareasDB = leerDB();

        if(tareasDB){ // Cargar Tareas
            tareas.cargarTareasFromArray(tareasDB);

        }


        // Ciclo do while
    do {
        // Forma vieja
        // opt = await mostrarMenu(); // espera una promesa
        //  if(opt !== '0') await pausa();
        
        // Imprime el menu
        opt = await inquirerMenu(); // espera una promesa
        //console.log({opt})


        switch (opt) {
            // crear opciones
            case 1:
                    // Crear opcion
                const desc = await leerInput('Descripcion:');
                console.log(desc);

                // Creamos la tarea
                tareas.crearTarea(desc);
                break;
            case 2:
                tareas.listadoCompleto();

                // console.log(tareas.listadoArr);
                break;
            case 3: // Listar completados
                tareas.listarPendienteCompletadas();

                break;
            case 4: // Listadode pendiente
                tareas.listarPendienteCompletadas(false);

                break;
            case 5:  // Completado y pendiente
                // Obtenemos un arreglode de id de las marcada
              const ids = await mostrarlistadochecklist(tareas.listadoArr);
//                console.log(ids);

                tareas.toggleCompletadas(ids);

                break;
            case 6: // Borrar
                const id =  await listadoTareasBorrar(tareas.listadoArr);

                    //vvalidamos
                    if(id !== '0'){ // Si la opcion escogida es 0 , validamos todos los cambios

                        const ok = await confirmar('Estas seguro');
                        // TODO preguntar s esta seguro
                        console.log({ok});
                        // Comprobamos
                        if(ok){
                            tareas.borrarTarea(id);
                            console.log('Tarea Borrada')
                        }


                    }
                break;

            default:
                break;
        }

        // Guardar tareas en el archivo fs
         guardarDB( tareas.listadoArr );

        await pausa();
      

    }while( opt !== 0);

}

main();
