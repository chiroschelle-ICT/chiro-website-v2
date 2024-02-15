const express = require('express');
const router = express.Router();
const verhuurController = require('../controllers/verhuurController');

// GET | Return all verhuur items
router.get('/verhuur', verhuurController.getAllVerhuur);

// GET | Return verhuur item by id
router.get('/verhuur/:id', verhuurController.getVerhuurById);

// POST | Add new verhuur Item
router.post('/verhuur/addVerhuur', verhuurController.postVerhuur);

// PUT | edit Verhuur Item
router.put('/verhuur/editVerhuur/:id', verhuurController.putVerhuur);

// DELETE | delete Verhuur item
router.delete('/verhuur/deleteVerhuur/:id', verhuurController.deleteVerhuur);

module.exports = router;