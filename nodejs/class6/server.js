//Includes express library into the project
const express = require('express');
//Includes path library
const path = require('path');

//Includes bodyParser library for parsing the request body
const bodyParser = require('body-parser');

//Create new instance of the server
const app = express();

//Create eventEmitter variable
const emitter = require('events').EventEmitter;

process.createNewTodo = new emitter();
const fs = require('./fs');
const ch = require('./catcher');

//Set default port and IP for server
const port = process.env.PORT || 80, 
    ip = process.env.IP || "0.0.0.0";

//Create listener for static files
app.use(express.static(`${__dirname}/public`))

//Everything that shouldn't affect static files goes bellow

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

//Create new post route for creating of new todo
app.post('/todo', (req, res) => {
    
    let {taskName, taskAssignee, taskDescription} = req.body;

    if(taskName && taskAssignee && taskDescription)
    {
        process.createNewTodo.on('new-todo-created', (data) => {  
            res.status(201).json(data);
        })
        process.createNewTodo.on('new-todo-fail', (e) => {
            res.status(412).json(e);
        })

        process.createNewTodo.emit('create-new-todo', req.body);     
    }
    else
    {
        res.status(400).json({'error': 'Missing params'})
    }

});

//Load tasks
app.get('/todo', (req, res) => {

    process.createNewTodo.on('todo-tasks-loaded', (data) => {
        try
        {
            res.status(200).json(data);
        }
        catch(e){
            //console.log(e);
        }
    });

    process.createNewTodo.emit('load-todo-tasks');
})

//Load tasks with require
app.get('/todo2', (req, res) => {
    
    fs.getTodos().then((response) => {
        res.status(200).json(response)
    }, (error) => {
        res.status(400).json(error);
    })
})

//Init the server with default configuraiton
app.listen(port, ip, () => {
    console.log(`Server is active on ${ip} : ${port}`)
});