const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoController');

// GET | Return all info Info 
router.get('/info', infoController.getAllInfo);

// GET | Return Info item by id
router.get('/info/:id', infoController.getInfoById);

// POST | Add new Info Item
router.post('/info/postInfo', infoController.postInfo);

// PUT | edit info Item
router.put('/info/putInfo/:id', infoController.putInfo);

// DELETE | delete Info item
router.post('/info/deleteInfo/:id', infoController.deleteInfo);

module.exports = router;