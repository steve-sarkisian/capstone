var express = require('express');
var router = express.Router();
var db = require('../database.js');
var crypto = require('../crypto.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var User = require('../models/user.js');
  db
    .authenticate()
    .then(() => {
    User.findAll().then(users => {
      res.render('write', { title: 'Compose', 'tos': users });
    })
    });
});

router.post('/', function(req, res, next) {
console.log("selected user is: " + req.body.userlist)
var Message = require('../models/message.js');
db
  .authenticate()
  .then(() => {
    return Message.create({
    senderId: req.session.user.id,
    senderName: req.session.user.user,
    receiverId: req.body.userlist,
    message: crypto.encrypt(req.body.message)
  });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  res.redirect('/messages');
});

module.exports = router;
