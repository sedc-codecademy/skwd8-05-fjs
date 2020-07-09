const loginroutes = require('express').Router();
const LoginController = require('../controllers/login.controller');

const lc = new LoginController();

loginroutes.post('/', async (req, res) => {

    if( ! req.body )
    {
        res.status(400).json({error: {message: "Bad request"}});
    }
    else
    {
        let response = await lc.login(req.body).catch((e) => {
            console.log(e)
            res.status(412).json(e);
        })

        let result = response.length ? response[0] : undefined;

        req.session.currentUser = result;
        res.status(200).json(result);
    }
})

module.exports = loginroutes;