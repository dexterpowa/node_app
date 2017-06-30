var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tutorial', {
    title: 'JS tutorial',
    text: 'Methods',
    label: 'window.screen',
    subtitle1: 'Javascript Fundamentals',
    part: '2.9'
 });
});

module.exports = router;