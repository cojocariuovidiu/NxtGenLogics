var mongoose = require('mongoose'),
	_ = require('lodash'),
	bundleData = require('./mockdata/bundleData.json'),
	bookingData = require('./mockdata/bookingData.json');

exports.reset = function(req, res) {


	var Bundle = mongoose.model('Bundle');
	var Booking = mongoose.model('Booking');


	Bundle.find().remove();
	Booking.find().remove();


	for (var i = 0; i < bundleData.length; i++) {
		new Bundle(bundleData[i]).save();
	}


	Bundle.find(function(err, bundles) {
		var bundleMap = {};


		for (var i = 0; i < bundles.length; i++) {
			var bundle = bundles[i];
			bundleMap[bundle.name] = food._id;
		}


		for (i = 0; i < bookingData.length; i++) {
			var bookingEntry = bookingData[i];
			bookingEntry._bundle = bundleMap[bookingEntry.bundle_name];

			new bookingEntry(bookingEntry).save();
		}
	});

	res.redirect("/");
};