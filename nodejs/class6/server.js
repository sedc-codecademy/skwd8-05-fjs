//Includes express library into the project
const express = require('express');
//Includes path library
const path = require('path');

//Includes bodyParser library for parsing the request body
const bodyParser = require('body-parser');

//Create new instance of the server
const app = express();

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
    console.log(req.body);
    res.status(200).json({});
});

//Init the server with default configuraiton
app.listen(port, ip, () => {
    console.log(`Server is active on ${ip} : ${port}`)
});