const cors = (req, res, next) => {
    //Valid for server localhost:80
    res.setHeader('Access-Control-Allow-Origin', '*'); //* = wildcard
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, APPKEY') //MIME => image/jpeg, video/mp4..
    res.setHeader('Access-Control-Max-Age', 4000);
   
    /*
    Access-Control-Allow-Origin: http://localhost:8080
    Access-Control-Allow-Methods: POST, GET, OPTIONS
    Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
    Access-Control-Max-Age: 86400
    */
    console.log('Cors');
    next();
};

module.exports = cors;