var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./routes/routes');

// 1 - Connect to the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meanapp', function(err) {
  if(err) {
    console.log('error connecting', err);
  } else {
    console.log('connected');
  }
});

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://superheroapp-db:1skyline@ds061218.mlab.com:61218/superheroapp-db', function(err) {
//   if(err) {
//     console.log('error connecting', err);
//   } else {
//     console.log('connected');
//   }
// });




// ROUTES
// var routes = require('./routes/routes');
// var routes = require('./routes/index');
// var users = require('./routes/users');
// var characters = require('./routes/characters');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Default routes
app.use('/', routes);
// app.use('/users', users); // users
// app.use('/characters', characters); // characters

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
