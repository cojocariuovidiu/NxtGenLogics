var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./db');
mongoose.connect(config.database);


var index = require('./routes/index');
var users = require('./routes/users');
var destRoutes = require('./routes/destinationRoutes');
var awbStoppages = require('./routes/awb-stoppagesRoutes');
var bookingType = require('./routes/booking-typeRoutes');
var booking = require('./routes/bookingRoutes');
var branches = require('./routes/branchesRoutes');
var bundleAwb = require('./routes/bundle-awbRoutes');
var bundle = require('./routes/bundleRoutes');
var cnote = require('./routes/cnoteRoutes');
var reason = require('./routes/reasonsRoutes');
var trains = require('./routes/trainsRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS Setting

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authToken, userId");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/api/v1/destRoute', destRoutes);
app.use('/api/v1/awbStoppages', awbStoppages);
app.use('/api/v1/bookingType', bookingType);
app.use('/api/v1/booking', booking);
app.use('/api/v1/branches', branches);
app.use('/api/v1/bundle', bundle);
app.use('/api/v1/bundleAwb', bundleAwb);
app.use('/api/v1/cnote', cnote);
app.use('/api/v1/reason', reason);
app.use('/api/v1/trains', trains);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;