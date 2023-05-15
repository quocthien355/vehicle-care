var createError = require('http-errors');
var express = require('express');
var path = require('path');

const exphbs = require("express-handlebars");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');

var indexRouter = require('./routes/index');

var loginRouter = require('./routes/login');
var branchesRouter = require('./routes/branches');
var ordersRouter = require('./routes/orders');
var servicesRouter = require('./routes/services');
var staffsRouter = require('./routes/staffs');
var usersRouter = require('./routes/users');
var vehiclePartsRouter = require('./routes/vehicle-parts');
var vehicleRouter = require('./routes/vehicles');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/branches', branchesRouter);

app.use('/orders', ordersRouter);

app.use('/services', servicesRouter);

app.use('/staffs', staffsRouter);
app.use('/vehicle-parts',vehiclePartsRouter)
app.use('/vehicles',vehicleRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
