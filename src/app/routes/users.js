const dbConnection = require('../../config/dbConnection');


module.exports = app => {
  
  const connection = dbConnection();

  app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, result) => {
      console.log(err);
      res.render('users/users', {
        users: result
      });
    });
  });
};