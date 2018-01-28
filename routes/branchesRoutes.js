const express = require('express');
const router = express.Router();
const branchesController = require('../controllers/branchesController.js');

/*
 * GET
 */
router.get('/', branchesController.list);

/*
 * GET
 */
router.get('/:id', branchesController.show);

/*
 * POST
 */
router.post('/', branchesController.create);

/*
 * PUT
 */
router.put('/:id', branchesController.update);

/*
 * DELETE
 */
router.delete('/:id', branchesController.remove);

module.exports = router;
