var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vehicle-parts-list');
});
router.get('/add', function(req, res, next) {
  res.render('add-vehicle-part');
});
router.get('/update/', function(req, res, next) {
  res.render('update-vehicle-part');
});

module.exports = router;
