const ModelHelper = require('./model-helper.model');

class OrdersModel extends ModelHelper
{
    constructor(){
        super('orders');
    }

    // findAll(page = 2, itemsPerPage = 30)
    // {
    //     let query = `SELECT * FROM ${this.tableName} 
    //         LIMIT ${itemsPerPage} OFFSET ${(page - 1) * itemsPerPage}`;
    
    //     return new Promise((resolve, reject) => 
    //     {            
    //         process.pg.query(query, (err, result) => {
    //             if(err)
    //             reject(ErrorHandlerController.parseDatabaseError(err));
    //             else
    //             resolve(result.rows);
    //         })
    //     }) 
    // }

    findAllWhereUserIsNotNull()
    {
        return 10;
    }

}

module.exports = OrdersModel;