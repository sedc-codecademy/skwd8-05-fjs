const ValidationModel = require('./validation.model');
const FSModel = require('./fs.model');

class RegisterModel extends ValidationModel
{
    constructor(){
        super();

        this.fsModel = new FSModel();
    }

    checkForExistingUser(email)
    {
        let users = this.fsModel.openFile('./data', 'users.json');
        return users.filter((user) => user.email === email);
    }

    makeRegistration(email, password)
    {
        if( ! this.checkForExistingUser(email).length )
        {
            let result = this.fsModel.appendItem('./data', 'users.json', {email, password});
            console.log(result);
            return true;
        }
        else
        return false;
    }
}

module.exports = RegisterModel;