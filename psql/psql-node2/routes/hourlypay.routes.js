const hourlypay = require('express').Router();
const HourlyPayController = require('../controllers/hourlypay.controller');

let hpc = new HourlyPayController();

hourlypay.get('/', async (req, res) => {

    let {items, page} = req.query;

    let result = await hpc.model.findAll(page, items).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
});

hourlypay.get('/:id', async (req, res) => {

    let {id} = req.params;

    let result = await hpc.getCustomerById(id).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
})


module.exports = hourlypay;