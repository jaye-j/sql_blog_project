const promise = require('bluebird');

//init options

let initOptions = {
    promiseLib: promise
};

let config = {
    host: 'localhost',
    port: 5432,
    database: 'blogs_database',
    user: 'postgres'
};

let pgp = require('pg-promise')(initOptions);

let db = pgp(config);

module.exports = db;