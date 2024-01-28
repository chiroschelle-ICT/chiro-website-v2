const express = require('express');
const router = express.Router();
const programmaController = require('../controllers/programmaController');

// GET | Return all programmas
router.get('/programma', programmaController.getAllProgrammas);

// GET | return programma by id
router.get('/programma/:id', programmaController.getProgrammaById);

module.exports = router;