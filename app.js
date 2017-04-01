var express = require('express');
var stormpath = require('express-stormpath');
var path = require('path');
var routes = require('./routes/index');
var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(stormpath.init(app, {
  // Optional configuration options.
  application: {
    href: `https://api.stormpath.com/v1/applications/1IhAOqoI27b9JSAmMFxhTq`
  }
}));

app.use('/', routes);

app.on('stormpath.ready', function () {
  console.log('Stormpath Ready!');
});

module.exports = app;
