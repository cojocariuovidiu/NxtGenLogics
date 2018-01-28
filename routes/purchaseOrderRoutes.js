var express = require('express');
var router = express.Router();
var purchaseOrderController = require('../controllers/purchaseOrderController.js');

/*
 * GET
 */
router.get('/', purchaseOrderController.list);

/*
 * GET
 */
router.get('/:id', purchaseOrderController.show);

/*
 * POST
 */
router.post('/', purchaseOrderController.create);

/*
 * PUT
 */
router.put('/:id', purchaseOrderController.update);

/*
 * DELETE
 */
router.delete('/:id', purchaseOrderController.remove);

module.exports = router;
