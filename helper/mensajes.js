require('colors')

const mostrarMenu = () => {


    return new Promise(resolve => {

        console.clear();

        console.log(`========================================`.green)
        console.log(`=========  SELECIONE UNA OPCION  =======`.green)
        console.log(`========================================\n`.green)

        console.log(`${'1.'.green} Crear una Tarea`)
        console.log(`${'2.'.green} Listar Tareas`)
        console.log(`${'3.'.green} Listar Tareas Completadas`)
        console.log(`${'4.'.green} Listar Tareas Pendientes`)
        console.log(`${'5.'.green} Completar Tareas`)
        console.log(`${'6.'.green} Borrar Tareas`)
        console.log(`${'0.'.green} Salir \n`)
    
        const readline = require('readline').createInterface({   
            input: process.stdin,    // Indicar que solicitaremos algo
            output: process.stdout   // para mostrar mensaje
        })

        /**
         *  nota: readline ya viene con node.
         */

        readline.question('Selecione una opcion:',  (opt) => {
            // console.log({opt})

            readline.close(); // nota: Si dejamos de usarlo debemos cerrarlo

            resolve(opt); // Devolvemos la promesa

        }) // Loo usamos para mostrar el stdout

    })


}


const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({   
            input: process.stdin,    // Indicar que solicitaremos algo
            output: process.stdout   // para mostrar mensaje
        })
    
        readline.question(`\n Presione ${'Enter'.green } para continuar \n`,  (opt) => {
            readline.close(); // nota: Si dejamos de usarlo debemos cerrarlo
    
            resolve(); // No se retorna nada.  para seguir el bucle
        }) 
    })

}


module.exports = {
    mostrarMenu,
    pausa
}