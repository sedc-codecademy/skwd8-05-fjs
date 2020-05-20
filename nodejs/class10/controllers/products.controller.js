const ProductsModel = require('../models/products.model');

const pm = new ProductsModel();

class ProductsController
{
    constructor(){}

    getAll()
    {
        return pm.getProducts()
    }

    getById(id)
    {
        return pm.getProduct(id);
    }

    addNew(productData)
    {
        return pm.addProduct(productData)
    }

    update(id, productData)
    {
        return pm.updateProduct(id, productData);
    }

    deleteById(id)
    {
        return pm.deleteProduct(id);
    }
}

module.exports = ProductsController;