var express = require('express');
var router = express.Router();
var movementsController = require('../controllers/movementsController.js');

/*
 * GET
 */
router.get('/', movementsController.list);

/*
 * GET
 */
router.get('/:id', movementsController.show);

/*
 * POST
 */
router.post('/', movementsController.create);

/*
 * PUT
 */
router.put('/:id', movementsController.update);

/*
 * DELETE
 */
router.delete('/:id', movementsController.remove);

module.exports = router;
