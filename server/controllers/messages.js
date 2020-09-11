var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.getAll()
      .then((messages) => {
        console.log(messages);
        res.json(messages);
      })
      .catch((err) => {
        res.json(err);
      });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.create(req.body)
      .then((results) => {
        // may need to send headers
        res.json('Message posted!');
      })
      .catch((err) => {
        res.json(`Error posting message: ${err}`);
      });
  } // a function which handles posting a message to the database
};



/*
## input
request and response

## output
message added to sql db and a response to the client with a success or error message

## key pieces
to access the message request data


*/

