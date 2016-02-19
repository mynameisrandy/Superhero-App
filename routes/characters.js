var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// Get the model of Character
var Character = require('../models/Character.js');

// Get Characters
router.get('/', function(req, res, next) {
	// res.send('Characters Main View');
	
	// Get a list of students
	Character.find(function(err, characters) {
		if(err) return next(err);
		// res.json(characters); // OUTPUT JSON 
		// res.render('index', {title: 'Characters Page'});
		
		var data = JSON.stringify(characters);
		res.render('index', { title: 'Characters Page', list:data });
	});
});

module.exports = router;