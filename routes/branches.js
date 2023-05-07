var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('branch-list');
});
router.get('/update', function(req, res, next) {
  res.render('update-branch');
});

module.exports = router;
