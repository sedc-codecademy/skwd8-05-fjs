//Includes express library into the project
const express = require('express');
const expressSession = require('express-session');
const uuid = require('uuid');

//Includes bodyParser library for parsing the request body
const bodyParser = require('body-parser');

//Create new instance of the server
const app = express();
const routes = require('./routes');

app.set('trust proxy', 1);

app.use(expressSession({
    secret: 'SEDCSession', //Key for encryption session stored data
    resave: false, //Should session be resaved on each request
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60  },
    genid: (req) => { return uuid.v4() }
}));

/*
req.session = {
    id: asdasdsa4353re
    routes: {
        GET: ['users', 'products', 'users', 'product']
    }
}; 

GET route 
routes.GET.push(rutata);
routes.GET.filter((r) => r === 'products').length
*/

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

//Routes
app.use('/', routes); // / = root //localhost/api/users/currentuser
//app.use('/api2/', routes2); //localhost/api2/users/currentuser

// app.get('/', (req, res) => {
    
//     if( ! req.session.count)
//     req.session.count = 1;

//     req.session.count = req.session.count + 1;

//     if( ! req.session.items )
//     req.session.items = [1];

//     req.session.items.push(req.session.count);
//     console.log(req.session, req.session.id);
    
//     res.status(200).json({});
// })


//Init the server with default configuraiton
app.listen(port, ip, () => {
    console.log(`Server is active on ${ip} : ${port}`)
});