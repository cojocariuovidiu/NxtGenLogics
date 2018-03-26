const bookingModel = require('../models/bookingModel.js');

/**
 * bookingController.js
 *
 * @description :: Server-side logic for managing bookings.
 */
module.exports = {

    /**
     * bookingController.list()
     */
    one: (req, res) => {
        bookingModel.findOne().exec((err, booking) => {
                 if (err) {
                return res.status(500).json({
                    message: 'Error when getting booking.',
                    error: err
                });
            }
            if (!booking) {
                return res.status(404).json({
                    message: 'No such booking'
                });
            }
            return res.json(booking);
        });
    },
    list: (req, res) => {
        bookingModel.find(function (err, bookings) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting booking.',
                    error: err
                });
            }
            return res.json(bookings);
        });
    },

    /**
     * bookingController.show()
     */
    show: (req, res) => {

        let id = req.params.id;
        bookingModel.findOne({_id: id}, (err, booking) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting booking.',
                    error: err
                });
            }
            if (!booking) {
                return res.status(404).json({
                    message: 'No such booking'
                });
            }
            return res.json(booking);
        });
    },

    /**
     * bookingController.create()
     */
    create: (req, res) => {
        let booking = new bookingModel({
			awb : req.body.awb,
            bookno: req.body.bookno,
			booking_date : req.body.booking_date,
			bookin_time : req.body.bookin_time,
			shipment_id : req.body.shipment_id,
			company : req.body.company,
			consignor : req.body.consignor,
			consignee : req.body.consignee,
			address : req.body.address,
			origin : req.body.origin,
			destination : req.body.destination,
			mode : req.body.mode,
			normal_pcs : req.body.normal_pcs,
			volumetric_pcs : req.body.volumetric_pcs,
			net_pcs : req.body.net_pcs,
			actual_wt : req.body.actual_wt,
			volumetric_wt : req.body.volumetric_wt,
			chr_wt : req.body.chr_wt,
			doc_type : req.body.doc_type,
			booking_type : req.body.booking_type,
            labour_charge: req.body.labour_charge,
            document_charge: req.body.document_charge,
            insurance_charge: req.body.insurance_charge,
            other_charge: req.body.other_charge,
            fixed_val: req.body.fixed_val,
            gst: req.body.gst,
			inv_no : req.body.inv_no,
			inv_val : req.body.inv_val,
            invtotal: req.body.invtotal,
			packing_type : req.body.packing_type,
			remarks : req.body.remarks,
			delivery_date : req.body.delivery_date,
            bundled: req.body.bundled,
            status: req.body.status

        });
        
        console.log(req.body);
        
        booking.save((err, booking)=> {

            if (err) {
                return res.status(500).json({
                    message: 'Error when creating booking',
                    error: err
                });
            }
            return res.status(201).json(booking);
        });
    },

    /**
     * bookingController.update()
     */
    update: (req, res) => {
        let id = req.params.id;
        bookingModel.findOne({_id: id}, (err, booking) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting booking',
                    error: err
                });
            }
            if (!booking) {
                return res.status(404).json({
                    message: 'No such booking'
                });
            }

            booking.awb = req.body.awb ? req.body.awb : booking.awb;
			booking.booking_date = req.body.booking_date ? req.body.booking_date : booking.booking_date;
			booking.bookin_time = req.body.bookin_time ? req.body.bookin_time : booking.bookin_time;
			booking.shipment_id = req.body.shipment_id ? req.body.shipment_id : booking.shipment_id;
			booking.company = req.body.company ? req.body.company : booking.company;
			booking.consignor = req.body.consignor ? req.body.consignor : booking.consignor;
			booking.consignee = req.body.consignee ? req.body.consignee : booking.consignee;
			booking.address = req.body.address ? req.body.address : booking.address;
			booking.origin = req.body.origin ? req.body.origin : booking.origin;
			booking.destination = req.body.destination ? req.body.destination : booking.destination;
			booking.mode = req.body.mode ? req.body.mode : booking.mode;
			booking.normal_pcs = req.body.normal_pcs ? req.body.normal_pcs : booking.normal_pcs;
			booking.volumetric_pcs = req.body.volumetric_pcs ? req.body.volumetric_pcs : booking.volumetric_pcs;
			booking.net_pcs = req.body.net_pcs ? req.body.net_pcs : booking.net_pcs;
			booking.actual_wt = req.body.actual_wt ? req.body.actual_wt : booking.actual_wt;
			booking.volumetric_wt = req.body.volumetric_wt ? req.body.volumetric_wt : booking.volumetric_wt;
			booking.chr_wt = req.body.chr_wt ? req.body.chr_wt : booking.chr_wt;
			booking.doc_type = req.body.doc_type ? req.body.doc_type : booking.doc_type;
			booking.booking_type = req.body.booking_type ? req.body.booking_type : booking.booking_type;
			booking.inv_no = req.body.inv_no ? req.body.inv_no : booking.inv_no;
			booking.inv_val = req.body.inv_val ? req.body.inv_val : booking.inv_val;
			booking.packing_type = req.body.packing_type ? req.body.packing_type : booking.packing_type;
			booking.remarks = req.body.remarks ? req.body.remarks : booking.remarks;
			booking.delivery_date = req.body.delivery_date ? req.body.delivery_date : booking.delivery_date;
			
            booking.save((err, booking) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating booking.',
                        error: err
                    });
                }

                return res.json(booking);
            });
        });
    },

    /**
     * bookingController.remove()
     */
    remove: (req, res)=> {
        let id = req.params.id;
        bookingModel.findByIdAndRemove(id, function (err, booking) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the booking.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },

    /**
     * bookingController.report()
     */
    report: (req, res) => {

        let startDate = req.body.startDate;
        let endDate= req.body.endDate;
        console.log(startDate,endDate);
        if(startDate && endDate !== null){
             bookingModel.find({booking_date:{$gte: startDate, $lte: endDate }}, (err, bookings) => {

            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bookings.',
                    error: err
                });
            }
            if (!bookings) {
                return res.status(404).json({
                    message: 'No bookings in this period'
                });
            }
            return res.json(bookings);
        });
        }else{
            console.log('start and end date is required');
        }
       
    },

/**
     * bookingController.report()
     */
    company: (req, res) => {

        let id = req.params.id;
        
        console.log(id);
        bookingModel.find({company:id}, (err, bookings) => {

            if (err) {
                return res.status(500).json({
                    message: 'Error when getting bookings.',
                    error: err
                });
            }
            if (!bookings) {
                return res.status(404).json({
                    message: 'No bookings in this period'
                });
            }
            return res.json(bookings);
        });
    }


/**
     * bookingController.one()
     */

   

   
};
