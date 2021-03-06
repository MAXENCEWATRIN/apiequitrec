var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var utilisateursRoutes = require('./routes/utilisateurs');
var dossardsRoutes = require('./routes/dossards');
var contratsRoutes = require('./routes/contrats');
var alluresRoutes = require('./routes/allures');
var stylesRoutes = require('./routes/styles');
var penalitesRoutes = require('./routes/penalites');
var epreuvesRoutes = require('./routes/epreuves');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/utilisateurs', utilisateursRoutes);
app.use('/dossards', dossardsRoutes);
app.use('/contrats', contratsRoutes);
app.use('/allures', alluresRoutes);
app.use('/styles', stylesRoutes);
app.use('/penalites', penalitesRoutes);
app.use('/epreuves', epreuvesRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
