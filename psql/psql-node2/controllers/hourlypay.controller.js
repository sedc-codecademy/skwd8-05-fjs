const ValidationHelper = require('../helper/validation.helper');
const HourlyPayModel = require('../models/hourlypay.model');

class HourlyPayController
{
    constructor(){
        this.model = new HourlyPayModel();
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

module.exports = HourlyPayController;