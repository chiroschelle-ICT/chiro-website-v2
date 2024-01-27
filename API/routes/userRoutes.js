const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET | Return all users
router.get('/users', userController.getAllUsers);

// GET | return user by id
router.get('/users/:id', userController.getUserById);

// POST | Create new user
router.post('/users/addUser', userController.postUser);

// PUT | Update User
router.put('/users/editUser/:id', userController.putUser);


// DELETE | Delete user by id
router.delete('/users/deleteUser/:id', userController.deleteUser);

module.exports = router;