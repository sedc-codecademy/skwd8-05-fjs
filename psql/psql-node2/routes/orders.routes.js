const orders = require('express').Router();
const roles = require('../config/role');
const OrdersController = require('../controllers/orders.controller');

let oc = new OrdersController();

const systemRoles = {regular: 1, editor: 2, admin: 3}

orders.get('/', //Route
        (req, res, next) => { roles(req, res, next, [systemRoles.editor, systemRoles.admin]) }, //Permission management
        async (req, res) => //Actual route execution
    {

    let {items, page} = req.query;

    let result = await oc.model.findAll(page, items).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
});


orders.get('/user', 
            (req, res, next) => { roles(req, res, next, [systemRoles.regular]) }, 
            async(req, res) => {

    let result = await oc.model.findAllByUserId(req.session.currentUser.id).catch(e => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
});


orders.get('/:id', async (req, res) => {

    let {id} = req.params;

    let result = await oc.getOrdersById(id).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
})


module.exports = orders;