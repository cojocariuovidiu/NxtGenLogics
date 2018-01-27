var express = require('express');
var router = express.Router();
var zoneController = require('../controllers/zoneController.js');

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
