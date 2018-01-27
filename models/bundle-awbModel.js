var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bundle_awbSchema = new Schema({
	'bundle_id' : String,
	'awb' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'awb-stoppages'
	},
	'pcs' : String
});

module.exports = mongoose.model('bundle_awb', bundle_awbSchema);
