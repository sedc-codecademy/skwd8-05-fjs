const ValidationHelper = require('../helper/validation.helper');
const OrderItemsModel = require('../models/orderitems.model');

class OrderItemsController
{
    constructor(){
        this.model = new OrderItemsModel();
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

module.exports = OrderItemsController;