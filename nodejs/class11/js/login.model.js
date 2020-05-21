//Will take care about all functions and BE communication

class LoginModelDataParser
{
    static backendDataToFrontend(data)
    {
        return {
            id: 1,
            email: data.email,
            fullname: data.firstname_and_lastname
        }
    }

    static frontendDataToBackend(data)
    {
        return {
            id: 1,
            email: data.email,
            firstname_and_lastname: data.fullname
        }
    }
}


class LoginModel
{
    constructor(){
        this.formData = new FormData(document.querySelector('.login-form'));
    }

    recreateFormData()
    {
        this.formData = undefined
        this.formData = new FormData(document.querySelector('.login-form'));
    }

    makeLoginCall()
    {
        this.recreateFormData();
        let data = this.getFormValues();
        let validate = this.validateValues(data);

        if( ! validate.length)
        {
            //fetch
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(LoginModelDataParser.backendDataToFrontend({
                            id: 1,
                            email: data.email,
                            firstname_and_lastname: data.fullname
                        })
                    )
                }, 1000)
            })
        }
        else
        {
            return validate;
        }
    }

    getCurrentLogedInUser()
    {

    }

    validateValues(data)
    {
        let missing = [];

        for(let key in data)
        {
            if( ! data[key] )
            missing.push(key)
        }

        return missing;
    }

    getFormValues()
    {
        let values = {};

        for(let parts of this.formData)
        values[parts[0]] = parts[1];

        return values;
    }
}
