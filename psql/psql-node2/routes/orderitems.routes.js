const orderitems = require('express').Router();
const OrderItemsController = require('../controllers/orderitems.controller');

let oic = new OrderItemsController();

orderitems.get('/', async (req, res) => {

    let {items, page} = req.query;

    let result = await oic.model.findAll(page, items).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
});

orderitems.get('/:id', async (req, res) => {

    let {id} = req.params;

    let result = await oic.getCustomerById(id).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
})


module.exports = orderitems;