//Middleware for routes
const router = require('express').Router();
const login = require('./routes/login.routes');
const logout = require('./routes/logout.routes');
const users = require('./routes/users.routes');
const register = require('./routes/register.routes');

router.use('/login', login); //localhost/login //localhost/login/*
router.use('/logout', logout); //localhost/logout //localhost/logout/*
router.use('/users', users); //localhost/users //localhost/users/* //localhost/users/currentuser
router.use('/register', register);

module.exports = router;