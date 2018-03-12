var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookingSchema = new Schema({
	'awb' : String,
	'bookno': Number,
	'booking_date' : Date,
	'booking_time' : String,
	'shipment_id' : String,
	'company' : String,
	'consignor' : String,
	'consignee' : String,
	'address' : String,
	'origin' : String,
	'destination' : String,
	'mode' : String,
	'normal_pcs' : String,
	'length': String,
	'width': String,
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
	'delivery_date' : Date,
	'labour_charge': String,
    'document_charge': String,
    'insurance_charge': String,
    'other_charge': String,
    'fixed_val': String,
	'gst': String,
	'invtotal': Number,
	'bundled': Number,
	'bundleids': String,
	'status': String

});

module.exports = mongoose.model('booking', bookingSchema);


