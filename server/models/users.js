var db = require('../db');

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users', (err, users) => {
        if (err) {
          reject(err);
        } else {
          resolve(users);
        }
      });
    });
  },
  create: function (user) {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO users (null, ${user.username}`, (err, results) => {
        if (err) {
          reject(err);
        } else {
          console.log(results);
          resolve(results);
        }
      });
    });
  }
};
