const express = require('express');
const router = express.Router();
const programmaController = require('../controllers/programmaController');

// GET | Return all programmas
router.get('/programma', programmaController.getAllProgramma);

// GET | Test
router.get('/programma/test', programmaController.getTest);

// GET | Get all programmas by ID
router.get('/programma/:id', programmaController.getProgrammaById);

// GET | get per programma
router.get('/programma/getAfdelingId/:id', programmaController.getProgrammaPerAfdeling)

// POST | Add new Programma
router.post('/programma/postProgramma', programmaController.postProgramma);

// PUT | Edit Programma
router.put('/programma/putProgramma/:id', programmaController.putProgramma);

// DELETE | Delete Programma
router.delete('/programma/deleteProgramma/:id', programmaController.deleteProgramma);


module.exports = router;