var awbStoppagesModel = require('../models/awb-stoppagesModel.js');

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
        awbStoppagesModel.find(function (err, awb_stoppagess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting awb-stoppages.',
                    error: err
                });
            }
            return res.json(awb_stoppagess);
        });
    },

    /**
     * awb-stoppagesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        awbStoppagesModel.findOne({_id: id}, function (err, awb_stoppages) {
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
            return res.json(awb_stoppages);
        });
    },

    /**
     * awb-stoppagesController.create()
     */
    create: function (req, res) {
        var awb_stoppages = new awb-stoppagesModel({
			st_id : req.body.st_id,
			awb_id : req.body.awb_id,
			dest_id : req.body.dest_id,
			incoming_time : req.body.incoming_time,
			outgoing_time : req.body.outgoing_time

        });

        awbStoppagesModel.save(function (err, awb_stoppages) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating awb-stoppages',
                    error: err
                });
            }
            return res.status(201).json(awb_stoppages);
        });
    },

    /**
     * awb-stoppagesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        awbStoppagesModel.findOne({_id: id}, function (err, awb_stoppages) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting awb-stoppages',
                    error: err
                });
            }
            if (!awb_stoppages) {
                return res.status(404).json({
                    message: 'No such awb-stoppages'
                });
            }

            awb_stoppages.st_id = req.body.st_id ? req.body.st_id : awb_stoppages.st_id;
			awb_stoppages.awb_id = req.body.awb_id ? req.body.awb_id : awb_stoppages.awb_id;
			awb_stoppages.dest_id = req.body.dest_id ? req.body.dest_id : awb_stoppages.dest_id;
			awb_stoppages.incoming_time = req.body.incoming_time ? req.body.incoming_time : awb_stoppages.incoming_time;
			awb_stoppages.outgoing_time = req.body.outgoing_time ? req.body.outgoing_time : awb_stoppages.outgoing_time;
			
            awb_stoppages.save(function (err, awb_stoppages) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating awb-stoppages.',
                        error: err
                    });
                }

                return res.json(awb_stoppages);
            });
        });
    },

    /**
     * awb-stoppagesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        awbStoppagesModel.findByIdAndRemove(id, function (err, awb_stoppages) {
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
