const { Client } = require('pg');

//Make new connection string
//const connectionString = 'postgresql://username:password@127.0.0.1:5432/database'
const connectionString = 'postgresql://testuser:testuser@127.0.0.1:5432/sedc_example'

const client = new Client({
  connectionString: connectionString,
});


client.connect((err) => {
    if(err) 
    {
        console.log(err);
    }
    else
    console.log("DB connected");
});

client.on('error', (err) => {
  console.log(err);
})


module.exports = client;