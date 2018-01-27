var express = require('express');
var router = express.Router();
var bookingTypeController = require('../controllers/booking_typeController.js');

/*
 * GET
 */
router.get('/', bookingTypeController.list);

/*
 * GET
 */
router.get('/:id', bookingTypeController.show);

/*
 * POST
 */
router.post('/', bookingTypeController.create);

/*
 * PUT
 */
router.put('/:id', bookingTypeController.update);

/*
 * DELETE
 */
router.delete('/:id', bookingTypeController.remove);

module.exports = router;
