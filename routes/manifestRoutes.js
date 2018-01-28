const express = require('express');
const router = express.Router();
const manifestController = require('../controllers/manifestController.js');

/*
 * GET
 */
router.get('/', manifestController.list);

/*
 * GET
 */
router.get('/:id', manifestController.show);

/*
 * POST
 */
router.post('/', manifestController.create);

/*
 * PUT
 */
router.put('/:id', manifestController.update);

/*
 * DELETE
 */
router.delete('/:id', manifestController.remove);

module.exports = router;
