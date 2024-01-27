const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET | Return all users
router.get('/users', function(res) {
    userController.getAllUsers
});

// GET | return user by id
router.get('/users/:id', function(res) 
{
    userController.getUserById
});

// POST | Create new user
router.post('/users/addUser', function(res){
    userController.postUser
});

// PUT | Update User
router.put('/users/editUser/:id', function(res) {
    userController.putUser
});


// DELETE | Delete user by id
router.delete('/users/deleteUser/:id', function(res) {
    userController.deleteUser
});

module.exports = router;