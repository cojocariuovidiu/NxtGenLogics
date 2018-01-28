const express = require('express');
const router = express.Router();
const bundleAwbController = require('../controllers/bundle_awbController.js');

/*
 * GET
 */
router.get('/', bundleAwbController.list);

/*
 * GET
 */
router.get('/:id', bundleAwbController.show);

/*
 * POST
 */
router.post('/', bundleAwbController.create);

/*
 * PUT
 */
router.put('/:id', bundleAwbController.update);

/*
 * DELETE
 */
router.delete('/:id', bundleAwbController.remove);

module.exports = router;
