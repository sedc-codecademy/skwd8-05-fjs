class ValidationModel
{
    constructor(){
        this.email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }

    validateEmail(email)
    {
        let reg = new RegExp(this.email);
        return reg.test(email);
    }
}

module.exports = ValidationModel;