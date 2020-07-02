const orderproducts = require('express').Router();
const OrderProductsController = require('../controllers/orderproducts.controller');

let opc = new OrderProductsController();

orderproducts.get('/:uid/:oid', async (req, res) => {

    let {uid:customerId, oid:orderId} = req.params;

    let result = await opc.getProductsByOrder(customerId, orderId).catch((e) => {
        res.status(e.status).json(e);
    });

    res.status(200).json(result);

});



module.exports = orderproducts;