const orders = require('express').Router();
const OrdersController = require('../controllers/orders.controller');

let oc = new OrdersController();

orders.get('/', async (req, res) => {

    let {items, page} = req.query;

    let result = await oc.model.findAll(page, items).catch((e) => {
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