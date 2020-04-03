//Dir
//Events
//modules
const fs = require('fs');
const path = require('path');
const baseDir = path.dirname(__dirname);

//__dirname - Returns location where exectuted script is stored (path)

//Open & Read dir data
//fs.readdir(path, (err, data) => {})

//Read dir for nodejs v12+
// fs.opendir(baseDir, (err) => { 
//     if(err)
//     {
//         if(err) throw err;
//         return;
//     }
//     console.log('Dir can be openned');    
// });

//Create dir
// fs.mkdir(path.join(baseDir, 'test/f_1/images'), {recursive: true}, (err) => {
//     if(err)
//     {
//         throw(err);
//     }

//     console.log('Successfully created dir');
// })

/*
    {recursive: true} to remove all folder works from v12+
*/
//Remove dir
// fs.rmdir(path.join(baseDir, 'test'), (err) => {
//     if(err)
//     throw err;

//     console.log('Folder removed');
// })

//Workaround is scanDir and rmDir in combination for node version < 12.0

//Change permissions
// fs.chmod(path.join(baseDir, 'test', 'test.txt'), 0o777, (e) => {
//     if(e)
//     throw e;

//     console.log('Success')
// })

//Events
const events = require('events').EventEmitter;

//emit, on
// const customEvents = new events();
// const ce = new events();

// //Assign customEvents instance of Events as a global instance
// process.events = customEvents;

// const f2 = require('./f2.js');
// const f3 = require('./f3.js');
// //Listening on event
// customEvents.on('index-my-custom-event', (evt, evt2) => {
//     console.log(evt);
// });

// customEvents.on('index-second-event', (evt) => {

// });

// customEvents.on('index-third-event', (evt) => {

// });

// ce.on('thisis-random-name', (evt) => {

// })

// ce.on('index-my-custom-event', (evt) => {
//     console.log(1, evt);
// })

//Triggers event
// customEvents.emit('index-my-custom-event', {a:1});

// ce.emit('index-my-custom-event', {c:3})
// f2.emit('index-my-custom-event', {d:2})
//on FE
//on document.querySelector('div').addEventListener('click', () => {}, false);
//emit document.querySelector('div').dispatchEvent(new Event('click'));

let {a, b} = require('./m1.js');
console.log(a, b);
b();
// let b = new a(); //a = Mathematic;