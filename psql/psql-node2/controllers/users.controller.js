const ValidationHelper = require('../helper/validation.helper');
const UsersModel = require('../models/users.model');

class UsersController
{
    constructor(){
        this.model = new UsersModel();
    }

    findConditionalUser(confitionalFields = [])
    {
        let query = `SELECT id, email, status FROM users WHERE `;

        let fields = confitionalFields.map(field => {
            if(field.name !== 'password')
            return `${field.name} = '${field.value}'`;
            else(field.name === 'password')
            return `${field.name} = ${field.value}`;
        })

        query += fields.join(" AND ");
        
        return this.model.executeRawQuery(query);
    }

    getUserRoles(userId)
    {
        let query = `SELECT rid AS roleId,
                            name AS roleName
                     FROM users_roles
                     INNER JOIN roles ON (roles.id = rid)
                     WHERE users_roles.uid = ${userId}`;

        return this.model.executeRawQuery(query)
    }
}

module.exports = UsersController;