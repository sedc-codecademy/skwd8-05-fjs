const ModelHelper = require('./model-helper.model');

class CustomersModel extends ModelHelper
{
    constructor(){
        super('customer');
    }
}

module.exports = CustomersModel;