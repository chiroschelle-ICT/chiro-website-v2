const express = require('express');
const router = express.Router();
const blogPostsController = require('../controllers/blogController');

// GET | ALl blogPosts
router.get('/blogPosts', function(res) { 
    blogPostsController.getAllBlogPosts
});

// GET | blogPost by Id
router.get('/blogPosts/:id', function(res) { 
    blogPostsController.getBlogPostById
});

// POST | Add new blogpost
router.post('/blogPost/addBlogpost', function(res) { 
    blogPostsController.postBlogPost
});

// PUT | Update blogpost
router.put('/blogPost/editBlogPost/:id', function(res) { 
    blogPostsController.putBlogPost
});

// DELETE | Delete blogpost by id
router.delete('/blogPost/deletePost/:id', function(res) { 
    blogPostsController.deleteBlogPost
});

module.exports = router;