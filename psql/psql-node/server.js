const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Connect with DB, must be first
const db = require('./config/pg.js');
process.pg = db;
//All scripts that are using DB should be included after process.pg
const startupScripts = require('./queries/startup.js');

setTimeout(() => {
    startupScripts.checkTableExist('customer');
}, 2000)

const PORT = 8080;
const IP = "0.0.0.0"

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//API routes

app.get('/customers', async (req, res) => {

    let query = `SELECT * FROM customer `;

    let {page, items} = req.query; 

    if( ! page || ! items)
    {
        page = 1;
        items = 20;
    }

    //LIMIT 20 OFFSET 0 (page = 1)
    //LIMIT 20 OFFSET 20 (page = 2)
    query += `LIMIT ${items} OFFSET ${(page - 1) * items}`;

    await process.pg.query(query, (err, result) => {

        if(err)
        {
            res.status(412).json(err)
        }
        else
        res.status(200).json(result.rows);
    })
});

app.get('/customers/:id', async (req, res) => {

    let {id} = req.params;
    
    await process.pg.query(`SELECT * FROM customer WHERE id = ${id}`, (err, result) => {

        if(err)
        {
            res.status(412).json(err)
        }
        else
        res.status(200).json(result.rows);
    })
})




app.listen(PORT, IP, () => {
    console.log(`Server is active on ${IP}:${PORT}`);
})