const users = require('express').Router();

users.get('/currentuser', (req, res) => 
{   
    console.log(req.session.id);
    res.status(200).json(req.session.user);
});

module.exports = users;
