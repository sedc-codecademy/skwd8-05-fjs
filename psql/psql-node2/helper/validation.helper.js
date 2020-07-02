class ValidationHelper
{
    static errorObject = {
        type: undefined,
        message: undefined,
        status: 400
    }

    static parseMissingField(fieldName)
    {
        let errorObject = ValidationHelper.errorObject;
        errorObject.type = 'Error',
        errorObject.message = `Field with name ${fieldName} is missing`;

        return errorObject;
    }

    static fieldNotCorrectType(fieldName, desiredType)
    {
        let errorObject = ValidationHelper.errorObject;
        errorObject.type = 'Error',
        errorObject.message = `Field with name ${fieldName} is not of type ${desiredType}`;

        return errorObject;
    }

    static fieldIsEmpty(fieldName)
    {
        let errorObject = ValidationHelper.errorObject;
        errorObject.type = 'Error',
        errorObject.message = `Field with name ${fieldName} doesn't have any value`;

        return errorObject;
    }

    static isNaN(value)
    {
        return isNaN(value);
    }

    static isEmpty(value)
    {
        return ! value;
    }

    static validateEntityFields(entityFieldsObject, validatorsArray)
    {
        //Scan for error in entityFieldsObject
        let errors = validatorsArray.map(item => {
            
            //Get validators per field
            let validators = item.validations;

            //entityFieldsObject
            /*
                {
                    customerId: 5,
                    orderId: 10
                }
            */

            //item.field = 'orderId'

            //entityFieldsObject['orderId']

            //Test does field exist before running the validators
            if(entityFieldsObject[item.field])
            {
                //Field value for testing
                let testField = entityFieldsObject[item.field];
                
                //Return errors in array if found for the field
                let tmpErrors = validators.map(type => {

                    //Test is field not a number
                    if(type === "number")
                    return ValidationHelper.isNaN(testField) ? 
                            ValidationHelper.fieldNotCorrectType(item.field, type) : false;

                    //Test is field having any value
                    else if(type === "required")
                    return ValidationHelper.isEmpty(testField) ?
                            ValidationHelper.fieldIsEmpty(item.field) : false;

                    //If all good skip this field in return
                    else
                    return false;
                })

                //If errors are present return flattened array with errors or false
                return tmpErrors.length ? tmpErrors.filter(i => i).flat() : false;
            }
            else
            return ValidationHelper.parseMissingField(item.field)
        });


        //return all fields errors as flattened array
        return errors.filter(i => i.length).flat();
       
    }
}

module.exports = ValidationHelper;