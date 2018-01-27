var express = require('express');
var router = express.Router();
var awb-stoppagesController = require('../controllers/awb-stoppagesController.js');

/*
 * GET
 */
router.get('/', awb-stoppagesController.list);

/*
 * GET
 */
router.get('/:id', awb-stoppagesController.show);

/*
 * POST
 */
router.post('/', awb-stoppagesController.create);

/*
 * PUT
 */
router.put('/:id', awb-stoppagesController.update);

/*
 * DELETE
 */
router.delete('/:id', awb-stoppagesController.remove);

module.exports = router;
