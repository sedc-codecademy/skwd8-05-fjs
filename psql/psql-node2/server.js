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

//Load files
app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//API routes
const router = require('./config/router.js');
app.use("/", router);

app.listen(PORT, IP, () => {
    console.log(`Server is active on ${IP}:${PORT}`);
})