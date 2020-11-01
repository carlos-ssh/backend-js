var mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'https://corredores-666-5895a.firebaseio.com/',
    database: 'user_portal',
    user: 'root',
    password: '1234567890'
  });
}