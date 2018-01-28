const express = require('express');
const router = express.Router();
const zoneController = require('../controllers/zoneController.js');

/*
 * GET
 */
router.get('/', zoneController.list);

/*
 * GET
 */
router.get('/:id', zoneController.show);

/*
 * POST
 */
router.post('/', zoneController.create);

/*
 * PUT
 */
router.put('/:id', zoneController.update);

/*
 * DELETE
 */
router.delete('/:id', zoneController.remove);

module.exports = router;
