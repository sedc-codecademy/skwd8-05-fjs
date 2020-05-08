const login = require('express').Router();
const LoginController = require('../controllers/login.controller');
//const LoginModel = require('../models/login.model');
//Controllers are mediators between model and view (model and response);
//Model should take care about all complex operations and db communication
let lc = new LoginController();
//let lm = new LoginModel(); //for MVVM
login.get('/', (req, res) => { //localhost/login
    //return status of am I logged in
})

login.post('/', (req, res) => { //localhost/login
    
    let {email, password} = req.body;
    let user = lc.makeLogin(email, password);

    if( ! user )
    res.status(400).json({error: {message: 'Missing params'}})
    else if(user)
    {
        req.session.user = user;
        res.status(200).json(user);
    }
    else
    res.status(403).json({error: {message: "Wrong credentials"}});
    
});

login.put('/', (req, res) => {
    //Probably should update the session
});

login.delete('/', (req, res) => {
    //Should do logout
})

login.get('/checkuser/:email', (req, res) => {
    
    if( ! req.param.email)
    {
        res.status(412).json({error: {message: 'Missing params'}})
        return false;
    }

    if(lc.checkCurrentUser(req.param.email))
    {
        res.status(200).json({})
    }
    else
    res.status(400).json({error: {message: "User doesn't exist"}});
})

module.exports = login;
