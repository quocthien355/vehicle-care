var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('staff-list');
});
router.get('/update', function(req, res, next) {
  res.render('update-staff');
});

module.exports = router;
