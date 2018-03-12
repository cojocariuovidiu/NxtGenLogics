const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController.js');
const bookController = require('../controllers/bookController.js');

/*
 * POST
 */
router.get('/company/:id', bookingController.company);

router.get('/book/one', bookController.one);

router.get('/booking/one', bookingController.one);




module.exports = router;
