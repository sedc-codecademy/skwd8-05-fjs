const login = require('express').Router();
const LoginController = require('../controllers/login.controller');

const lc = new LoginController();

//localhost:8080/login/
login.post('/', (req, res) => {

    if( ! req.body )
    res.status(400).json({error: {message: "Missing params"}})
    else
    {
        let user = lc.makeLogin(req.body);

        if(user)
        res.status(200).json(user);
        else
        res.status(412).json({error: {message: "Wrong email or password"}});
    }
    
})


module.exports = login;