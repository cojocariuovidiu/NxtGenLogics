var branchesModel = require('../models/branchesModel.js');

/**
 * branchesController.js
 *
 * @description :: Server-side logic for managing branchess.
 */
module.exports = {

    /**
     * branchesController.list()
     */
    list: function (req, res) {
        branchesModel.find(function (err, branchess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting branches.',
                    error: err
                });
            }
            return res.json(branchess);
        });
    },

    /**
     * branchesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        branchesModel.findOne({_id: id}, function (err, branches) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting branches.',
                    error: err
                });
            }
            if (!branches) {
                return res.status(404).json({
                    message: 'No such branches'
                });
            }
            return res.json(branches);
        });
    },

    /**
     * branchesController.create()
     */
    create: function (req, res) {
        var branches = new branchesModel({
			branch_code : req.body.branch_code,
			branch_name : req.body.branch_name,
			branch_manager : req.body.branch_manager,
			pan : req.body.pan,
			aadhar : req.body.aadhar,
			city : req.body.city,
			hub : req.body.hub,
			branch_phone : req.body.branch_phone,
			branch_phone2 : req.body.branch_phone2,
			sub_branch : req.body.sub_branch

        });

        branches.save(function (err, branches) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating branches',
                    error: err
                });
            }
            return res.status(201).json(branches);
        });
    },

    /**
     * branchesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        branchesModel.findOne({_id: id}, function (err, branches) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting branches',
                    error: err
                });
            }
            if (!branches) {
                return res.status(404).json({
                    message: 'No such branches'
                });
            }

            branches.branch_code = req.body.branch_code ? req.body.branch_code : branches.branch_code;
			branches.branch_name = req.body.branch_name ? req.body.branch_name : branches.branch_name;
			branches.branch_manager = req.body.branch_manager ? req.body.branch_manager : branches.branch_manager;
			branches.pan = req.body.pan ? req.body.pan : branches.pan;
			branches.aadhar = req.body.aadhar ? req.body.aadhar : branches.aadhar;
			branches.city = req.body.city ? req.body.city : branches.city;
			branches.hub = req.body.hub ? req.body.hub : branches.hub;
			branches.branch_phone = req.body.branch_phone ? req.body.branch_phone : branches.branch_phone;
			branches.branch_phone2 = req.body.branch_phone2 ? req.body.branch_phone2 : branches.branch_phone2;
			branches.sub_branch = req.body.sub_branch ? req.body.sub_branch : branches.sub_branch;
			
            branches.save(function (err, branches) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating branches.',
                        error: err
                    });
                }

                return res.json(branches);
            });
        });
    },

    /**
     * branchesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        branchesModel.findByIdAndRemove(id, function (err, branches) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the branches.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
