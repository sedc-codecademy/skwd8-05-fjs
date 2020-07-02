const ErrorHandlerController = require('./error_handler.controller');
const ValidationHelper = require('../helper/validation.helper');
const CustomersModel = require('../models/customers.model');

class CustomersController
{
    constructor(){
        this.model = new CustomersModel();
    }

    getCustomerById(id)
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

module.exports = CustomersController;