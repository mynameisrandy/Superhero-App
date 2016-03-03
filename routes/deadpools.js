var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// Get the model of Character
var Deadpool = require('../models/Deadpool.js');

// Get Characters
router.get('/', function(req, res, next) {
	// res.send('Characters Main View');
	
	// Get a list of students
	Deadpool.find(function(err, deadpools) {
		// Errors
		if(err) return next(err);
		// res.json(characters); // OUTPUT JSON 
		// res.render('index', {title: 'Characters Page'});
		
		var data = JSON.stringify(deadpools);
		res.render('index', { title: 'Characters Page', list:data });
	});
});

// Get Character Details
router.get('/:id', function(req, res, next) {
	// Get character id
	Deadpool.findById(req.params.id, function(err, deadpool) {
		// Errors
		if(err) return next(err);
		// Get Character Data
		var data = JSON.stringify(deadpool);
		res.render('detail', { title: 'Character Details Page', details:data });
	});
});

module.exports = router;