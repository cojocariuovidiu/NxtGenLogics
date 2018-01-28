var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var purchaseOrderSchema = new Schema({
	'pod_id' : Number,
	'awb_no' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'awb_stoppages'
	},
	'status' : Array,
	'delivery_date' : Date,
	'receiver_name' : String,
	'receiver_phone' : String,
	'reason' : String,
	'receive_amount' : Number,
	'remarks' : String
});

module.exports = mongoose.model('purchaseOrder', purchaseOrderSchema);
