class OrderProductsModel 
{
    constructor(){}

    getResult(customerId, orderId)
    {
        return new Promise((resolve, reject) => {

            process.pg.query(`
            SELECT 
                productname, 
                product.unitprice, 
                package,
                orders.ordernumber,
                orderitem.quantity
            FROM product
            INNER JOIN orderitem ON (orderitem.productid = product.id)
            INNER JOIN orders ON (orders.id = orderitem.orderid)
            WHERE orders.customerid = ${customerId} AND orders.ordernumber = '${orderId}'
            `, (err, result) => {

                if(err)
                reject(err)
                else
                resolve(result.rows);
            })
        })
    }
}

module.exports = OrderProductsModel;