var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// Get the model of Character
var Movie = require('../models/Movie.js');

// Get Movies
router.get('/', function(req, res, next) {
	// res.send('Characters Main View');
	
	// Get a list of students
	Movie.find(function(err, movies) {
		// Errors
		if(err) return next(err);
		// res.json(movies); // OUTPUT JSON 
		// res.render('index', {title: 'Movie Page'});
		
		var data = JSON.stringify(movies);
		res.render('index', { title: 'Movies Page', list:data });
	});
});

// Get Movie Details
router.get('/:id', function(req, res, next) {
	// Get character id
	Movie.findById(req.params.id, function(err, movie) {
		// Errors
		if(err) return next(err);
		// Get Character Data
		var data = JSON.stringify(movie);
		res.render('detail', { title: 'Movie Details Page', details:data });
	});
});

module.exports = router;