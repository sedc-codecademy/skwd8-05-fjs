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
            {supplierId},
            [
                {field: 'supplierId', validations: ['number', 'required']},
            ]
        );

        if( ! validation.length)
        return this.model.getResult(supplierId);
        else
        return Promise.reject({status: 412, message: validation});      
    }
}

module.exports = SuppliersHourlyRateController;