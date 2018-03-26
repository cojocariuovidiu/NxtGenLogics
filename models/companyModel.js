var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var companySchema = new Schema({
	'compId' : String,
	'base_location' : String,
	'company_name' : String,
	'reg_no' : String,
	'gst_no' : String,
	'adhaar' : String,
	'rate' : Number,
	'pan' : String,
	'city' : String,
	'state': String,
	'director' : String,
	'md' : String,
	'address' : String,
	'postcode': String,
	'phone' : Number,
	'md_number' : Number,
	'comments': String
});

module.exports = mongoose.model('company', companySchema);
