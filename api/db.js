require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

// import models
const user = require('./models/user')


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, 
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const User = user(sequelize, DataTypes)

module.exports = {
  User,
  conn: sequelize
}