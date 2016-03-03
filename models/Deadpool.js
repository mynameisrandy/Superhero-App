var mongoose = require('mongoose');

// Define the shape of the documents with that collection
var DeadpoolSchema = new mongoose.Schema({
	alias: String,
	name: { fname: String, lname: String },
	city: String,
	image: String,
	bio: String,
	affiliation: [{ group: String, group_bio: String, members: [{ member_name: String, member_bio: String }] }]
});

// Export
module.exports = mongoose.model('Deadpool', DeadpoolSchema);