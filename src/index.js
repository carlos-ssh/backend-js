const app = require('./config/server');
const express = require('express');
const path = require('path');
const mysql = require('mysql');

require('./app/routes/users')(app);

//starting the server
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Servidor en el Puerto:', app.get('port'));
});