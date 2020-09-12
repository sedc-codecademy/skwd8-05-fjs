const express = require('express');
const app = express();
const https = require('https');
//const apiRouter = require('./routes/api-routes.js');

app.use(express.static(`${__dirname}/sedc-angular`))

app.all('/*', function(req, res, next) {
    res.sendFile('sedc-angular/index.html', { root: __dirname });
});

//app.use('/api', apiRouter);


app.listen(8080, "0.0.0.0", () => {
	console.log('Server is running');
})

//https.createServer(app, {SSL certicates})