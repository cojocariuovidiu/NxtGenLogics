var bundle_awbModel = require('../models/bundle-awbModel.js');

/**
 * bundle-awbController.js
 *
 * @description :: Server-side logic for managing bundle-awbs.
 */
module.exports = {

    /**
     * bundle-awbController.list()
     */
    list: function (req, res) {
        bundle_awbModel.find(function (err, bundle_awbs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bundle-awb.',
                    error: err
                });
            }
            return res.json(bundle_awbs);
        });
    },

    /**
     * bundle-awbController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        bundle_awbModel.findOne({_id: id}, function (err, bundle_awb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bundle-awb.',
                    error: err
                });
            }
            if (!bundle_awb) {
                return res.status(404).json({
                    message: 'No such bundle-awb'
                });
            }
            return res.json(bundle_awb);
        });
    },

    /**
     * bundle-awbController.create()
     */
    create: function (req, res) {
        var bundle_awb = new bundle-awbModel({
			bundle_id : req.body.bundle_id,
			awb : req.body.awb,
			pcs : req.body.pcs

        });

        bundle_awb.save(function (err, bundle_awb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating bundle-awb',
                    error: err
                });
            }
            return res.status(201).json(bundle_awb);
        });
    },

    /**
     * bundle-awbController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        bundle_awbModel.findOne({_id: id}, function (err, bundle_awb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bundle-awb',
                    error: err
                });
            }
            if (!bundle_awb) {
                return res.status(404).json({
                    message: 'No such bundle-awb'
                });
            }

            bundle_awb.bundle_id = req.body.bundle_id ? req.body.bundle_id : bundle_awb.bundle_id;
			bundle_awb.awb = req.body.awb ? req.body.awb : bundle_awb.awb;
			bundle_awb.pcs = req.body.pcs ? req.body.pcs : bundle_awb.pcs;
			
            bundle_awb.save(function (err, bundle_awb) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating bundle-awb.',
                        error: err
                    });
                }

                return res.json(bundle_awb);
            });
        });
    },

    /**
     * bundle-awbController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        bundle_awbModel.findByIdAndRemove(id, function (err, bundle_awb) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the bundle-awb.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
