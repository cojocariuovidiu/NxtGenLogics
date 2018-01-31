var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var hubSchema = new Schema({
	'hub_code' : String,
	'hub_name' : String,
	'address' : String,
	'city': String,
	'state' : String,
	'phone' : Number,
	'contact_person' : String,
	'lat' : Number,
	'lan' : Number
});

module.exports = mongoose.model('hub', hubSchema);
