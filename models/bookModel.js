var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookSchema = new Schema({
	'book_no' : Number,
	'mbook_no' : { type: Number, unique:true },
	'issued_to' : String,
	'issue_date' : String,
	'issued_by' : String,
	'status' : String

});

module.exports = mongoose.model('book', bookSchema);


