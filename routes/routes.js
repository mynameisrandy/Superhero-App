var express = require('express');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
var Character = require('../models/Character');

// Home Page
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
});

// Get Characters
router.get('/characters', function(req, res, next) {
	// Character Model
	Character.find(function(err, characters) {
		if(err) return(err);
		res.json(characters);
	});
});



module.exports = router;