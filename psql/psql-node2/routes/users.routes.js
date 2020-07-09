const usersroutes = require('express').Router();
const UsersController = require('../controllers/users.controller');

const uc = new UsersController();

usersroutes.get('/me', async (req, res) => {

    if(req.session && req.session.currentUser)
    {
        //res.status(200).json(req.session.currentUser);
        let response = await uc.getUserRoles(req.session.currentUser.id).catch(e => {
            res.status(412).json({error: {message: e}})
        });
        
        req.session.currentUser = Object.assign(req.session.currentUser, {roles: response});

        res.status(200).json(req.session.currentUser);
    }
    else
    res.status(403).json({error: {message:"Not authenticated"}});
});

module.exports = usersroutes;