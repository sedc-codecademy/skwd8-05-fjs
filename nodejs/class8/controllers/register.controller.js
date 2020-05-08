const RegisterModel = require('../models/register.model');

class RegisterController
{
    constructor(){
        this.model = new RegisterModel();
    }

    createNewUser(email, password)
    {
        return this.model.makeRegistration(email, password);
    }
}

module.exports = RegisterController;