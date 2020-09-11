var mysql = require('mysql');
import SQLAUTH from '../sqlAuth.js';
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

dbConnection = mysql.createConnection({
  user: 'root',
  password: SQLAUTH,
  database: 'chat'
});

dbConnection.connect();

exports.dbConnection = dbConnection;