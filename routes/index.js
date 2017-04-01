var express = require('express');
var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');

var router = express.Router();

/* GET home page. */
router.get('/', stormpath.getUser, function(req, res, next) {
  res.render('index', { title: 'Stormpath SignUp' });
});

router.get('/profile', stormpath.authenticationRequired, function(req, res) {
  res.render('profile');
});

router.post('/profile', bodyParser.urlencoded({extended: false}), stormpath.authenticationRequired, function(req, res, next) {
  for (var key in req.body) {
     console.log("Entre a PROFILE");
    req.user.customData[key] = req.body[key];
  }

  req.user.customData.save(function(err) {
    if (err) {
      return next(err);
    }
    res.render('profile');
  });
});

module.exports = router;
