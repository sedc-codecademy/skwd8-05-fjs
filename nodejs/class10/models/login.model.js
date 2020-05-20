class LoginModel
{
    constructor(){
        this.users = [
            {
                id: 1,
                email: 'test@test.com',
                password: 123456
            },
            {
                id: 2,
                email: 'test2@test.com',
                password: 567890
            }
        ]
    }

    checkUser(email, password)
    {
        return this.users.filter((user) => {
            
            if(user.email == email && user.password == password)
            return user;
            
            return false;
        })
    }
}

module.exports = LoginModel;