const users = require('express').Router();

users.get('/currentuser', (req, res) => 
{   
    console.log(req.session.id);
    res.status(200).json(req.session.user);
});

//CURD
//localhost/users
users.get('/'); //Should return all users
users.post('/'); //Should add bulk new users
users.put('/'); //Should update bulk users
users.delete('/'); //Should detele bulk users

//localhost/user or /localhost/users/single


module.exports = users;
