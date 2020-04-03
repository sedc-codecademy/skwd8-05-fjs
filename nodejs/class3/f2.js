// const events = require('events').EventEmitter;

// const m = new events();

// m.on('index-my-custom-event', (e) => {
//     console.log(e);
// })

//Get global instance of events "as local"
const m = process.events;

function sum({a, b})
{
    return a+b;
}

//Set global listener 'm-ev' which will listen on request for new sum
m.on('m-ev', (evt) => {
    //When calculation is made , trigger event m-get-sum and pass the value
    m.emit('m-get-sum', sum(evt));
})

module.exports = m;