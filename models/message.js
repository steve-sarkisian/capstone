const Sequelize = require('sequelize');
const db = require('../database.js');

const Message = db.define('message', {
  senderId: {
    type: Sequelize.INTEGER
  },
  senderName: {
    type: Sequelize.STRING
  },
  receiverId: {
    type: Sequelize.INTEGER
  },
   message: {
    type: Sequelize.STRING
  }

});

module.exports = Message;