
const session = (req, res, next) => {
    console.log('Session');
    // if(process.req && process.req.id)
    // console.log(process.req.id)
    // else
    // {
    //     process.req = {id : Math.floor(Math.random() * 100)};
    //     console.log('New id', process.req.id);
    // }

    // process.req.user = {
    //     user: 'Username',
    //     password: 'asdasdasds'
    // }

    // console.log(process.req);
    // console.log(req.session.id)
    // if( ! req.session.user )
    // req.session.user = {username: `Igor${Math.floor(Math.random()*10)}`}

    // req.session.count = ! req.session.count ? 1 : req.session.count + 1;

    // console.log(req.session.count);
    if( ! req.session.preferences )
    req.session.preferences = {
        background: 'red',
        fontSize: '14px',
        color: 'white'
    }
    next();
}

module.exports = session;