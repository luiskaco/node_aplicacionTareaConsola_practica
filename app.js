require('colors')

const { white } = require('colors');
// const {mostrarMenu, pausa} = require('./helper/mensajes'); FOrma manual
const {inquirerMenu, pausa} = require('./helper/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// Limpiar consola
console.clear();

const main = async () => {


    let opt = ''

    do {
        // Forma vieja
       // opt = await mostrarMenu(); // espera una promesa
      //  if(opt !== '0') await pausa();

        
      opt = await inquirerMenu(); // espera una promesa
      console.log({opt})

     
    // const tareas = new Tareas();
    //  const tarea = new Tarea('Comprar comida');

    //   tareas._listado[tarea.id] = tarea;

    // console.log(tareas)

    await pausa();
      

    }while( opt !== 0);

}

main();
