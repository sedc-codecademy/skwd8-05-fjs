const ValidationHelper = require('../helper/validation.helper');
const UsersController = require('./users.controller');

class LoginController extends UsersController
{
    constructor(){
        super();
    }

    async login({email, password})
    {
        let validation = ValidationHelper.validateEntityFields(
            {email, password}, 
            [
                {field: 'email', validations: ['required']},
                {field: 'password', validations: ['required']}
            ]
        );

        if( ! validation.length)
        return this.findConditionalUser([
            {name: 'email', value: email},
            {name: 'password', value: `MD5('${password}')`} //Recommended algorythm for hashing SHA512
        ])
        else
        return Promise.reject({status: 412, message: validation});    
    }
}

module.exports = LoginController;