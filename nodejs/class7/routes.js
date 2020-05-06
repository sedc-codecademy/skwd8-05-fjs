//Middleware for routes
const router = require('express').Router();
const login = require('./routes/login.routes');
const logout = require('./routes/logout.routes');
const users = require('./routes/users.routes');

router.use('/login', login); //localhost/login //localhost/login/*
router.use('/logout', logout); //localhost/logout //localhost/logout/*
router.use('/users', users); //localhost/users //localhost/users/* //localhost/users/currentuser


module.exports = router;