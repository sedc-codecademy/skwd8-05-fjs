//Main router config file
const router = require('express').Router();

const customer = require('../routes/customers.routes');
const orders = require('../routes/orders.routes');
const products = require('../routes/products.routes');
const orderproducts = require('../routes/orderproducts.routes');

//CRUD
router.use('/customers', customer);
router.use('/orders', orders);
router.use('/products', products);


//BE-FE
router.use('/orderproducts', orderproducts);
module.exports = router;