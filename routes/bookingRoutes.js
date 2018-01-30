const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController.js');

/*
 * GET
 */
router.get('/', bookingController.list);

/*
 * GET
 */
router.get('/:id', bookingController.show);

/*
 * POST
 */
router.post('/', bookingController.create);

/*
 * PUT
 */
router.put('/:id', bookingController.update);

/*
 * DELETE
 */
router.delete('/:id', bookingController.remove);

/*
 * REPORT
 */
router.post('/report', bookingController.report);

module.exports = router;
