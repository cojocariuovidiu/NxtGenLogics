const hubModel = require('../models/hubModel.js');

/**
 * hubController.js
 *
 * @description :: Server-side logic for managing hubs.
 */
module.exports = {

    /**
     * hubController.list()
     */
    list:(req, res)=> {
        hubModel.find( (err, hubs)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting hub.',
                    error: err
                });
            }
            return res.json(hubs);
        });
    },

    /**
     * hubController.show()
     */
    show: (req, res)=> {
        let id = req.params.id;
        hubModel.findOne({_id: id},  (err, hub)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting hub.',
                    error: err
                });
            }
            if (!hub) {
                return res.status(404).json({
                    message: 'No such hub'
                });
            }
            return res.json(hub);
        });
    },

    /**
     * hubController.create()
     */
    create:  (req, res)=> {
        let hub = new hubModel({
			id : req.body.id,
			address : req.body.address,
			state : req.body.state,
			phone : req.body.phone,
			contact_person : req.body.contact_person,
			lat : req.body.lat,
			lan : req.body.lan

        });

        hub.save((err, hub)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating hub',
                    error: err
                });
            }
            return res.status(201).json(hub);
        });
    },

    /**
     * hubController.update()
     */
    update: (req, res)=> {
        let id = req.params.id;
        hubModel.findOne({_id: id}, (err, hub)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting hub',
                    error: err
                });
            }
            if (!hub) {
                return res.status(404).json({
                    message: 'No such hub'
                });
            }

            hub.id = req.body.id ? req.body.id : hub.id;
			hub.address = req.body.address ? req.body.address : hub.address;
			hub.state = req.body.state ? req.body.state : hub.state;
			hub.phone = req.body.phone ? req.body.phone : hub.phone;
			hub.contact_person = req.body.contact_person ? req.body.contact_person : hub.contact_person;
			hub.lat = req.body.lat ? req.body.lat : hub.lat;
			hub.lan = req.body.lan ? req.body.lan : hub.lan;
			
            hub.save((err, hub)=> {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating hub.',
                        error: err
                    });
                }

                return res.json(hub);
            });
        });
    },

    /**
     * hubController.remove()
     */
    remove: (req, res)=> {
        let id = req.params.id;
        hubModel.findByIdAndRemove(id, (err, hub)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the hub.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
