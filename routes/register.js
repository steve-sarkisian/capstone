var express = require('express');
var router = express.Router();
var db = require('../database.js');
const bcrypt = require('bcrypt');


router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.post('/', function(req, res, next) {
if(req.body.user =="" || req.body.password =="")
  {
    res.render('register', { title: 'Register', error: 'Registration Failed!' });
    return;
  }
var User = require('../models/user.js');
db
  .authenticate()
  .then(() => {
    let hash = bcrypt.hashSync(req.body.password, 10);
    return User.create({
    user: req.body.user,
    password: hash
  });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  res.render('registered', { title: 'Register' });
});

module.exports = router;
