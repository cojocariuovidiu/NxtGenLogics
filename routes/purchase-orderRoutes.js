var express = require('express');
var router = express.Router();
var purchase-orderController = require('../controllers/purchase-orderController.js');

/*
 * GET
 */
router.get('/', purchase-orderController.list);

/*
 * GET
 */
router.get('/:id', purchase-orderController.show);

/*
 * POST
 */
router.post('/', purchase-orderController.create);

/*
 * PUT
 */
router.put('/:id', purchase-orderController.update);

/*
 * DELETE
 */
router.delete('/:id', purchase-orderController.remove);

module.exports = router;
