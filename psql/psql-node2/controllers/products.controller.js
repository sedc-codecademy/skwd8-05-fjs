const ErrorHandlerController = require('./error_handler.controller');
const ProductsModel = require('../models/products.model');

class ProductsController
{
    constructor(){
        this.model = new ProductsModel();
    }

    getProductById(id)
    {
        if( ! id )
        {
            return Promise.reject(ErrorHandlerController.parseMissingField("id"));
        }
        else if(isNaN(id))
        {
            return Promise.reject(ErrorHandlerController.fieldNotCorrectType("id", "integer"))
        }

        return this.model.findById(id);
    }
}

module.exports = ProductsController;