const ModelHelper = require('./model-helper.model');

class SuppliersModel extends ModelHelper
{
    constructor(){
        super('supplier');
    }
}

module.exports = SuppliersModel;