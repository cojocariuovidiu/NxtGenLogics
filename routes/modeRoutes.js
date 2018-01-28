const express = require('express');
const router = express.Router();
const modeController = require('../controllers/modeController.js');

/*
 * GET
 */
router.get('/', modeController.list);

/*
 * GET
 */
router.get('/:id', modeController.show);

/*
 * POST
 */
router.post('/', modeController.create);

/*
 * PUT
 */
router.put('/:id', modeController.update);

/*
 * DELETE
 */
router.delete('/:id', modeController.remove);

module.exports = router;
