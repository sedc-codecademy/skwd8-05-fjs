//Create a function for adding a new todo that will pass the form data from FE to BE
const createNewTodo = (data) => {
    return fetch('//localhost/todo', 
        {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
}
