const register = require('express').Router();
const RegisterController = require('../controllers/register.controller');

let rc = new RegisterController();

register.post('/', (req, res) => {

    if(req.body)
    {
        let {email, password} = req.body;
        let status = rc.createNewUser(email, password);     
        
        if( ! status )
        res.status(412).json({error: {message: "Missing params"}});
        else
        res.status(203).json(status);
    }
    else
    res.status(400).json({error: {message: "Bad request"}});
});

module.exports = register;