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

        let result = response.length ? response[0] : [];

        req.session.currentUser = result;
        res.status(200).json(result);
    }
})

const clientId = '123' //provided from github
const clientSecret = '123'; //provided from github

//From frontend when login
loginroutes.get('/github', async(req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}`);
});

//From github if success login
loginroutes.get('/github_callback', async(req, res) => {

    //github will return user access token
    req.session.currentUser= {github: req.query} //...

    //sequence of calls and methods that needs to be executed before response
    /*
        1. does user exist in local db
        2. update user details (optional)
        3. link roles to user

        ++ eventEmitter.emit('new-some-user', github)

        in controller ++ eventEmitter.on('new-some-user', (data)) -> execture all middle steps operation
    */

    res.redirect(`http://localhost:8080/profile`);
})

module.exports = loginroutes;