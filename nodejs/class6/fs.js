//Include FS library
const fs = require('fs');

process.createNewTodo.on('create-new-todo', async (data) => {

    let oldData = await getTodos().catch(e => { return false });
    
    oldData = oldData ? oldData : [];
    oldData.push(data);
    addNewTodo(oldData);
});

process.createNewTodo.on('load-todo-tasks', async () => {
    let oldData = await getTodos().catch(e => { return [] });
    
    callForReturningData(oldData)
})

const callForReturningData = (data) => {
    process.createNewTodo.emit('todo-tasks-loaded', data); 
}
const addNewTodo = (data) => {
    
    fs.writeFile('todos.txt', JSON.stringify(data), (err) => {
        if(err)
        process.createNewTodo.emit('new-todo-fail', err)
        else        
        process.createNewTodo.emit('new-todo-created', {status: "ok"})
    })
}

const getTodos = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile('todos.txt', (err, data) => {
        if(err)
        reject(err);
        else
        resolve(JSON.parse(data.toString() || "[]"));
        })
    })
}

module.exports = {getTodos: getTodos}