const reasonsModel = require('../models/reasonsModel.js');

/**
 * reasonsController.js
 *
 * @description :: Server-side logic for managing reasonss.
 */
module.exports = {

    /**
     * reasonsController.list()
     */
    list:(req, res)=> {
        reasonsModel.find( (err, reasonss)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reasons.',
                    error: err
                });
            }
            return res.json(reasonss);
        });
    },

    /**
     * reasonsController.show()
     */
    show:(req, res)=> {
        let id = req.params.id;
        reasonsModel.findOne({_id: id}, (err, reasons)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reasons.',
                    error: err
                });
            }
            if (!reasons) {
                return res.status(404).json({
                    message: 'No such reasons'
                });
            }
            return res.json(reasons);
        });
    },

    /**
     * reasonsController.create()
     */
    create:(req, res)=> {
        let reasons = new reasonsModel({
			reason_id : req.body.reason_id,
			reason_text : req.body.reason_text

        });

        reasons.save((err, reasons)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating reasons',
                    error: err
                });
            }
            return res.status(201).json(reasons);
        });
    },

    /**
     * reasonsController.update()
     */
    update: (req, res)=> {
        let id = req.params.id;
        reasonsModel.findOne({_id: id},(err, reasons)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reasons',
                    error: err
                });
            }
            if (!reasons) {
                return res.status(404).json({
                    message: 'No such reasons'
                });
            }

            reasons.reason_id = req.body.reason_id ? req.body.reason_id : reasons.reason_id;
			reasons.reason_text = req.body.reason_text ? req.body.reason_text : reasons.reason_text;
			
            reasons.save((err, reasons)=> {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating reasons.',
                        error: err
                    });
                }

                return res.json(reasons);
            });
        });
    },

    /**
     * reasonsController.remove()
     */
    remove:(req, res)=> {
        let id = req.params.id;
        reasonsModel.findByIdAndRemove(id, (err, reasons)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the reasons.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
