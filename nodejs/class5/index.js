const express = require('express');
const app = express(); //New instance
const http = require('http');
const path = require('path');
const esession = require('express-session');
const cors = require('./middlewares/cors');
const session = require('./middlewares/session');
const uuid = require('uuid');

const port = process.env.port || 80,
    ip = "0.0.0.0";

app.set('trust proxy', 1) // trust first proxy

app.use(esession({
    secret: 'biloSto', //secret password / key / salt
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 86400 }, // false = http+https, true = https
    genid: function(req) {
        return uuid.v4() // use UUIDs for session IDs
    },
}))    

app.use(express.static( path.join(__dirname, '/public')) );

//Middleware
app.use(cors);
app.use(session);

app.get('/', (req, res) => {
    res.status(200).send(true);
})

app.get('/a', (req, res) => {
    res.status(200).send(false);
})

app.get('/preferences', (req, res) => {
    res.status(200).json(req.session.preferences);
})

app.get('/preferences/set', (req, res) => {
    if(req.query)
    {
        Object.keys(req.query).forEach(element => {
            req.session.preferences[element] = req.query[element];
        });

        console.log(req.session.preferences);
    }

    res.status(200).json({})
})

app.get('/api', (req, res) => {

    res.status(200).json([50, 60]);
})

http.createServer(app).listen(port, ip, () => {
    console.log('Http is running');
});