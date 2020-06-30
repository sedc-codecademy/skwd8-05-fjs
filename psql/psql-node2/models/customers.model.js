class CustomersModel
{
    constructor(){}

    findAll(page = 1, itemsPerPage = 20)
    {
        let query = `SELECT * FROM customer 
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
            process.pg.query(`SELECT * FROM customer WHERE id = ${id}`, 
                (err, result) => {

                if(err)
                reject(ErrorHandlerController.parseDatabaseError(err))
                else
                resolve(result.rows);
            })
        }) 
    }
}

module.exports = CustomersModel;