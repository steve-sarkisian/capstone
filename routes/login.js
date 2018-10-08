var express = require('express');
var router = express.Router();
var db = require('../database.js');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', error: 'All good' });
});

router.post('/', function(req,res,next) {
  if(req.body.user =="" || req.body.password =="")
  {
    res.render('login', { title: 'Login', error: 'Login Failed!' });
    return;
  }
	var User = require('../models/user.js');
	db
  	.authenticate()
  	.then(() => {
		User.findOne({where: {user:  req.body.user}}).then(user => {
			//do work!!!!
			bcrypt.compare(req.body.password, user.get('password'), function(err, xyz) {
  			if(xyz) {
            req.session.user = user;
   					res.redirect('/messages');
  					} 
  					else 
  					{
            console.log("logins" + req.session.logins);
            req.session.logins = (req.session.logins == undefined) ? 1 : req.session.logins++;
            if(req.session.logins >4)
              { 
                res.render('login', { title: 'Login', error: 'Too many failed login attempts.  Try again later!'  });
              }
              else
              {
                res.render('login', { title: 'Login', error: 'Login failed!!'  });
              }
   					
  					} 
			});

		})
     .catch(err => {
    console.error('Unable to connect to the database:', err);
    res.render('login', { title: 'Login', error: 'Login Failed!' });
  });
	});
});

module.exports = router;