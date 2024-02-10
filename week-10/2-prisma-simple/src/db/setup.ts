import { PrismaClient } from '@prisma/client';
import { createUser, getUser } from './user';
import { createTodo, getTodos } from './todo';

const prisma = new PrismaClient();

export async function dropTables() {
    await prisma.todo.deleteMany({});
    await prisma.user.deleteMany({});
}

module.exports = { dropTables };


// createUser("fsdf","password","sanjeev")
// .then(res=>{
//     console.log(res)
// })

// getUser(1)
//     .then(res=>{
//         console.log(res);
//     })

createTodo(8,"ef","defewfoen")
    .then(res=>{
        console.log(res);
    })

    getTodos(8)
    .then(res=>{
        console.log(res)
    })