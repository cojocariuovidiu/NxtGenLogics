var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var reasonsSchema = new Schema({
	'reason_id' : String,
	'reason_text' : String
});

module.exports = mongoose.model('reasons', reasonsSchema);
