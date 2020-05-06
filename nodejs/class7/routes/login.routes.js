const login = require('express').Router();
const LoginController = require('../controllers/login.controller');

//Controllers are mediators between model and view (model and response);
//Model should take care about all complex operations and db communication
let lc = new LoginController();


login.post('/', (req, res) => { //localhost/login
    
    let {email, password} = req.body;
    let user = lc.makeLogin(email, password);

    if( ! user )
    res.status(400).json({error: {message: 'Missing params'}})
    else if(user.length)
    {
        req.session.user = user[0];
        res.status(200).json(user[0]);
    }
    else
    res.status(403).json({error: {message: "Wrong credentials"}});
    
});

login.get('/:id', (req, res) => { //localhost/login/11

})

login.get('/providers', (req, res) => { //localhost/login/providers

})

module.exports = login;
