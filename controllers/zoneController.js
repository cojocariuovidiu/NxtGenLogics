var zoneModel = require('../models/zoneModel.js');

/**
 * zoneController.js
 *
 * @description :: Server-side logic for managing zones.
 */
module.exports = {

    /**
     * zoneController.list()
     */
    list: function (req, res) {
        zoneModel.find(function (err, zones) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting zone.',
                    error: err
                });
            }
            return res.json(zones);
        });
    },

    /**
     * zoneController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        zoneModel.findOne({_id: id}, function (err, zone) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting zone.',
                    error: err
                });
            }
            if (!zone) {
                return res.status(404).json({
                    message: 'No such zone'
                });
            }
            return res.json(zone);
        });
    },

    /**
     * zoneController.create()
     */
    create: function (req, res) {
        var zone = new zoneModel({
			zone_id : req.body.zone_id,
			zone_name : req.body.zone_name,
			description : req.body.description

        });

        zone.save(function (err, zone) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating zone',
                    error: err
                });
            }
            return res.status(201).json(zone);
        });
    },

    /**
     * zoneController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        zoneModel.findOne({_id: id}, function (err, zone) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting zone',
                    error: err
                });
            }
            if (!zone) {
                return res.status(404).json({
                    message: 'No such zone'
                });
            }

            zone.zone_id = req.body.zone_id ? req.body.zone_id : zone.zone_id;
			zone.zone_name = req.body.zone_name ? req.body.zone_name : zone.zone_name;
			zone.description = req.body.description ? req.body.description : zone.description;
			
            zone.save(function (err, zone) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating zone.',
                        error: err
                    });
                }

                return res.json(zone);
            });
        });
    },

    /**
     * zoneController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        zoneModel.findByIdAndRemove(id, function (err, zone) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the zone.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
