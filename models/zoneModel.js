var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var zoneSchema = new Schema({
	'zone_id' : String,
	'zone_name' : String,
	'description' : String
});

module.exports = mongoose.model('zone', zoneSchema);
