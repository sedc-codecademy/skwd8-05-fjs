const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./router');

const PORT = 8080;
const IP = "0.0.0.0"

//Load files
app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//API routes
app.use('/',routes);



app.listen(PORT, IP, () => {
    console.log(`Server is active on ${IP}:${PORT}`);
})