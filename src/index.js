const app = require('./config/server');
const express = require('express');
const path = require('path');
const mysql = require('mysql');

require('./app/routes/users')(app);

//startingthe server
app.listen(app.get('port'), () => {
  console.log('Servidor en el Puerto:', app.get('port'));
});