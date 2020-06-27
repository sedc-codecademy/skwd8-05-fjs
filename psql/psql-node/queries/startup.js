
const getAllTables = async () =>
{
    return new Promise((resolve, reject) => {
        process.pg.query(`SELECT
	    *
        FROM
            pg_catalog.pg_tables
        WHERE
            schemaname != 'pg_catalog'
        AND schemaname != 'information_schema';`, (error, result) => {

            if(error)
            {
                console.log(error);
                reject(error)
            }
            else
            resolve(result.rows);

        })
    }) 
}

const checkTableExist = async (tableName) => 
{
    let tables = await getAllTables();
    /*
        tables.filter((table) => {
            return if(table.tablename === tableName)
        })
    */
    if( ! tables.filter(table => table.tablename === tableName).length )
    {
        throw new Error(`Table ${tableName} doesn't exist`);
    }
    else
    {
        console.log('All tables are here')
        return true;
    }
}

module.exports = {getAllTables, checkTableExist}