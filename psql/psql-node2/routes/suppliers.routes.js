const suppliers = require('express').Router();
const SuppliesController = require('../controllers/suppliers.controller');

let sc = new SuppliesController();

suppliers.get('/', async (req, res) => {

    let {items, page} = req.query;

    let result = await sc.model.findAll(page, items).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
});

suppliers.get('/:id', async (req, res) => {

    let {id} = req.params;

    let result = await sc.getCustomerById(id).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
})


module.exports = suppliers;