var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
var db=require('./database');
var mysql = require('mysql');
 
var app = express();
console.log('hi');

var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '12345',      // Replace with your database password
  database: 'mydb' // // Replace with your database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
// view engine setup
app.set('src', path.join(__dirname, '/src/pages'));
app.set('view engine', 'js');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(session({ 
    secret: '123456catr',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(bodyParser.json());
 
app.use(flash());
 
/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('contact-us', { title: 'Contact-Us' });
});
 
app.post('/contact-us', function(req, res, next) {

  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var adult = req.body.adult;
  var child = req.body.child;
  var checkindate = req.body.checkindate;
  var checkoutdate = req.body.checkoutdate;
  var checkindate = req.body.checkindate;
  var message = req.body.message;

  var sql = `INSERT INTO contacts (name, email,phone, adult, child,checkindate,checkoutdate,roompreference,message) VALUES ("${name}", "${email}","${phone}","${adult}","${child}", "${checkindate}","${checkoutdate}","${roompreference}",${message}", NOW())`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});

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
 
// port must be set to 3000 because incoming http requests are routed from port 80 to port 8080
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;