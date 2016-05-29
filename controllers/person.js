var express = require('express');
var router = express.Router();
var model = require('../models/modelPerson');

router.get('/', function(req, res){
	model.getAll(function(err,data){
		res.json(data);
	});
});

router.get('/:id', function(req, res) {
	var id = req.params.id;
	res.json({id:id});
});

module.exports = router;
