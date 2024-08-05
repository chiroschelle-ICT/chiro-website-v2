const express = require('express');
const router = express.Router();
const goepieController = require('../controllers/goepieController');

router.get('/goepie', goepieController.getGoepie);

router.post('/goepie/addGoepie', goepieController.postGoepie);

module.exports = router;
