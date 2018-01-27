var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var purchase-orderSchema = new Schema({
	'pod_id' : String,
	'awb_no' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'awb-stoppages'
	},
	'status' : Array,
	'delivery_date' : Date,
	'receiver_name' : String,
	'receiver_phone' : String,
	'reason' : String,
	'receive_amount' : Number,
	'remarks' : String
});

module.exports = mongoose.model('purchase-order', purchase-orderSchema);
