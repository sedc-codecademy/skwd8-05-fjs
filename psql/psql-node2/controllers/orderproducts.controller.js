const ErrorHandlerController = require('./error_handler.controller');
const ValidationHelper = require('../helper/validation.helper');
const OrderProductsModel = require('../models/orderproducts.model');

class OrderProductsController
{
    constructor(){
        this.model = new OrderProductsModel();
    }

    getProductsByOrder(customerId, orderId)
    {
        let validation = ValidationHelper.validateEntityFields(
            {customerId, orderId}, //{ customerId: 444, orderId: 333}
            [
                {field: 'customerId', validations: ['number', 'required', 'email']},
                {field: 'orderId', validations: ['number', 'required']}
            ]
        );

        if( ! validation.length)
        return this.model.getResult(customerId, orderId);
        else
        return Promise.reject({status: 412, message: validation});       
 
    }
}

module.exports = OrderProductsController;