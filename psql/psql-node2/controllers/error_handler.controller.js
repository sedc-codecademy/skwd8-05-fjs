class ErrorHandlerController
{
    static errorObject = {
        type: undefined,
        message: undefined,
        status: 400
    }

    static parseDatabaseError(err)
    {
        let errorObject = ErrorHandlerController.errorObject;
        let {severity, message} = err;

        errorObject.type = severity;
        errorObject.message = message;

        if(err.routine === 'errorMissingColumn')
        errorObject.status = 412;
        else if(err.routine === 'Somethingelse')
        errorObject.status = 400;

        return errorObject;
    }

    static parseMissingField(fieldName)
    {
        let errorObject = ErrorHandlerController.errorObject;
        errorObject.type = 'Error',
        errorObject.message = `Field with name ${fieldName} is missing`;

        return errorObject;
    }

    static fieldNotCorrectType(fieldName, desiredType)
    {
        let errorObject = ErrorHandlerController.errorObject;
        errorObject.type = 'Error',
        errorObject.message = `Field with name ${fieldName} is not of type ${desiredType}`;

        return errorObject;
    }
}

module.exports = ErrorHandlerController;