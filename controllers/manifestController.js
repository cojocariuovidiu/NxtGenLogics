var manifestModel = require('../models/manifestModel.js');

/**
 * manifestController.js
 *
 * @description :: Server-side logic for managing manifests.
 */
module.exports = {

    /**
     * manifestController.list()
     */
    list: function (req, res) {
        manifestModel.find(function (err, manifests) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting manifest.',
                    error: err
                });
            }
            return res.json(manifests);
        });
    },

    /**
     * manifestController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        manifestModel.findOne({_id: id}, function (err, manifest) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting manifest.',
                    error: err
                });
            }
            if (!manifest) {
                return res.status(404).json({
                    message: 'No such manifest'
                });
            }
            return res.json(manifest);
        });
    },

    /**
     * manifestController.create()
     */
    create: function (req, res) {
        var manifest = new manifestModel({
			bundle_ids : req.body.bundle_ids,
			manifest_date : req.body.manifest_date,
			manifest_time : req.body.manifest_time,
			mode : req.body.mode,
			bundle_no : req.body.bundle_no,
			connected-ship : req.body.connected-ship

        });

        manifest.save(function (err, manifest) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating manifest',
                    error: err
                });
            }
            return res.status(201).json(manifest);
        });
    },

    /**
     * manifestController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        manifestModel.findOne({_id: id}, function (err, manifest) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting manifest',
                    error: err
                });
            }
            if (!manifest) {
                return res.status(404).json({
                    message: 'No such manifest'
                });
            }

            manifest.bundle_ids = req.body.bundle_ids ? req.body.bundle_ids : manifest.bundle_ids;
			manifest.manifest_date = req.body.manifest_date ? req.body.manifest_date : manifest.manifest_date;
			manifest.manifest_time = req.body.manifest_time ? req.body.manifest_time : manifest.manifest_time;
			manifest.mode = req.body.mode ? req.body.mode : manifest.mode;
			manifest.bundle_no = req.body.bundle_no ? req.body.bundle_no : manifest.bundle_no;
			manifest.connected-ship = req.body.connected-ship ? req.body.connected-ship : manifest.connected-ship;
			
            manifest.save(function (err, manifest) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating manifest.',
                        error: err
                    });
                }

                return res.json(manifest);
            });
        });
    },

    /**
     * manifestController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        manifestModel.findByIdAndRemove(id, function (err, manifest) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the manifest.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
