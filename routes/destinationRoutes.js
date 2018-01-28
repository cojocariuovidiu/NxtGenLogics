const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController.js');

/*
 * GET
 */
router.get('/', destinationController.list);

/*
 * GET
 */
router.get('/:id', destinationController.show);

/*
 * POST
 */
router.post('/', destinationController.create);

/*
 * PUT
 */
router.put('/:id', destinationController.update);

/*
 * DELETE
 */
router.delete('/:id', destinationController.remove);

module.exports = router;
