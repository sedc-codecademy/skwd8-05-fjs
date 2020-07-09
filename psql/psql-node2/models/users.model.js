const ModelHelper = require('./model-helper.model');

class UsersModel extends ModelHelper
{
    constructor(){
        super('users');
    }
}

module.exports = UsersModel;