const express = require('express');
const router = express.Router();
const bookingTypeController = require('../controllers/booking_typeController.js');

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
