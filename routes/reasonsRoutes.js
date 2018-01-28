const express = require('express');
const router = express.Router();
const reasonsController = require('../controllers/reasonsController.js');

/*
 * GET
 */
router.get('/', reasonsController.list);

/*
 * GET
 */
router.get('/:id', reasonsController.show);

/*
 * POST
 */
router.post('/', reasonsController.create);

/*
 * PUT
 */
router.put('/:id', reasonsController.update);

/*
 * DELETE
 */
router.delete('/:id', reasonsController.remove);

module.exports = router;
