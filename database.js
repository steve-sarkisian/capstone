const Sequelize = require('sequelize');
require('dotenv').load();

const DB = process.env.DATABASE;
const LOGIN = process.env.DBLOGIN;
const PASSWORD = process.env.DBPASSWORD;
const SERVER=process.env.DBSERVER;

const db = new Sequelize(DB, LOGIN, PASSWORD, {
  host: SERVER,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = db;

