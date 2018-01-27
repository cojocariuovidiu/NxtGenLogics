var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var trainsSchema = new Schema({
	'train_code' : String,
	'train_source' : String,
	'train_destination' : String,
	'train_name' : String,
	'depat_atsource' : String,
	'arrival_atdest' : String
});

module.exports = mongoose.model('trains', trainsSchema);
