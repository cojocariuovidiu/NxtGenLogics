var companyModel = require('../models/companyModel.js');

/**
 * companyController.js
 *
 * @description :: Server-side logic for managing companys.
 */
module.exports = {

    /**
     * companyController.list()
     */
    list: function (req, res) {
        companyModel.find(function (err, companys) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting company.',
                    error: err
                });
            }
            return res.json(companys);
        });
    },

    /**
     * companyController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        companyModel.findOne({_id: id}, function (err, company) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting company.',
                    error: err
                });
            }
            if (!company) {
                return res.status(404).json({
                    message: 'No such company'
                });
            }
            return res.json(company);
        });
    },

    /**
     * companyController.create()
     */
    create: function (req, res) {
        var company = new companyModel({
			compId : req.body.compId,
			base_location : req.body.base_location,
			company_name : req.body.company_name,
			reg_no : req.body.reg_no,
			gst_no : req.body.gst_no,
			pan : req.body.pan,
			city : req.body.city,
			director : req.body.director,
			md : req.body.md,
			address : req.body.address,
			phone : req.body.phone,
			md number : req.body.md number

        });

        company.save(function (err, company) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating company',
                    error: err
                });
            }
            return res.status(201).json(company);
        });
    },

    /**
     * companyController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        companyModel.findOne({_id: id}, function (err, company) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting company',
                    error: err
                });
            }
            if (!company) {
                return res.status(404).json({
                    message: 'No such company'
                });
            }

            company.compId = req.body.compId ? req.body.compId : company.compId;
			company.base_location = req.body.base_location ? req.body.base_location : company.base_location;
			company.company_name = req.body.company_name ? req.body.company_name : company.company_name;
			company.reg_no = req.body.reg_no ? req.body.reg_no : company.reg_no;
			company.gst_no = req.body.gst_no ? req.body.gst_no : company.gst_no;
			company.pan = req.body.pan ? req.body.pan : company.pan;
			company.city = req.body.city ? req.body.city : company.city;
			company.director = req.body.director ? req.body.director : company.director;
			company.md = req.body.md ? req.body.md : company.md;
			company.address = req.body.address ? req.body.address : company.address;
			company.phone = req.body.phone ? req.body.phone : company.phone;
			company.md number = req.body.md number ? req.body.md number : company.md number;
			
            company.save(function (err, company) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating company.',
                        error: err
                    });
                }

                return res.json(company);
            });
        });
    },

    /**
     * companyController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        companyModel.findByIdAndRemove(id, function (err, company) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the company.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
