class SuppliersHourlyRateModel 
{
    constructor(){}

    getResult(supplierId)
    {
        return new Promise((resolve, reject) => {

            process.pg.query(`SELECT hourlypay.pay
                FROM hourlypay
                INNER JOIN supplier ON (supplier.hourlypayid = hourlypay.id)
                WHERE supplier.id = ${supplierId}
            `, (err, result) => {

                if(err)
                reject(err)
                else
                resolve(result.rows);
            })
        })
    }
}

module.exports = SuppliersHourlyRateModel;