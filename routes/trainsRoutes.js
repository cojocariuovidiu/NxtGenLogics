var express = require('express');
var router = express.Router();
var trainsController = require('../controllers/trainsController.js');

/*
 * GET
 */
router.get('/', trainsController.list);

/*
 * GET
 */
router.get('/:id', trainsController.show);

/*
 * POST
 */
router.post('/', trainsController.create);

/*
 * PUT
 */
router.put('/:id', trainsController.update);

/*
 * DELETE
 */
router.delete('/:id', trainsController.remove);

module.exports = router;
