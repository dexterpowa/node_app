var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tutorial', { 
    title: 'JS tutorial',
    text: 'Methods',
    label: 'window.screen'
 });
});

module.exports = router;