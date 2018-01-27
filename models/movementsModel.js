var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var movementsSchema = new Schema({
	'id' : String,
	'awb_bundle_id' : String,
	'awb_bundle' : String,
	'move_type' : String,
	'move_to' : String,
	'move_from' : String,
	'hub_ship_id' : Number,
	'hub_ship' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'hub'
	},
	'time' : Date
});

module.exports = mongoose.model('movements', movementsSchema);
