const pgp = require('pg-promise')({
    query: e =>{
        
    }
})

const options = {
    host:'localhost',
    database: 'music-app'
}

const db = pgp(options);
module.exports = db;