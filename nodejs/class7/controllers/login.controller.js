class LoginController
{
    constructor(){
        this.users = [
            {
                id: 1,
                email: 'test@test.com',
                password: '12345',
                fullName: 'Test User',
                dob: '11/11/2000'
            },
            {
                id: 2,
                email: 'test2@test.com',
                password: '45678'
            }
        ];

        this.email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    validateEmail(email)
    {
        let reg = new RegExp(this.email);
        return reg.test(email);
    }

    makeLogin(email, password)
    {
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

module.exports = LoginController;