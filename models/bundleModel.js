var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bundleSchema = new Schema({
	'id' : String,
	'awbs' : {
	 	type: Array
	 	
	},
	'hub' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'hub'
	},
	'date' : Date
});

module.exports = mongoose.model('bundle', bundleSchema);
