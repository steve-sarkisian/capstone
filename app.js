const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
var MemcachedStore = require('connect-memjs')(session);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var messagesRouter = require('./routes/messages');
var readRouter = require('./routes/read');
var writeRouter = require('./routes/write');
var dbdumpRouter = require('./routes/dbdump');
var logoffRouter = require('./routes/logoff');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var store = new MemcachedStore({servers: [process.env.MEMCACHEDCLOUD_SERVERS], username: process.env.MEMCACHEDCLOUD_USERNAME, password: process.env.MEMCACHEDCLOUD_PASSWORD});

app.use(
  session({
    secret: process.env.SESSIONSECRET, // don't put this into your code at production.  Try using saving it into environment variable or a config file.
    resave: true,
    saveUninitialized: false,
    store: store
  })
);

app.use('/login', loginRouter);
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/dbdump', dbdumpRouter);



app.use((req, res, next) => {
  if (req.session.user) {
    console.log(req.session.user);
    next();
  } else {
    res.redirect('/login');
  }
});

app.use('/messages', messagesRouter);
app.use('/users', usersRouter);
app.use('/read', readRouter);
app.use('/write', writeRouter);
app.use('/logoff', logoffRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  if (req.app.get('env') == 'development'){ require('dotenv').load(); }
  //require('dotenv').load();
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
