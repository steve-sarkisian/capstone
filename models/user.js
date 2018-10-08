const Sequelize = require('sequelize');
const db = require('../database.js');

const User = db.define('user', {
  user: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

module.exports = User;