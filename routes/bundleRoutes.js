const express = require('express');
const router = express.Router();
const bundleController = require('../controllers/bundleController.js');

/*
 * GET
 */
router.get('/', bundleController.list);

/*
 * GET
 */
router.get('/:id', bundleController.show);

/*
 * POST
 */
router.post('/', bundleController.create);

/*
 * PUT
 */
router.put('/:id', bundleController.update);

/*
 * DELETE
 */
router.delete('/:id', bundleController.remove);

module.exports = router;
