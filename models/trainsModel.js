var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var trainsSchema = new Schema({
	'train_number' : String,
	'train_source' : String,
	'train_destination' : String,
	'train_name' : String,
	'depart_atsource' : String,
	'arrival_atdest' : String,
	'days': Array
});

module.exports = mongoose.model('trains', trainsSchema);
