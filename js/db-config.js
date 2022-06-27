const pg = require('pg');

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    password: 'root',
    database: 'postgres',
    port: 5432,
})

module.exports = client;