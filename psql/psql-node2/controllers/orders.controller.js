const ErrorHandlerController = require('./error_handler.controller');
const OrdersModel = require('../models/orders.model');

class OrdersController
{
    constructor(){
        this.model = new OrdersModel();
    }

    getOrdersById(id)
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

module.exports = OrdersController;