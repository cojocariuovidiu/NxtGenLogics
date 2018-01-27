var bookingTypeModel = require('../models/booking-typeModel.js');

/**
 * booking-typeController.js
 *
 * @description :: Server-side logic for managing booking-types.
 */
module.exports = {

    /**
     * booking-typeController.list()
     */
    list: function (req, res) {
        bookingTypeModel.find(function (err, booking_types) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting booking-type.',
                    error: err
                });
            }
            return res.json(booking_types);
        });
    },

    /**
     * booking-typeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        bookingTypeModel.findOne({_id: id}, function (err, booking_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting booking-type.',
                    error: err
                });
            }
            if (!booking_type) {
                return res.status(404).json({
                    message: 'No such booking-type'
                });
            }
            return res.json(booking_type);
        });
    },

    /**
     * booking-typeController.create()
     */
    create: function (req, res) {
        var booking_type = new booking-typeModel({
			type_id : req.body.type_id,
			type_text : req.body.type_text

        });

        bookingTypeModel.save(function (err, booking_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating booking-type',
                    error: err
                });
            }
            return res.status(201).json(booking_type);
        });
    },

    /**
     * booking-typeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        bookingTypeModel.findOne({_id: id}, function (err, booking_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting booking-type',
                    error: err
                });
            }
            if (!booking_type) {
                return res.status(404).json({
                    message: 'No such booking-type'
                });
            }

            booking_type.type_id = req.body.type_id ? req.body.type_id : booking_type.type_id;
			booking_type.type_text = req.body.type_text ? req.body.type_text : booking_type.type_text;
			
            bookingTypeModel.save(function (err, booking_type) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating booking-type.',
                        error: err
                    });
                }

                return res.json(booking_type);
            });
        });
    },

    /**
     * booking-typeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        bookingTypeModel.findByIdAndRemove(id, function (err, booking_type) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the booking-type.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
