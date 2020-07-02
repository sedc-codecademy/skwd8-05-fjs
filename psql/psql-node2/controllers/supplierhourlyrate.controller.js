const ValidationHelper = require('../helper/validation.helper');
const SuppliersProductModel = require('../models/productsuppliers.model');

class SuppliersHourlyRateController
{
    constructor(){
        this.model = new SuppliersProductModel();
    }

    getProductSuppliers(productId)
    {
        let validation = ValidationHelper.validateEntityFields(
            {productId},
            [
                {field: 'productId', validations: ['number', 'required']},
            ]
        );

        if( ! validation.length)
        return this.model.getResult(productId);
        else
        return Promise.reject({status: 412, message: validation});       
 
    }
}

module.exports = SuppliersHourlyRateController;