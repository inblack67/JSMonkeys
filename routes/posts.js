const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const { addPost, getPosts, getPost, deletePost, likePost, unlikePost, addComment, deleteComment } = require('../controllers/posts');


router.post('/', protect, addPost)
.get('/', protect, getPosts)
.get('/:id', protect, getPost)
.delete('/:id', protect, deletePost)
.put('/like/:id', protect, likePost)
.put('/unlike/:id', protect, unlikePost)
.post('/comment/:id', protect, addComment)
.delete('/comment/:id/:comment_id', protect, deleteComment)


module.exports = router;