var coLoaderModel = require('../models/coLoaderModel.js');

/**
 * coLoaderController.js
 *
 * @description :: Server-side logic for managing coLoaders.
 */
module.exports = {

    /**
     * coLoaderController.list()
     */
    list: function (req, res) {
        coLoaderModel.find(function (err, coLoaders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting coLoader.',
                    error: err
                });
            }
            return res.json(coLoaders);
        });
    },

    /**
     * coLoaderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        coLoaderModel.findOne({_id: id}, function (err, coLoader) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting coLoader.',
                    error: err
                });
            }
            if (!coLoader) {
                return res.status(404).json({
                    message: 'No such coLoader'
                });
            }
            return res.json(coLoader);
        });
    },

    /**
     * coLoaderController.create()
     */
    create: function (req, res) {
        var coLoader = new coLoaderModel({
			coloaderId : req.body.coloaderId,
			loader_name : req.body.loader_name,
			origin : req.body.origin,
			station_code : req.body.station_code,
			contact_number : req.body.contact_number,
			remarks : req.body.remarks,
			address : req.body.address,
			pan : req.body.pan,
			aadhar : req.body.aadhar

        });

        coLoader.save(function (err, coLoader) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating coLoader',
                    error: err
                });
            }
            return res.status(201).json(coLoader);
        });
    },

    /**
     * coLoaderController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        coLoaderModel.findOne({_id: id}, function (err, coLoader) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting coLoader',
                    error: err
                });
            }
            if (!coLoader) {
                return res.status(404).json({
                    message: 'No such coLoader'
                });
            }

            coLoader.coloaderId = req.body.coloaderId ? req.body.coloaderId : coLoader.coloaderId;
			coLoader.loader_name = req.body.loader_name ? req.body.loader_name : coLoader.loader_name;
			coLoader.origin = req.body.origin ? req.body.origin : coLoader.origin;
			coLoader.station_code = req.body.station_code ? req.body.station_code : coLoader.station_code;
			coLoader.contact_number = req.body.contact_number ? req.body.contact_number : coLoader.contact_number;
			coLoader.remarks = req.body.remarks ? req.body.remarks : coLoader.remarks;
			coLoader.address = req.body.address ? req.body.address : coLoader.address;
			coLoader.pan = req.body.pan ? req.body.pan : coLoader.pan;
			coLoader.aadhar = req.body.aadhar ? req.body.aadhar : coLoader.aadhar;
			
            coLoader.save(function (err, coLoader) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating coLoader.',
                        error: err
                    });
                }

                return res.json(coLoader);
            });
        });
    },

    /**
     * coLoaderController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        coLoaderModel.findByIdAndRemove(id, function (err, coLoader) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the coLoader.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
