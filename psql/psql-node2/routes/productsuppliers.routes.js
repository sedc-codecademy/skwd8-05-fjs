const productsuppliers = require('express').Router();
const ProductSuppliesController = require('../controllers/productsuppliers.controller');

let psc = new ProductSuppliesController();

productsuppliers.get('/:pid', async (req, res) => {

    let {pid:productId} = req.params;

    let result = await psc.getProductSuppliers(productId).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);

});



module.exports = productsuppliers;