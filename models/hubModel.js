var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var hubSchema = new Schema({
	'id' : String,
	'address' : String,
	'state' : String,
	'phone' : Number,
	'contact_person' : String,
	'lat' : Number,
	'lan' : Number
});

module.exports = mongoose.model('hub', hubSchema);
