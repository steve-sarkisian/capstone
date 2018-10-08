var express = require('express');
var router = express.Router();
var passport = require('passport')


// middleware that is specific to this router
router.use(function auth (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/')
  })
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
