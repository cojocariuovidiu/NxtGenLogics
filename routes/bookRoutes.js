const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController.js');

/*
 * GET
 */
router.get('/', bookController.list);

/*
 * GET
 */
router.get('/:id', bookController.show);

/*
 * POST
 */
router.post('/', bookController.create);

/*
 * PUT
 */
router.put('/:id', bookController.update);

/*
 * DELETE
 */
router.delete('/:id', bookController.remove);



module.exports = router;
