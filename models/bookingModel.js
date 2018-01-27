var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookingSchema = new Schema({
	'awb' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'awb-stoppages'
	},
	'booking_date' : Date,
	'bookin_time' : String,
	'shipment_id' : String,
	'company' : String,
	'consignor' : String,
	'consignee' : String,
	'address' : String,
	'origin' : String,
	'destination' : String,
	'mode' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'mode'
	},
	'normal_pcs' : String,
	'volumetric_pcs' : String,
	'net_pcs' : String,
	'actual_wt' : String,
	'volumetric_wt' : String,
	'chr_wt' : String,
	'doc_type' : Array,
	'booking_type' : String,
	'inv_no' : String,
	'inv_val' : String,
	'packing_type' : Array,
	'remarks' : String,
	'delivery_date' : Date
});

module.exports = mongoose.model('booking', bookingSchema);
