const FSModel = require('./fs.model');
const ValidationModel = require('./validation.model');

class LoginModel extends ValidationModel
{
    constructor()
    {
        super();
        this.fsModel = new FSModel();
        this.users = this.fsModel.openFile('./data', 'users.json');
    }

    checkUserLoginCredentials(email, password)
    {
        //[{id: 1, fullName: 'a'}];
        if( ! email || ! password)
            return false;
        else if( ! this.validateEmail(email) )
            return false;
        else 
        {
            return this.users.filter(u => {
                if(u.email == email && u.password == password)
                return u;
                
                return false;
            });
        }
    }
}

module.exports = LoginModel;