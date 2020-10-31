var mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    database: 'user_portal',
    user: 'root',
    password: '1234567890'
  });
}