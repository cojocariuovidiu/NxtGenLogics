var purchase-orderModel = require('../models/purchase-orderModel.js');

/**
 * purchase-orderController.js
 *
 * @description :: Server-side logic for managing purchase-orders.
 */
module.exports = {

    /**
     * purchase-orderController.list()
     */
    list: function (req, res) {
        purchase-orderModel.find(function (err, purchase-orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting purchase-order.',
                    error: err
                });
            }
            return res.json(purchase-orders);
        });
    },

    /**
     * purchase-orderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        purchase-orderModel.findOne({_id: id}, function (err, purchase-order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting purchase-order.',
                    error: err
                });
            }
            if (!purchase-order) {
                return res.status(404).json({
                    message: 'No such purchase-order'
                });
            }
            return res.json(purchase-order);
        });
    },

    /**
     * purchase-orderController.create()
     */
    create: function (req, res) {
        var purchase-order = new purchase-orderModel({
			pod_id : req.body.pod_id,
			awb_no : req.body.awb_no,
			status : req.body.status,
			delivery_date : req.body.delivery_date,
			receiver_name : req.body.receiver_name,
			receiver_phone : req.body.receiver_phone,
			reason : req.body.reason,
			receive_amount : req.body.receive_amount,
			remarks : req.body.remarks

        });

        purchase-order.save(function (err, purchase-order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating purchase-order',
                    error: err
                });
            }
            return res.status(201).json(purchase-order);
        });
    },

    /**
     * purchase-orderController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        purchase-orderModel.findOne({_id: id}, function (err, purchase-order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting purchase-order',
                    error: err
                });
            }
            if (!purchase-order) {
                return res.status(404).json({
                    message: 'No such purchase-order'
                });
            }

            purchase-order.pod_id = req.body.pod_id ? req.body.pod_id : purchase-order.pod_id;
			purchase-order.awb_no = req.body.awb_no ? req.body.awb_no : purchase-order.awb_no;
			purchase-order.status = req.body.status ? req.body.status : purchase-order.status;
			purchase-order.delivery_date = req.body.delivery_date ? req.body.delivery_date : purchase-order.delivery_date;
			purchase-order.receiver_name = req.body.receiver_name ? req.body.receiver_name : purchase-order.receiver_name;
			purchase-order.receiver_phone = req.body.receiver_phone ? req.body.receiver_phone : purchase-order.receiver_phone;
			purchase-order.reason = req.body.reason ? req.body.reason : purchase-order.reason;
			purchase-order.receive_amount = req.body.receive_amount ? req.body.receive_amount : purchase-order.receive_amount;
			purchase-order.remarks = req.body.remarks ? req.body.remarks : purchase-order.remarks;
			
            purchase-order.save(function (err, purchase-order) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating purchase-order.',
                        error: err
                    });
                }

                return res.json(purchase-order);
            });
        });
    },

    /**
     * purchase-orderController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        purchase-orderModel.findByIdAndRemove(id, function (err, purchase-order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the purchase-order.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
