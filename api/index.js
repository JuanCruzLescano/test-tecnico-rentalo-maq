const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const { conn } = require('./db')
const routes = require('./routes')

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}));


// Rutas
app.get('/', (req, res) => {
  res.send('Test Tecnico Rentalo MAQ')
});
app.use('/', routes)



// Port & connection with db
conn.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log("%s listening at 3001");
  });
});

module.exports = {
  app
}