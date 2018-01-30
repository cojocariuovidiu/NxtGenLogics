var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var companySchema = new Schema({
	'compId' : String,
	'base_location' : String,
	'company_name' : String,
	'reg_no' : Number,
	'gst_no' : Number,
	'pan' : String,
	'city' : String,
	'state': String,
	'director' : String,
	'md' : String,
	'address' : String,
	'phone' : Number,
	'md number' : Number
});

module.exports = mongoose.model('company', companySchema);
