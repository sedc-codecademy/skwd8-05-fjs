const session = require('express-session');
const uuid = require('uuid');

module.exports = session({
    secret: 'BeToFe', //secret password / key / salt
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 864000 }, // false = http+https, true = https
    genid: function(req) {
        return uuid.v4() // use UUIDs for session IDs
    },
});