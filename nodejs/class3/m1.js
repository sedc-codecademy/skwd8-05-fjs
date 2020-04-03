//modules

//Not valid
exports = a = 10;
exports = b = 20;
exports = c = 30;

d = 40;

exports = d;

exports = {
    a: 10,
    b: 20
}

//Valid
module.exports = {
    a: 10,
    b: 20
};

class Mathematic
{
    constructor()
    {
        console.log(13)
    }
}

const fs = require('fs');
const e = require('events').EventEmitter;
const event = new e();

module.exports = {
    a: 10,
    b: () => {console.log('b')},
    //fs: fs,
    event: event,
    Mathematic: Mathematic
}