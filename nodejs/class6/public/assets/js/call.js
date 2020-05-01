//Create a function for adding a new todo
const createNewTodo = (data) => {
    return fetch('//localhost/todo', 
        {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            loadAllTodos();
        })
}

//Load add todos from server
const loadAllTodos = () => {
    return fetch('//localhost/todo2')
    .then(response => response.json())
    .then((response) => {
        printTasksIntoUL(response);
    })
    .catch((e) => {
        console.log(e);
    })
}