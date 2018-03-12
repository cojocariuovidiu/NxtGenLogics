const bookModel = require('../models/bookModel.js');

/**
 * bookingController.js
 *
 * @description :: Server-side logic for managing bookings.
 */
module.exports = {

    /**
     * bookController.list()
     */
    list: (req, res) => {
        bookModel.find({status:{ $ne : "used"}}).sort({"_id":-1}).limit(100).exec(function (err, books) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book.',
                    error: err
                });
            }
            return res.json(books);
        });
    },

    /**
     * bookController.show()
     */
    show: (req, res) => {
        let id = req.params.id;
        bookModel.findOne({_id: id}, (err, book) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book.',
                    error: err
                });
            }
            if (!book) {
                return res.status(404).json({
                    message: 'No such book no'
                });
            }
            return res.json(book);
        });
    },

    /**
     * bookController.create()
     */
    create: (req, res) => {
        let nfrom = req.body.book_no_from;
        let nto = req.body.book_no_to;
        let bookarray = new Array();

        for(nfrom; nfrom<=nto; nfrom++){
            bookarray.push({book_no : nfrom,
            issued_to : req.body.issued_to,
            issue_date : req.body.issue_date,
            issued_by : req.body.issued_by,
            status : req.body.status});
        }

        //let jsonbook =  JSON.stringify(bookarray);
        //jsonbook = jsonbook.substring(1, jsonbook.length-1);
       // jsonbook = JSON.parse(jsonbook);
//console.log(bookarray);
        let book = new bookModel( bookarray);
        
        console.log(nfrom);
        
        bookModel.collection.insert(bookarray,(err, book)=> {

            if (err) {
                return res.status(500).json({
                    message: 'Error when creating book',
                    error: err
                });
            }
            return res.status(201).json(book);
        });
    
    },

    /**
     * bookController.update()
     */
    update: (req, res) => {
        let id = req.params.id;
        bookModel.findOne({_id: id}, (err, book) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book',
                    error: err
                });
            }
            if (!book) {
                return res.status(404).json({
                    message: 'No such book'
                });
            }

            book.book_no = req.body.book_no ? req.body.book_no : book.book_no;
			book.issued_to = req.body.issued_to ? req.body.issued_to : book.issued_to;
			book.issue_date = req.body.issue_date ? req.body.issue_date : book.issue_date;
			book.issued_by = req.body.issued_by ? req.body.issued_by : book.issued_by;
			book.status = req.body.status ? req.body.status : book.status;

            book.save((err, book) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating book.',
                        error: err
                    });
                }

                return res.json(book);
            });
        });
    },

    /**
     * bookController.remove()
     */
    remove: (req, res)=> {
        let id = req.params.id;
        bookModel.findByIdAndRemove(id, function (err, book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the book.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },

      /**
     * bookController.one()
     */
    one: (req, res) => {
        let id = req.params.id;
        bookModel.findOne({status: 'open'}, (err, book) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book.',
                    error: err
                });
            }
            if (!book) {
                return res.status(404).json({
                    message: 'No such book no'
                });
            }
            return res.json(book);
        });
    },


};
