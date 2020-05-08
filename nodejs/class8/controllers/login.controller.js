const LoginModel = require('../models/login.model');

class LoginController
{
    constructor(){
        this.model = new LoginModel();
        //this.orderModel = new OrderModel();
    }

    //Connected to a route
    makeLogin(email, password)
    {
        let user = this.model.checkUserLoginCredentials(email, password);
        //let orders = this.ordersModel.getUserOrders(user);

        return user ? user[0] : false;
    }

    //Connected to a route
    checkCurrentUser(email)
    {
        return this.model.validateEmail(email);
    }
}

module.exports = LoginController;