var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.getAll()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        res.json('could not get users');
      });
  },
  post: function (req, res) {
    models.create(req.body)
      .then((result) => {
        // maybe write header status
        console.log(result);
        res.json('user added!');
      })
      .catch((err) => {
        console.log(err);
        res.json('could not add user!!');
      });
  }
};

/*



*/
