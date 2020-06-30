const products = require('express').Router();
const ProductsController = require('../controllers/products.controller');

let pc = new ProductsController();

products.get('/', async (req, res) => {

    let {items, page} = req.query;

    let result = await pc.model.findAll(page, items).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
});

products.get('/:id', async (req, res) => {

    let {id} = req.params;

    let result = await pc.getProductById(id).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);
})


module.exports = products;