const trainsModel = require('../models/trainsModel.js');

/**
 * trainsController.js
 *
 * @description :: Server-side logic for managing trainss.
 */
module.exports = {

    /**
     * trainsController.list()
     */
    list:(req, res)=> {
        trainsModel.find( (err, trainss)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting trains.',
                    error: err
                });
            }
            return res.json(trainss);
        });
    },

    /**
     * trainsController.show()
     */
    show:(req, res)=> {
        let id = req.params.id;
        trainsModel.findOne({_id: id}, (err, trains)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting trains.',
                    error: err
                });
            }
            if (!trains) {
                return res.status(404).json({
                    message: 'No such trains'
                });
            }
            return res.json(trains);
        });
    },

    /**
     * trainsController.create()
     */
    create: (req, res)=> {
        let trains = new trainsModel({
			train_code : req.body.train_code,
			train_source : req.body.train_source,
			train_destination : req.body.train_destination,
			train_name : req.body.train_name,
			depat_atsource : req.body.depat_atsource,
			arrival_atdest : req.body.arrival_atdest

        });

        trains.save((err, trains)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating trains',
                    error: err
                });
            }
            return res.status(201).json(trains);
        });
    },

    /**
     * trainsController.update()
     */
    update: (req, res)=> {
        let id = req.params.id;
        trainsModel.findOne({_id: id}, (err, trains)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting trains',
                    error: err
                });
            }
            if (!trains) {
                return res.status(404).json({
                    message: 'No such trains'
                });
            }

            trains.train_code = req.body.train_code ? req.body.train_code : trains.train_code;
			trains.train_source = req.body.train_source ? req.body.train_source : trains.train_source;
			trains.train_destination = req.body.train_destination ? req.body.train_destination : trains.train_destination;
			trains.train_name = req.body.train_name ? req.body.train_name : trains.train_name;
			trains.depat_atsource = req.body.depat_atsource ? req.body.depat_atsource : trains.depat_atsource;
			trains.arrival_atdest = req.body.arrival_atdest ? req.body.arrival_atdest : trains.arrival_atdest;
			
            trains.save((err, trains)=> {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating trains.',
                        error: err
                    });
                }

                return res.json(trains);
            });
        });
    },

    /**
     * trainsController.remove()
     */
    remove: (req, res)=> {
        let id = req.params.id;
        trainsModel.findByIdAndRemove(id,(err, trains)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the trains.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
