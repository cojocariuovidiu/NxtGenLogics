var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var branchesSchema = new Schema({
	'branch_code' : String,
	'branch_name' : String,
	'branch_manager' : String,
	'pan' : String,
	'aadhar' : Number,
	'city' : String,
	'hub' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'hub'
	},
	'branch_phone' : Number,
	'branch_phone2' : Number,
	'sub_branch' : String
});

module.exports = mongoose.model('branches', branchesSchema);
