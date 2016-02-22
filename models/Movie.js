var mongoose = require('mongoose');

// Define the shape of the documents with that collection
var MovieSchema = new mongoose.Schema({
	movieName: String,
	movieYear: Number,
	movieImage: String,
	moviveDesc: String,
	director: String,
	writers:[{ writer: String }],
	stars: [{ name: String, role: String, films:[{ film:String }]  }]
});

// Export
module.exports = mongoose.model('Movie', MovieSchema);