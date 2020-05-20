const router = require('express').Router();
const login = require('./routes/login.routes');
const products = require('./routes/products.routes');

router.use('/login', login);
router.use('/products', products)

module.exports = router;