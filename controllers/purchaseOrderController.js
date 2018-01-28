var purchaseOrderModel = require('../models/purchaseOrderModel.js');

/**
 * purchaseOrderController.js
 *
 * @description :: Server-side logic for managing purchaseOrders.
 */
module.exports = {

    /**
     * purchaseOrderController.list()
     */
    list: function (req, res) {
        purchaseOrderModel.find(function (err, purchaseOrders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting purchaseOrder.',
                    error: err
                });
            }
            return res.json(purchaseOrders);
        });
    },

    /**
     * purchaseOrderController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        purchaseOrderModel.findOne({_id: id}, function (err, purchaseOrder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting purchaseOrder.',
                    error: err
                });
            }
            if (!purchaseOrder) {
                return res.status(404).json({
                    message: 'No such purchaseOrder'
                });
            }
            return res.json(purchaseOrder);
        });
    },

    /**
     * purchaseOrderController.create()
     */
    create: function (req, res) {
        var purchaseOrder = new purchaseOrderModel({
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

        purchaseOrder.save(function (err, purchaseOrder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating purchaseOrder',
                    error: err
                });
            }
            return res.status(201).json(purchaseOrder);
        });
    },

    /**
     * purchaseOrderController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        purchaseOrderModel.findOne({_id: id}, function (err, purchaseOrder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting purchaseOrder',
                    error: err
                });
            }
            if (!purchaseOrder) {
                return res.status(404).json({
                    message: 'No such purchaseOrder'
                });
            }

            purchaseOrder.pod_id = req.body.pod_id ? req.body.pod_id : purchaseOrder.pod_id;
			purchaseOrder.awb_no = req.body.awb_no ? req.body.awb_no : purchaseOrder.awb_no;
			purchaseOrder.status = req.body.status ? req.body.status : purchaseOrder.status;
			purchaseOrder.delivery_date = req.body.delivery_date ? req.body.delivery_date : purchaseOrder.delivery_date;
			purchaseOrder.receiver_name = req.body.receiver_name ? req.body.receiver_name : purchaseOrder.receiver_name;
			purchaseOrder.receiver_phone = req.body.receiver_phone ? req.body.receiver_phone : purchaseOrder.receiver_phone;
			purchaseOrder.reason = req.body.reason ? req.body.reason : purchaseOrder.reason;
			purchaseOrder.receive_amount = req.body.receive_amount ? req.body.receive_amount : purchaseOrder.receive_amount;
			purchaseOrder.remarks = req.body.remarks ? req.body.remarks : purchaseOrder.remarks;
			
            purchaseOrder.save(function (err, purchaseOrder) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating purchaseOrder.',
                        error: err
                    });
                }

                return res.json(purchaseOrder);
            });
        });
    },

    /**
     * purchaseOrderController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        purchaseOrderModel.findByIdAndRemove(id, function (err, purchaseOrder) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the purchaseOrder.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
