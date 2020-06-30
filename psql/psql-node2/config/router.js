//Main router config file
const router = require('express').Router();

const customer = require('../routes/customers.routes');
const orders = require('../routes/orders.routes');
const products = require('../routes/products.routes');

router.use('/customers', customer);
router.use('/orders', orders);
router.use('/products', products);

module.exports = router;