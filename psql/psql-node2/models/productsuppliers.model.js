class SuppliersProductModel 
{
    constructor(){}

    getResult(productId)
    {
        return new Promise((resolve, reject) => {

            process.pg.query(`SELECT supplier.id,
                    supplier.companyname
            FROM supplier
            INNER JOIN product ON (product.supplierid = supplier.id)
            WHERE product.id = ${productId}
            `, (err, result) => {

                if(err)
                reject(err)
                else
                resolve(result.rows);
            })
        })
    }
}

module.exports = SuppliersProductModel;