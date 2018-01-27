var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var cnoteSchema = new Schema({
	'cnote_id' : String,
	'cnote_code' : Number,
	'name' : String,
	'issue_branch' : String,
	'start_no' : Number,
	'end_no' : Number,
	'issue_date' : Date
});

module.exports = mongoose.model('cnote', cnoteSchema);
