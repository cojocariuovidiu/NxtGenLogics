const express = require('express');
const router = express.Router();
const cnoteController = require('../controllers/cnoteController.js');

/*
 * GET
 */
router.get('/', cnoteController.list);

/*
 * GET
 */
router.get('/:id', cnoteController.show);

/*
 * POST
 */
router.post('/', cnoteController.create);

/*
 * PUT
 */
router.put('/:id', cnoteController.update);

/*
 * DELETE
 */
router.delete('/:id', cnoteController.remove);

module.exports = router;
