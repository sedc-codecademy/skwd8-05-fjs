const ErrorHandlerController = require('./error_handler.controller');
const CustomersModel = require('../models/customers.model');

class CustomersController
{
    constructor(){
        this.model = new CustomersModel();
    }

    getCustomerById(id)
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

module.exports = CustomersController;