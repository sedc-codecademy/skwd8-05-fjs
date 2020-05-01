process.createNewTodo.on('new-todo-created',  () => {
    console.log('New todo has been created')
})

process.createNewTodo.on('new-todo-fail', () => {
    console.log('New todo creation failed')
})

process.createNewTodo.on('create-new-todo', () => {
    console.log('New todo action triggered');
})

process.createNewTodo.on('todo-tasks-loaded', () => {
    console.log('Load of all tasks was made')
})

process.createNewTodo.on('create-new-todo', (data) => {
    console.log(data);
})