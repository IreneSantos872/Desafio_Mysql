const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'F14i08a22@',
    database: 'movies_control'
})

module.exports = Connection;
