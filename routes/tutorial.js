var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tutorial', {
    title: 'JS tutorial',
    url: 'https://javascript.info/',
    text: 'Methods',
    label: 'window.screen',
    subtitle1: 'Javascript Fundamentals',
    subtitle2: 'Conditional operators: if, \'?\'',
    part1: '2.9',
    part2: '2.10'
 });
});

module.exports = router;