const modeModel = require('../models/modeModel.js');

/**
 * modeController.js
 *
 * @description :: Server-side logic for managing modes.
 */
module.exports = {

    /**
     * modeController.list()
     */
    list: (req, res)=> {
        modeModel.find( (err, modes)=> {
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
    show:(req, res)=> {
        let id = req.params.id;
        modeModel.findOne({_id: id},  (err, mode)=> {
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
    create:  (req, res) =>{
        let mode = new modeModel({
			mode_id : req.body.mode_id,
			mode_name : req.body.mode_name,
			mode_prefix : req.body.mode_prefix,
			transit_days : req.body.transit_days

        });

        mode.save( (err, mode)=> {
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
    update: (req, res) =>{
        let id = req.params.id;
        modeModel.findOne({_id: id},  (err, mode)=> {
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
			
            mode.save((err, mode)=> {
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
    remove: (req, res)=> {
        let id = req.params.id;
        modeModel.findByIdAndRemove(id,  (err, mode)=> {
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
