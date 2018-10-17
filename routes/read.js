var express = require('express');
var router = express.Router();
var db = require('../database.js');
var crypto = require('../crypto.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	var id = req.query.id;
  var Message = require('../models/message.js');
	db
  	.authenticate()
  	.then(() => {
		Message.findOne({where: {id:  id}}).then(message => {
        if(message.get('receiverId') == req.session.user['id'])
        {
         var rawMessage = message.get('message');
  			 res.render('read', { title: 'Your Message', message: crypto.decrypt(rawMessage) });
        }
        else
        {
          res.redirect('/messages');
        }
  		})
  	.catch(err => {
    console.error('Unable to connect to the database:', err);
      });
	});

});

module.exports = router;
