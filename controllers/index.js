var express = require('express');
var router = express.Router();

router.use('/person', require('./person'));

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

