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
 * POST
 */
router.post('/report', bookingController.report);

/*
 * POST
 */
router.post('/company', bookingController.company);





module.exports = router;
