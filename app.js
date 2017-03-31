var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.use(stormpath.init(app, {
  // Optional configuration options.
  application: {
    href: `https://api.stormpath.com/v1/applications/1IhAOqoI27b9JSAmMFxhTq`
  }
}));

app.on('stormpath.ready', function () {
  console.log('Stormpath Ready!');
});

module.exports = app;
