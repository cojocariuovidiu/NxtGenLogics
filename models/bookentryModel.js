var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookentrySchema = new Schema({
	'book_no' : { type: Number, unique:true },
	'book_no_from': Number,
	'book_no_to': Number,
	'issued_to' : String,
	'issue_date' : String,
	'issued_by' : String,
	'status' : String

});

module.exports = mongoose.model('bookentry', bookentrySchema);


