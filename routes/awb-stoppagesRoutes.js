const express = require('express');
const router = express.Router();
const awbStoppagescOntroller = require('../controllers/awb_stoppagesController.js');

/*
 * GET
 */
router.get('/', awbStoppagescOntroller.list);

/*
 * GET
 */
router.get('/:id', awbStoppagescOntroller.show);

/*
 * POST
 */
router.post('/', awbStoppagescOntroller.create);

/*
 * PUT
 */
router.put('/:id', awbStoppagescOntroller.update);

/*
 * DELETE
 */
router.delete('/:id', awbStoppagescOntroller.remove);

module.exports = router;
