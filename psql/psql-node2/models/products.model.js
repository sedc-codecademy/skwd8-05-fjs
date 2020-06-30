const ModelHelper = require('./model-helper.model');

class ProductsModel extends ModelHelper
{
    constructor(){
        super('product');
    }    
}

module.exports = ProductsModel;