var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var awb-stoppagesSchema = new Schema({
	'st_id' : String,
	'awb_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'INSERT_YOUR_REFERENCE_NAME_HERE'
	},
	'dest_id' : String,
	'incoming_time' : Date,
	'outgoing_time' : Date
});

module.exports = mongoose.model('awb-stoppages', awb-stoppagesSchema);
