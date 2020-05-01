//This function will print all todo tasks on screen
const printTasksIntoUL = (tasksList) => {
    let ul = document.querySelector('ul');
    ul.innerHTML = '';

    if( ! tasksList && ! tasksList.length)
    return false;

    tasksList.map((task) => {
        let li = document.createElement('li');
        li.innerHTML = `<span>Name: ${task.taskName}</span>
                        <span>Assignee: ${task.taskAssignee}</span>
                        <span>Description: ${task.taskDescription}</span>`;
        ul.appendChild(li);
    })

}


loadAllTodos();