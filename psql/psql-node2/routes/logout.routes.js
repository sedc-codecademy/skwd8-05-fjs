const logout = require('express').Router();

logout.get('/', (req, res) => {

    req.session.destroy();
    res.status(200).json({});
})
 
module.exports = logout;