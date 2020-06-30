//Main router config file
const router = require('express').Router();
const customer = require('../routes/customers.routes');

router.use('/customers', customer);

module.exports = router;