var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var coLoaderSchema = new Schema({
	'coloaderId' : Number,
	'loader_name' : String,
	'origin' : String,
	'station_code' : String,
	'contact_number' : Number,
	'remarks' : String,
	'address' : String,
	'pan' : String,
	'aadhar' : Number
});

module.exports = mongoose.model('coLoader', coLoaderSchema);
