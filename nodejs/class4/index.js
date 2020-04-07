//express
const express = require('express');
const app = express(); //New instance
const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');
    
const port = process.env.port || 80, 
    ports = process.env.ports || 8443, 
    ip = "0.0.0.0";
//80 - HTTP, 443 - HTTPS
//alternative ports > 1300 < 65000

//Alternative 80
//8000, 8080, 8081

//Alternative 443
//4443, 8083, 8443

//On FE development
//80 port 3000, 4200, 8000, 8080

//IP ADDRESS
/*
    127.0.0.1 = localhost
    192.168.100.5 - visible inside my network
    0.0.0.0 - visible to internet
*/

// var options = {
//     dotfiles: 'ignore',
//     etag: true,
//     index: true,
//     extensions: ['html', 'ico'],
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//       res.set('x-timestamp', Date.now())
//     }
//   }

//static content
//localhost/
app.use(express.static( path.join(__dirname, '/public')) );

//routing

// app.get('/', (req, res) => {
//     const fs = require('fs');
//     fs.readFile(path.join(__dirname, '/public/index2.html'), (e, d) =>{
//         if(e)
//         res.status(404).send();
//         else
//         res.status(200).send(d.toString());
//     })
    
// });

//localhost/api/....
//HTTP GET (CRUD)
app.get('/api/', (req, res) => {
    //200 = OK - HTTP RESPONSE CODE
    res.status(200).json({message: 'Test endpoint'});
});

app.get('/api/users', (req, res) => {

    let users = [
        {
            id: 1,
            name: "user 1",
            lastname: "something"
        },
        {
            id: 2,
            name: "user 2",
            lastname: "something else"
        }
    ];

    res.status(200).json(users);
});

app.get('/api/quiz', (req, res) => {
    fs.readFile('example_1.json', (err, data) => {
        if(err)
        res.status(412).json({error: err})
        else
        res.status(200).json(JSON.parse(data.toString()))
    })
});

function checkUser(number)
{
    return parseInt(number) > 1000
}

//localhost/api/dynamic/123
//localhost/api/dynamic/123/345
//localhost/api/dynamic/123/345/567
app.get('/api/dynamic/:id/:number?/:string?', (req, res) => {
    //req.params = { id: 123, number: undefined, string: undefined }
    //req.params = { id: 123, number: 345, string: undefined }
    //req.params = { id: 123, number: 345, string: 567 }
    if(checkUser(req.params.id))
    res.status(200).json({user: true})
    else if ( ! checkUser(req.params.id) )
    res.status(200).json({user: false})
});

//localhost/api/products?a=10&b=20&c=30
//localhost/api/products/123?filter=name&way=DESC
//localhost/api/products?filter=name&way=DESC
app.get('/api/products/:id?', (req, res) => {
    console.log(req.params.id, req.query);

    if( ! req.params.id)
    {
        if(parseInt(req.query.a) < parseInt(req.query.b) )
        res.status(200).json({result: "a is smaller than b"})
        else
        res.status(200).json({result: "a is bigger than b"});
    }
    else
    {
        if(parseInt(req.query.a) < parseInt(req.query.b) )
        res.status(200).json({result: "a is smaller than b and userid is: "+req.params.id})
        else
        res.status(200).json({result: "a is bigger than b and userid is: "+req.params.id});
    }
})

//Start the server 
// app.listen(port, ip, () => {
//     console.log(`Server is running: open localhost:${port} in browser`);
// })

http.createServer(app).listen(port, ip, () => {
    console.log('Http is running');
})

https.createServer({
    // cert: 'location of SSL cert file',
    // ca: 'location of SSL ca file'
}, app).listen(ports, ip, () => {
    console.log('Https is running');
});


//middleware

//https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2
//'/s/:fontfamily/:version/:fontfilename'
/*
    /s
    :fontfamily = opensans
    :version = v17
    :fontfilename = mem8YaGs126MiZpBA-UFVZ0b.woff2

    req.params.fontfamily,
    req.params.version
    req.params.fontfilename
*/

/*
https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js

    :repositoryname = npm
    :libraryname = docsearch.js@2
    :path = dist/cdn/docsearch.min.js
*/