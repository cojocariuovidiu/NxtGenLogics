var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var booking_typeSchema = new Schema({
	'type_id' : String,
	'type_text' : String
});

module.exports = mongoose.model('booking_type', booking_typeSchema);
