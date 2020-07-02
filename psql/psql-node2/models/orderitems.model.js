const ModelHelper = require('./model-helper.model');

class OrderItemsModel extends ModelHelper
{
    constructor(){
        super('orderitem');
    }
}

module.exports = OrderItemsModel;