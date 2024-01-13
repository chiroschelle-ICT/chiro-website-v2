const express = require('express');
const router = express.Router();
const blogPostsController = require('../controllers/blogController');

// GET | ALl blogPosts
router.get('/blogPosts', blogPostsController.getAllBlogPosts);

// GET | blogPost by Id
router.get('/blogPosts/:id', blogPostsController.getBlogPostById);

// POST | Add new blogpost
router.post('/blogPost/addBlogpost', blogPostsController.postBlogPost);

// PUT | Update blogpost
router.get('/blogPost/:id', );



module.exports = router;