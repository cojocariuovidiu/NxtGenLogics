var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var destinationSchema = new Schema({
	'dest_id' : String,
	'dest_name' : String,
	'state' : String,
	'transit_days' : Array
});

module.exports = mongoose.model('destination', destinationSchema);
