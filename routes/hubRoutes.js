var express = require('express');
var router = express.Router();
var hubController = require('../controllers/hubController.js');

/*
 * GET
 */
router.get('/', hubController.list);

/*
 * GET
 */
router.get('/:id', hubController.show);

/*
 * POST
 */
router.post('/', hubController.create);

/*
 * PUT
 */
router.put('/:id', hubController.update);

/*
 * DELETE
 */
router.delete('/:id', hubController.remove);

module.exports = router;
