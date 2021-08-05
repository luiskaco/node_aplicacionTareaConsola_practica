require('colors');
const inquirer = require('inquirer');

// Menu de preguntas
const Question = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
        {
            value: 1,
            name: `${'1.'.green} Crear Tarea`
        },
        {
            value: 2,
            name: `${'2.'.green} Listar Tarea`
        },
        {
            value: 3,
            name: `${'3.'.green} Listar Tareas Completado`
        },
        {
            value: 4,
            name: `${'4.'.green} Listar Tareas Pendientes`
        },
        {
            value: 5,
            name: `${'5.'.green} Completar Tarea(s)`
        },
        {
            value: 6,
            name: `${'6.'.green} Borrar Tarea(s)`
        },
        {
            value: 0,
            name: `${'0.'.red} Salir`
        }
        
]
}]

/**
 *  Nota: en consola los valors estan ordenados por indices. Es decir al marcar los numero ira de acuerdo a la cantdad que exista
 * 
 */

const inquirerMenu = async() => {
  //  console.clear();
    console.log(`========================================`.green)
    console.log(`=========  SELECIONE UNA OPCION  =======`.white)
    console.log(`========================================\n`.green)
    const {opcion} = await inquirer.prompt(Question)
    return opcion;
}

// Detenemos y mostramos de nuevo
const pausa = async () => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presion ${'enter'.green} para continuar `
    }]

    console.log('\n')
    await inquirer.prompt(question)
}

const leerInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            // validamos que exista un valor
            validate( value ) {
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }

                return true;
            }
        }
    ]

   const {desc} = await inquirer.prompt(question)
   return desc;

}

// Listar en un moenu las tareas que se borraran
const listadoTareasBorrar = async( tareas = [] ) => {
    // {
    //     value: 1,
    //     name: `${'1.'.green} Crear Tarea`
    // },

    // Vaciar las tareas en formatode pregunta

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`

        }
    })

    choices.unshift({  // unsshit agrega al principio del objeto
        value:'0',
        name:'0.'.green + 'cancelar'
    })

    // perpara estrucutrua
    const pregunta = [
        {
            type:'list',
            name:'id',  // Valor que extraemos en el inquiere.promp
            message: 'Borrar',
            choices
        }
    ]
    // console.log(choices);

    // Construimos el menu
     const {id} = await inquirer.prompt(pregunta)
     return id;



};


const confirmar = async (message) => {
    const question = [{
        type: 'confirm', // Devuelve bolean
        name: 'ok', // Lo que vamosa r ecibir
        message
    }]

    const {ok} = await inquirer.prompt(question)
    return ok;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar
}
