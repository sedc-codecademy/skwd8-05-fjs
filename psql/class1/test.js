//SAMPLE

const pg = require('node-postgres');

router.get('/users', (req, res) => {

    pg.query('SELECT id, email, fullname FROM users WHERE user_id = 1 ', (error, result) => {

        if(error)
        res.status(400).json(error)
        else
        res.status(200).json(result.rows);
    })

});