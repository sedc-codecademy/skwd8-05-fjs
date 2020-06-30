const customers = require('express').Router();
const CustomerController = require('../controllers/customers.controller');

let cc = new CustomerController();

customers.get('/', async (req, res) => {

    let {items, page} = req.query;

    let result = await cc.model.findAll(page, items).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
});

customers.get('/:id', async (req, res) => {

    let {id} = req.params;

    let result = await cc.getCustomerById(id).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
})


module.exports = customers;