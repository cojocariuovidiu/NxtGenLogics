var movementsModel = require('../models/movementsModel.js');

/**
 * movementsController.js
 *
 * @description :: Server-side logic for managing movementss.
 */
module.exports = {

    /**
     * movementsController.list()
     */
    list: function (req, res) {
        movementsModel.find(function (err, movementss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting movements.',
                    error: err
                });
            }
            return res.json(movementss);
        });
    },

    /**
     * movementsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        movementsModel.findOne({_id: id}, function (err, movements) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting movements.',
                    error: err
                });
            }
            if (!movements) {
                return res.status(404).json({
                    message: 'No such movements'
                });
            }
            return res.json(movements);
        });
    },

    /**
     * movementsController.create()
     */
    create: function (req, res) {
        var movements = new movementsModel({
			id : req.body.id,
			awb_bundle_id : req.body.awb_bundle_id,
			awb_bundle : req.body.awb_bundle,
			move_type : req.body.move_type,
			move_to : req.body.move_to,
			move_from : req.body.move_from,
			hub_ship_id : req.body.hub_ship_id,
			hub_ship : req.body.hub_ship,
			time : req.body.time

        });

        movements.save(function (err, movements) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating movements',
                    error: err
                });
            }
            return res.status(201).json(movements);
        });
    },

    /**
     * movementsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        movementsModel.findOne({_id: id}, function (err, movements) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting movements',
                    error: err
                });
            }
            if (!movements) {
                return res.status(404).json({
                    message: 'No such movements'
                });
            }

            movements.id = req.body.id ? req.body.id : movements.id;
			movements.awb_bundle_id = req.body.awb_bundle_id ? req.body.awb_bundle_id : movements.awb_bundle_id;
			movements.awb_bundle = req.body.awb_bundle ? req.body.awb_bundle : movements.awb_bundle;
			movements.move_type = req.body.move_type ? req.body.move_type : movements.move_type;
			movements.move_to = req.body.move_to ? req.body.move_to : movements.move_to;
			movements.move_from = req.body.move_from ? req.body.move_from : movements.move_from;
			movements.hub_ship_id = req.body.hub_ship_id ? req.body.hub_ship_id : movements.hub_ship_id;
			movements.hub_ship = req.body.hub_ship ? req.body.hub_ship : movements.hub_ship;
			movements.time = req.body.time ? req.body.time : movements.time;
			
            movements.save(function (err, movements) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating movements.',
                        error: err
                    });
                }

                return res.json(movements);
            });
        });
    },

    /**
     * movementsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        movementsModel.findByIdAndRemove(id, function (err, movements) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the movements.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
