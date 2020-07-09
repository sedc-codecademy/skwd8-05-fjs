const supplierrates = require('express').Router();
const SuppliersHourlyRateController = require('../controllers/supplierhourlyrate.controller');

let shr = new SuppliersHourlyRateController();

supplierrates.get('/:sid', async (req, res) => {

    let {sid:supplierId} = req.params;

    let result = await shr.getSupplierRates(supplierId).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);

});



module.exports = supplierrates;