const destinationModel = require('../models/destinationModel.js');

/**
 * destinationController.js
 *
 * @description :: Server-side logic for managing destinations.
 */
module.exports = {

    /**
     * destinationController.list()
     */
    list: (req, res)=> {
        destinationModel.find( (err, destinations)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting destination.',
                    error: err
                });
            }
            return res.json(destinations);
        });
    },

    /**
     * destinationController.show()
     */
    show: (req, res) =>{
        let id = req.params.id;
        destinationModel.findOne({_id: id},  (err, destination)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting destination.',
                    error: err
                });
            }
            if (!destination) {
                return res.status(404).json({
                    message: 'No such destination'
                });
            }
            return res.json(destination);
        });
    },

    /**
     * destinationController.create()
     */
    create: (req, res) =>{
        let destination = new destinationModel({
			dest_id : req.body.dest_id,
			dest_name : req.body.dest_name,
			state : req.body.state,
			transit_days : req.body.transit_days

        });

        destination.save( (err, destination)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating destination',
                    error: err
                });
            }
            return res.status(201).json(destination);
        });
    },

    /**
     * destinationController.update()
     */
    update: (req, res) =>{
        let id = req.params.id;
        destinationModel.findOne({_id: id},  (err, destination)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting destination',
                    error: err
                });
            }
            if (!destination) {
                return res.status(404).json({
                    message: 'No such destination'
                });
            }

            destination.dest_id = req.body.dest_id ? req.body.dest_id : destination.dest_id;
			destination.dest_name = req.body.dest_name ? req.body.dest_name : destination.dest_name;
			destination.state = req.body.state ? req.body.state : destination.state;
			destination.transit_days = req.body.transit_days ? req.body.transit_days : destination.transit_days;
			
            destination.save( (err, destination)=> {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating destination.',
                        error: err
                    });
                }

                return res.json(destination);
            });
        });
    },

    /**
     * destinationController.remove()
     */
    remove: (req, res)=> {
        let id = req.params.id;
        destinationModel.findByIdAndRemove(id,  (err, destination)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the destination.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
