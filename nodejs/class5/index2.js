const express = require('express');
const app = express(); //New instance
const http = require('http');
const path = require('path');

const port = process.env.port || 8080;

app.use(express.static( path.join(__dirname, '/public')) );

http.createServer(app).listen(port, () => {
    console.log('Http2 is running');
});