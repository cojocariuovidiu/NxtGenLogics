const express = require('express');
const router = express.Router();
const staffsController = require('../controllers/staffsController.js');

/*
 * GET
 */
router.get('/', staffsController.list);

/*
 * GET
 */
router.get('/:id', staffsController.show);

/*
 * POST
 */
router.post('/', staffsController.create);

/*
 * PUT
 */
router.put('/:id', staffsController.update);

/*
 * DELETE
 */
router.delete('/:id', staffsController.remove);

module.exports = router;
