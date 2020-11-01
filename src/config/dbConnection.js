var mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    database: 'heroku_f4032a3609fa0d9',
    user: 'b20017e4dc1dd6',
    password: 'b6b2d9be'
  });
}