const companyModel = require('../models/companyModel.js');

/**
 * companyController.js
 *
 * @description :: Server-side logic for managing companys.
 */
module.exports = {

    /**
     * companyController.list()
     */
    list:(req, res)=> {
        companyModel.find((err, company) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting company.',
                    error: err
                });
            }
            return res.json(company);
        });
    },

    /**
     * companyController.show()
     */
    show: (req, res)=> {
        let id = req.params.id; 
        companyModel.findOne({_id: id}, (err, company) => {
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
    create: (req, res) => {
        console.log(req.body);
        let company = new companyModel({compId : req.body.compId,
			base_location : req.body.base_location,
			company_name : req.body.company_name,
			pan : req.body.pan,
			reg_no : req.body.reg_no,
			city : req.body.city,
            address : req.body.address,
            state : req.body.state,
			gst_no : req.body.gst_no,
			director : req.body.director,
			phone : req.body.phone,
			md_number : req.body.md_number,
            md : req.body.md,

        });

        company.save((err, company)=> {
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
    update: (req, res) => {
        let id = req.params.id; companyModel.findOne({_id: id},  (err, company)=> {
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
			company.pan = req.body.pan ? req.body.pan : company.pan;
			company.reg_no = req.body.reg_no ? req.body.reg_no : company.reg_no;
			company.city = req.body.city ? req.body.city : company.city;
			company.address = req.body.address ? req.body.address : company.address;
			company.state = req.body.state ? req.body.state : company.state;
			company.gst_no = req.body.gst_no ? req.body.gst_no : company.gst_no;
			company.director = req.body.director ? req.body.director : company.director;
            company.phone = req.body.phone ? req.body.phone : company.phone;
            company.md_number = req.body.md_number ? req.body.md_number : company.md_number;
            company.md = req.body.md ? req.body.md : company.md;
			
            company.save((err, company)=> {
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
    remove: (req, res)=> {
        let id = req.params.id; companyModel.findByIdAndRemove(id, (err, company)=> {
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
