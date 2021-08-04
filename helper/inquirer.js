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
            name: '1. Crear Tarea'
        },
        {
            value: 2,
            name: '2. Listar Tarea'
        },
        {
            value: 3,
            name: '3. Crear Tarea'
        },
        {
            value: 4,
            name: '4. Listar Tareas Pendientes'
        },
        {
            value: 5,
            name: '5. Completar Tarea(s)'
        },
        {
            value: 6,
            name: '6. Borrar Tarea'
        },
        {
            value: 0,
            name: '0. Salir'
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
    console.log(`=========  SELECIONE UNA OPCION  =======`.green)
    console.log(`========================================\n`.green)
    const {opcion} = await inquirer.prompt(Question)
    return opcion;
}

const pausa = async () => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presion ${'enter'.green} para continuar `
    }]

    console.log('\n')
    await inquirer.prompt(question)
}

module.exports = {
    inquirerMenu,
    pausa
}
