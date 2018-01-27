var awb-stoppagesModel = require('../models/awb-stoppagesModel.js');

/**
 * awb-stoppagesController.js
 *
 * @description :: Server-side logic for managing awb-stoppagess.
 */
module.exports = {

    /**
     * awb-stoppagesController.list()
     */
    list: function (req, res) {
        awb-stoppagesModel.find(function (err, awb-stoppagess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting awb-stoppages.',
                    error: err
                });
            }
            return res.json(awb-stoppagess);
        });
    },

    /**
     * awb-stoppagesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        awb-stoppagesModel.findOne({_id: id}, function (err, awb-stoppages) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting awb-stoppages.',
                    error: err
                });
            }
            if (!awb-stoppages) {
                return res.status(404).json({
                    message: 'No such awb-stoppages'
                });
            }
            return res.json(awb-stoppages);
        });
    },

    /**
     * awb-stoppagesController.create()
     */
    create: function (req, res) {
        var awb-stoppages = new awb-stoppagesModel({
			st_id : req.body.st_id,
			awb_id : req.body.awb_id,
			dest_id : req.body.dest_id,
			incoming_time : req.body.incoming_time,
			outgoing_time : req.body.outgoing_time

        });

        awb-stoppages.save(function (err, awb-stoppages) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating awb-stoppages',
                    error: err
                });
            }
            return res.status(201).json(awb-stoppages);
        });
    },

    /**
     * awb-stoppagesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        awb-stoppagesModel.findOne({_id: id}, function (err, awb-stoppages) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting awb-stoppages',
                    error: err
                });
            }
            if (!awb-stoppages) {
                return res.status(404).json({
                    message: 'No such awb-stoppages'
                });
            }

            awb-stoppages.st_id = req.body.st_id ? req.body.st_id : awb-stoppages.st_id;
			awb-stoppages.awb_id = req.body.awb_id ? req.body.awb_id : awb-stoppages.awb_id;
			awb-stoppages.dest_id = req.body.dest_id ? req.body.dest_id : awb-stoppages.dest_id;
			awb-stoppages.incoming_time = req.body.incoming_time ? req.body.incoming_time : awb-stoppages.incoming_time;
			awb-stoppages.outgoing_time = req.body.outgoing_time ? req.body.outgoing_time : awb-stoppages.outgoing_time;
			
            awb-stoppages.save(function (err, awb-stoppages) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating awb-stoppages.',
                        error: err
                    });
                }

                return res.json(awb-stoppages);
            });
        });
    },

    /**
     * awb-stoppagesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        awb-stoppagesModel.findByIdAndRemove(id, function (err, awb-stoppages) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the awb-stoppages.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
