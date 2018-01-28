const express = require('express');
const router = express.Router();
const coLoaderController = require('../controllers/coLoaderController.js');

/*
 * GET
 */
router.get('/', coLoaderController.list);

/*
 * GET
 */
router.get('/:id', coLoaderController.show);

/*
 * POST
 */
router.post('/', coLoaderController.create);

/*
 * PUT
 */
router.put('/:id', coLoaderController.update);

/*
 * DELETE
 */
router.delete('/:id', coLoaderController.remove);

module.exports = router;
