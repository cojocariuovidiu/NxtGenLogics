const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./db');
mongoose.connect(config.database);


const index = require('./routes/index');
const users = require('./routes/usersRoutes');
const bookingType = require('./routes/booking-typeRoutes');
const destRoutes = require('./routes/destinationRoutes');
const awbStoppages = require('./routes/awb-stoppagesRoutes');
const booking = require('./routes/bookingRoutes');
const branches = require('./routes/branchesRoutes');
const bundleAwb = require('./routes/bundle-awbRoutes');
const bundle = require('./routes/bundleRoutes');
const cnote = require('./routes/cnoteRoutes');
const company = require('./routes/companyRoutes');
const reason = require('./routes/reasonsRoutes');
const coloader = require('./routes/coLoaderRoutes');
const hub = require('./routes/hubRoutes');
const manifest = require('./routes/manifestRoutes');
const mode = require('./routes/modeRoutes');
const movement = require('./routes/movementsRoutes');
const purchase = require('./routes/purchaseOrderRoutes');
const staffs = require('./routes/staffsRoutes');
const trains = require('./routes/trainsRoutes');
const zone = require('./routes/zoneRoutes');
const master =require('./routes/masterRoutes');
const app = express();

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
app.use('/api/v1/users', users);
app.use('/api/v1/destRoute', destRoutes);
app.use('/api/v1/awbStoppages', awbStoppages);
app.use('/api/v1/bookingType', bookingType);
app.use('/api/v1/booking', booking);
app.use('/api/v1/branches', branches);
app.use('/api/v1/bundle', bundle);
app.use('/api/v1/bundleAwb', bundleAwb);
app.use('/api/v1/cnote', cnote);
app.use('/api/v1/company', company);
app.use('/api/v1/reason', reason);
app.use('/api/v1/hub', hub);
app.use('/api/v1/trains', trains);
app.use('/api/v1/staffs', staffs);
app.use('/api/v1/purchase', purchase);
app.use('/api/v1/movement', movement);
app.use('/api/v1/mode', mode);
app.use('/api/v1/manifest', manifest);
app.use('/api/v1/coloader', coloader);
app.use('/api/v1/zone', zone);
app.use('/api/v1/master',master);
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