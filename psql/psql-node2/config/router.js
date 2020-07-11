//Main router config file
const router = require('express').Router();
const roles = require('../config/role');

//Not protected routes
const login = require('../routes/login.routes');
const logout = require('../routes/logout.routes');

//Protected routes
const customer = require('../routes/customers.routes');
const orders = require('../routes/orders.routes');
const products = require('../routes/products.routes');
const suppliers = require('../routes/suppliers.routes');
const hourlypay = require('../routes/hourlypay.routes');
const orderitems = require('../routes/orderitems.routes');
const orderproducts = require('../routes/orderproducts.routes');
const supplierrates = require('../routes/supplierrates.routes');
const productsuppliers = require('../routes/productsuppliers.routes');
const users = require('../routes/users.routes');

//CRUD
router.use('/customers', (req, res, next) => {roles(req, res, next, [3])}, customer);
router.use('/orders', orders);
router.use('/products', products);
router.use('/suppliers', suppliers);
router.use('/hourlypay', hourlypay);
router.use('/orderitems', orderitems);


//BE-FE
router.use('/login', login);
router.use('/logout', logout);
router.use('/users', users);
router.use('/orderproducts', orderproducts);
router.use('/supplierrates', supplierrates);
router.use('/productsuppliers', productsuppliers);

module.exports = router;