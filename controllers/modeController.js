var modeModel = require('../models/modeModel.js');

/**
 * modeController.js
 *
 * @description :: Server-side logic for managing modes.
 */
module.exports = {

    /**
     * modeController.list()
     */
    list: function (req, res) {
        modeModel.find(function (err, modes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting mode.',
                    error: err
                });
            }
            return res.json(modes);
        });
    },

    /**
     * modeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        modeModel.findOne({_id: id}, function (err, mode) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting mode.',
                    error: err
                });
            }
            if (!mode) {
                return res.status(404).json({
                    message: 'No such mode'
                });
            }
            return res.json(mode);
        });
    },

    /**
     * modeController.create()
     */
    create: function (req, res) {
        var mode = new modeModel({
			mode_id : req.body.mode_id,
			mode_name : req.body.mode_name,
			mode_prefix : req.body.mode_prefix,
			transit_days : req.body.transit_days

        });

        mode.save(function (err, mode) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating mode',
                    error: err
                });
            }
            return res.status(201).json(mode);
        });
    },

    /**
     * modeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        modeModel.findOne({_id: id}, function (err, mode) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting mode',
                    error: err
                });
            }
            if (!mode) {
                return res.status(404).json({
                    message: 'No such mode'
                });
            }

            mode.mode_id = req.body.mode_id ? req.body.mode_id : mode.mode_id;
			mode.mode_name = req.body.mode_name ? req.body.mode_name : mode.mode_name;
			mode.mode_prefix = req.body.mode_prefix ? req.body.mode_prefix : mode.mode_prefix;
			mode.transit_days = req.body.transit_days ? req.body.transit_days : mode.transit_days;
			
            mode.save(function (err, mode) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating mode.',
                        error: err
                    });
                }

                return res.json(mode);
            });
        });
    },

    /**
     * modeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        modeModel.findByIdAndRemove(id, function (err, mode) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the mode.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
