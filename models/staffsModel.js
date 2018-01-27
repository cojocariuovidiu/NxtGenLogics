var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var staffsSchema = new Schema({
	'staff_id' : String,
	'staff_name' : String,
	'address' : String,
	'branch' : String,
	'aadhar' : Number,
	'pan' : String,
	'mobile' : Number,
	'perm_address' : String,
	'alt_phone' : Number
});

module.exports = mongoose.model('staffs', staffsSchema);
