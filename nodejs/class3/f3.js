const f = process.events;

const events = require('events').EventEmitter;
const e = new events();

function sum2({a, b})
{
    return a + b;
}

e.on('m-get-sum', (result) => {
    console.log('Local e, result is:', result);
});

//Listen on m-get-sum event and expect a value from calcution
f.on('m-get-sum', (result) => {
    console.log('Result is: ', result);
})

//Trigger new 'm-ev' event to request new calculation
f.emit('m-ev', {a: 1, b: 4});
e.emit('m-get-sum', sum2({a:1, b:4}))

//User register
/* 
    Fictional
    let makeUserProfile = require('let-user-profile.js');
    let creareUserDirectory = require('create-user-dir.js');
    ...
    e.on('new-registration');
*/
function newRegistration()
{
    makeUserProfile();
    createUserDirectory();
    sendWelcomeMail();
    /*...*/
    return 'dass';

    e.emit('new-registration');
    return 'asdsa';
}