var staffsModel = require('../models/staffsModel.js');

/**
 * staffsController.js
 *
 * @description :: Server-side logic for managing staffss.
 */
module.exports = {

    /**
     * staffsController.list()
     */
    list: function (req, res) {
        staffsModel.find(function (err, staffss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting staffs.',
                    error: err
                });
            }
            return res.json(staffss);
        });
    },

    /**
     * staffsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        staffsModel.findOne({_id: id}, function (err, staffs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting staffs.',
                    error: err
                });
            }
            if (!staffs) {
                return res.status(404).json({
                    message: 'No such staffs'
                });
            }
            return res.json(staffs);
        });
    },

    /**
     * staffsController.create()
     */
    create: function (req, res) {
        var staffs = new staffsModel({
			staff_id : req.body.staff_id,
			staff_name : req.body.staff_name,
			address : req.body.address,
			branch : req.body.branch,
			aadhar : req.body.aadhar,
			pan : req.body.pan,
			mobile : req.body.mobile,
			perm_address : req.body.perm_address,
			alt_phone : req.body.alt_phone

        });

        staffs.save(function (err, staffs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating staffs',
                    error: err
                });
            }
            return res.status(201).json(staffs);
        });
    },

    /**
     * staffsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        staffsModel.findOne({_id: id}, function (err, staffs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting staffs',
                    error: err
                });
            }
            if (!staffs) {
                return res.status(404).json({
                    message: 'No such staffs'
                });
            }

            staffs.staff_id = req.body.staff_id ? req.body.staff_id : staffs.staff_id;
			staffs.staff_name = req.body.staff_name ? req.body.staff_name : staffs.staff_name;
			staffs.address = req.body.address ? req.body.address : staffs.address;
			staffs.branch = req.body.branch ? req.body.branch : staffs.branch;
			staffs.aadhar = req.body.aadhar ? req.body.aadhar : staffs.aadhar;
			staffs.pan = req.body.pan ? req.body.pan : staffs.pan;
			staffs.mobile = req.body.mobile ? req.body.mobile : staffs.mobile;
			staffs.perm_address = req.body.perm_address ? req.body.perm_address : staffs.perm_address;
			staffs.alt_phone = req.body.alt_phone ? req.body.alt_phone : staffs.alt_phone;
			
            staffs.save(function (err, staffs) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating staffs.',
                        error: err
                    });
                }

                return res.json(staffs);
            });
        });
    },

    /**
     * staffsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        staffsModel.findByIdAndRemove(id, function (err, staffs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the staffs.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
