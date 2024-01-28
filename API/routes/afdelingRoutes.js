const express = require('express');
const router = express.Router();
const afdelingController = require('../controllers/afdelingController');

// GET | Return all programmas
router.get('/afdeling', afdelingController.getAllAfdelingen);

// GET | return programma by id
router.get('/afdeling/:id', afdelingController.getAfdelingById);

module.exports = router;