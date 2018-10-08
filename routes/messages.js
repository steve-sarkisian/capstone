var express = require('express');
var router = express.Router();
var db = require('../database.js');
const bcrypt = require('bcrypt');
var urlCrypt = require('url-crypt')('>sf22X@(/L4XBsm%.Pq>XHC:)/~a8Lp]Ee5;;?;*HD{xQVHy');

router.get('/', function(req, res, next) {
var Message = require('../models/message.js');
db
  .authenticate()
  .then(() => {
    Message.findAll({where: {receiverId: req.session.user.id}}).then(messages => {
      //do work!!!!
      res.render('messages', {'messages': messages});

    });
  });
});



module.exports = router;