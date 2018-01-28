const cnoteModel = require('../models/cnoteModel.js');

/**
 * cnoteController.js
 *
 * @description :: Server-side logic for managing cnotes.
 */
module.exports = {

    /**
     * cnoteController.list()
     */
    list:(req, res) =>{
        cnoteModel.find((err, cnotes)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cnote.',
                    error: err
                });
            }
            return res.json(cnotes);
        });
    },

    /**
     * cnoteController.show()
     */
    show:(req, res) =>{
        let id = req.params.id;
        cnoteModel.findOne({_id: id},(err, cnote)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cnote.',
                    error: err
                });
            }
            if (!cnote) {
                return res.status(404).json({
                    message: 'No such cnote'
                });
            }
            return res.json(cnote);
        });
    },

    /**
     * cnoteController.create()
     */
    create: (req, res)=> {
        let cnote = new cnoteModel({
			cnote_id : req.body.cnote_id,
			cnote_code : req.body.cnote_code,
			name : req.body.name,
			issue_branch : req.body.issue_branch,
			start_no : req.body.start_no,
			end_no : req.body.end_no,
			issue_date : req.body.issue_date

        });

        cnote.save((err, cnote)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating cnote',
                    error: err
                });
            }
            return res.status(201).json(cnote);
        });
    },

    /**
     * cnoteController.update()
     */
    update: (req, res)=> {
        let id = req.params.id;
        cnoteModel.findOne({_id: id}, (err, cnote) =>{
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cnote',
                    error: err
                });
            }
            if (!cnote) {
                return res.status(404).json({
                    message: 'No such cnote'
                });
            }

            cnote.cnote_id = req.body.cnote_id ? req.body.cnote_id : cnote.cnote_id;
			cnote.cnote_code = req.body.cnote_code ? req.body.cnote_code : cnote.cnote_code;
			cnote.name = req.body.name ? req.body.name : cnote.name;
			cnote.issue_branch = req.body.issue_branch ? req.body.issue_branch : cnote.issue_branch;
			cnote.start_no = req.body.start_no ? req.body.start_no : cnote.start_no;
			cnote.end_no = req.body.end_no ? req.body.end_no : cnote.end_no;
			cnote.issue_date = req.body.issue_date ? req.body.issue_date : cnote.issue_date;
			
            cnote.save((err, cnote)=> {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating cnote.',
                        error: err
                    });
                }

                return res.json(cnote);
            });
        });
    },

    /**
     * cnoteController.remove()
     */
    remove: (req, res) =>{
        let id = req.params.id;
        cnoteModel.findByIdAndRemove(id, (err, cnote)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the cnote.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
