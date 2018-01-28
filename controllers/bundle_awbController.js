const bundle_awbModel = require('../models/bundle-awbModel.js');

/**
 * bundle-awbController.js
 *
 * @description :: Server-side logic for managing bundle-awbs.
 */
module.exports = {

    /**
     * bundle-awbController.list()
     */
    list: (req, res) => {
        bundle_awbModel.find((err, bundle_awbs)=> {
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
    show: (req, res) =>{
        let id = req.params.id;
        bundle_awbModel.findOne({_id: id}, (err, bundle_awb)=> {
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
    create: (req, res)=> {
        let bundle_awb = new bundle-awbModel({
			bundle_id : req.body.bundle_id,
			awb : req.body.awb,
			pcs : req.body.pcs

        });

        bundle_awb.save((err, bundle_awb)=> {
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
    update: (req, res)=> {
        let id = req.params.id;
        bundle_awbModel.findOne({_id: id}, (err, bundle_awb) =>{
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
			
            bundle_awb.save((err, bundle_awb) =>{
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
    remove: (req, res) =>{
        let id = req.params.id;
        bundle_awbModel.findByIdAndRemove(id,(err, bundle_awb) =>{
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
