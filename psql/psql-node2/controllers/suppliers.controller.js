const ValidationHelper = require('../helper/validation.helper');
const SuppliersModel = require('../models/suppliers.model');

class SuppliersController
{
    constructor(){
        this.model = new SuppliersModel();
    }

    getSupplierById(id)
    {
        let validation = ValidationHelper.validateEntityFields(
            {id}, 
            [{field: 'id', validations: ['number', 'required']}]
        );

        if( ! validation.length)
        return this.model.findById(id);
        else
        return Promise.reject({status: 412, message: validation});       

    }
}

module.exports = SuppliersController;