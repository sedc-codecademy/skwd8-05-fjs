const ErrorHandlerController = require('../controllers/error_handler.controller');

class ModelHelper
{
    constructor(tableName)
    {
        this.tableName = tableName;
    }

    findAll(page = 1, itemsPerPage = 20)
    {
        let query = `SELECT * FROM ${this.tableName} 
            LIMIT ${itemsPerPage} OFFSET ${(page - 1) * itemsPerPage}`;
    
        return new Promise((resolve, reject) => 
        {            
            process.pg.query(query, (err, result) => {
                if(err)
                reject(ErrorHandlerController.parseDatabaseError(err));
                else
                resolve(result.rows);
            })
        }) 
    }

    findById(id)
    {
        return new Promise((resolve, reject) => {
            process.pg.query(`SELECT * FROM ${this.tableName}  WHERE id = ${id}`, 
                (err, result) => {

                if(err)
                reject(ErrorHandlerController.parseDatabaseError(err))
                else
                resolve(result.rows);
            })
        }) 
    }

    executeRawQuery(query)
    {console.log(query)
        return new Promise((resolve, reject) => {
            process.pg.query(query, (err, result) => {
                if(err)
                reject(ErrorHandlerController.parseDatabaseError(err))
                else
                resolve(result.rows)
            })
        })
    }
}

module.exports = ModelHelper;