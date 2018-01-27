var bundleModel = require('../models/bundleModel.js');

/**
 * bundleController.js
 *
 * @description :: Server-side logic for managing bundles.
 */
module.exports = {

    /**
     * bundleController.list()
     */
    list: function (req, res) {
        bundleModel.find(function (err, bundles) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bundle.',
                    error: err
                });
            }
            return res.json(bundles);
        });
    },

    /**
     * bundleController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        bundleModel.findOne({_id: id}, function (err, bundle) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bundle.',
                    error: err
                });
            }
            if (!bundle) {
                return res.status(404).json({
                    message: 'No such bundle'
                });
            }
            return res.json(bundle);
        });
    },

    /**
     * bundleController.create()
     */
    create: function (req, res) {
        var bundle = new bundleModel({
			id : req.body.id,
			awbs : req.body.awbs,
			hub : req.body.hub,
			date : req.body.date

        });

        bundle.save(function (err, bundle) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating bundle',
                    error: err
                });
            }
            return res.status(201).json(bundle);
        });
    },

    /**
     * bundleController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        bundleModel.findOne({_id: id}, function (err, bundle) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bundle',
                    error: err
                });
            }
            if (!bundle) {
                return res.status(404).json({
                    message: 'No such bundle'
                });
            }

            bundle.id = req.body.id ? req.body.id : bundle.id;
			bundle.awbs = req.body.awbs ? req.body.awbs : bundle.awbs;
			bundle.hub = req.body.hub ? req.body.hub : bundle.hub;
			bundle.date = req.body.date ? req.body.date : bundle.date;
			
            bundle.save(function (err, bundle) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating bundle.',
                        error: err
                    });
                }

                return res.json(bundle);
            });
        });
    },

    /**
     * bundleController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        bundleModel.findByIdAndRemove(id, function (err, bundle) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the bundle.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
