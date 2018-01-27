var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var modeSchema = new Schema({
	'mode_id' : Number,
	'mode_name' : String,
	'mode_prefix' : String,
	'transit_days' : Array
});

module.exports = mongoose.model('mode', modeSchema);
