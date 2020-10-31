const dbConnection = require('../../config/dbConnection');

module.exports = app => {
  
  const connection = dbConnection();

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (err, result) => {
      console.log(result);
      res.render('users/users', {
        users: result
      });
    });
  });
}
  