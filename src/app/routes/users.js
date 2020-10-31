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

  app.post('/users', (req, res) => {
    console.log(req.body);
    const {name_user, email, kms} = req.body;

    
    connection.query('INSERT INTO users SET?', {
      name_user,
      email,
      kms
    }, (err, result) => {
      res.redirect('/');
    });
      if(parseFloat(req.body.kms >= 4)) {
        console.log('Se añadió correctamente!');
      } else {
        console.log('Necesitas correr mas');
      }
  });
}
