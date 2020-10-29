const app = require('./config/server');

require('./app/routes/users')(app);

//startingthe server
app.listen(app.get('port'), () => {
  console.log('Servidor en el Puerto:', app.get('port'));
});