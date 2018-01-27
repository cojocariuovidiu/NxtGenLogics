var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var manifestSchema = new Schema({
	'bundle_ids' : String,
	'manifest_date' : Date,
	'manifest_time' : String,
	'mode' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'mode'
	},
	'bundle_no' : String,
	'connected-ship' : String
});

module.exports = mongoose.model('manifest', manifestSchema);
