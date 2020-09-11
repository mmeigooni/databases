var db = require('../db');

// ## input
// none

// ## output
// an array of message objects, which is parsed for me by express

// ## key pieces
// a SELECT query (use sql syntax)
// a way to send the query to the db

// ## Justify
// we are using this function to access our SoT (our db) and provide that data to the rest of the app

// ## Explain
// We want to query the db using db.query(), where we can pull messageText, createdAt, and roomname directly, but will need to INNER JOIN users ON the messages.idUsers = users.id and include users.username in the query request
// then run a callback on the results

///////////////////////////////////////////////////////

// # CREATE

// ## input
// a message

// ## output
// a new row in sql, in the messages table

// ## key pieces
// need a db query with INSERT syntax.
// gonna get an error and result, log the result
// make this a promise

// ## Justification
// This function will add newly created message data as a row to our messages table in our sql db

// ## Explanation
// Return a new promise that initiates a sql query that will INSERT into messages and need to add correct foreign key on username SELECT id FROM ...

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query('SELECT messages.messageText, messages.createdAt, messages.roomname, users.username FROM messages INNER JOIN users ON messages.idUsers=users.id', (err, messages) => {
        if (err) {
          reject(err);
        } else {
          resolve(messages);
        }
      });
    });
  }, // a function which produces all the messages
  create: function (newMessage) {
    console.log(`newMessage: ${newMessage}`);
    return new Promise((resolve, reject) => {
      let queryString = `INSERT INTO messages (null, ${newMessage.message}, null, SELECT id FROM users WHERE username = ${newMessage.username}, ${newMessage.roomname}`;
      console.log(`querySTring: ${queryString}`);
      db.query(queryString, (err, results) => {
        if (err) {
          reject(err);
        } else {
          console.log(results);
          resolve(results);
        }
      });
    });
    // insert a row into the table via insert -- worry about users?
  } // a function which can be used to insert a message into the database
};
