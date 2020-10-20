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

// Seed Function (to test)
const syncDbSeed = async () => {
  await conn.sync({force: true});
  const users = [
    { firstName: 'John', lastName: 'Doe', email: 'john@doe.com'},
    { firstName: 'Maria', lastName: 'Na', email: 'maria@na.com'},
    { firstName: 'Jose', lastName: 'Paz', email: 'jose@paz.com'},
  ]

  const [ John, Maria, Jose ] = await Promise.all(users.map(user => User.create(user)));

  return {
    users: {
      John,
      Maria,
      Jose
    }
  }
}

// Port & connection with db
conn.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log("Magic is coming from localhost:3001");
  });
});

module.exports = {
  app,
  syncDbSeed
}
