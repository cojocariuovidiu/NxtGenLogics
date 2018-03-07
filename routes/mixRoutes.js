const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController.js');

/*
 * POST
 */
router.get('/company/:id', bookingController.company);





module.exports = router;
