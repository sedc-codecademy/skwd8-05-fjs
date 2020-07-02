const ModelHelper = require('./model-helper.model');

class HorlypayModel extends ModelHelper
{
    constructor(){
        super('hourlypay');
    }
}

module.exports = HorlypayModel;