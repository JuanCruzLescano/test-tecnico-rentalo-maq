const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const { conn } = require('./db');
const routes = require('./routes');
const { User } = require('./db');
const cors = require('cors');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}));
app.use(cors());


// Rutas
app.get('/', (req, res) => {
  res.send('Test Tecnico Rentalo MAQ')
});
app.use('/', routes)

// Port & connection with db
let server;
conn.sync({ force: true }).then(() => {
  server = app.listen(3001, () => {
    console.log("Magic is coming from localhost:3001");
  });
});

module.exports = {
  app,
  server
}
