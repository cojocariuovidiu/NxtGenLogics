'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReportSchema = new Schema({
	muffinId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Muffin'
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	auctionId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Auctions'
	},
	transctionId: {
        type: String,
        minlength:10,
        maxlength: 30
      },

	createdAt: {
		type: Date,
		default: Date.now
	},
	transactionType: {
		type: String
	},
	natureOfCharges: {
		type: String
	},
	autionNoOfCharges: {
		type: String
	},
	totalBalance: {
		type: Number
	},
	dayNumber: {
		type: String
	},
	monthNumber: {
		type: String
	},
	amount: Number,
	text: String


});

module.exports = mongoose.model('Report', ReportSchema);