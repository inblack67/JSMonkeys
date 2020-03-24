const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const Profile = require('../models/Profile');
const Post = require('../models/Post');


// @route POST /api/posts
// @desc Add Post
// @access Private
exports.addPost = asyncHandler(
  async (req,res,next) => {
    const user = await User.findById(req.user.id);
    req.body.user = user.id;
    req.body.name = user.name;
    req.body.avatar = user.avatar;

    const post = await Post.create(req.body);

    return res.status(200).json({ success: true, data: post, msg: 'Post Added Successfuly' })
  }
)

// @route GET /api/posts
// @desc Get All Posts
// @access Private
exports.getPosts = asyncHandler(
  async (req,res,next) => {
    const posts = await Post.find();

    const count = posts.length;

    return res.status(200).json({ success: true, count, data: posts })

  }
)


// @route GET /api/posts/:id
// @desc Get Single Post
// @access Private
exports.getPost = asyncHandler(
  async (req,res,next) => {

    const post = await Post.findById(req.params.id);

    if(!post)
    {
      return next(new ErrorResponse('No Such Post Found', 404));
    }

    return res.status(200).json({ success: true, data: post })

  }
)

// @route DELETE /api/posts/:id
// @desc Delete Post
// @access Private
exports.deletePost = asyncHandler(
  async (req,res,next) => {

    const post = await Post.findById(req.params.id);

    if(!post)
    {
      return next(new ErrorResponse('No Such Post Found', 404));
    }

    if(post.user.toString() !== req.user.id)
    {
      return next(new ErrorResponse('Not Authorized', 401));
    }

    await post.remove();

    const posts = await Post.find();

    return res.status(200).json({ success: true, data: posts, msg: 'Post Deleted Successfuly' })

  }
)


// @route PUT /api/posts/like/:id
// @desc Like Post
// @access Private
exports.likePost = asyncHandler(
  async (req,res,next) => {

    const post = await Post.findById(req.params.id);

    if(!post)
    {
      return next(new ErrorResponse('No Such Post Exists', 404));
    }

    // Already Liked?
    if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0)
    {
        return next(new ErrorResponse('Post Already Liked', 400));
    }

    post.likes.push({ user: req.user.id });

    await post.save();

    return res.status(200).json({ success: true, data: post.likes, msg: 'Post Liked' })

  }
)

// @route PUT /api/posts/unlike/:id
// @desc Unlike Post
// @access Private
exports.unlikePost = asyncHandler(
  async (req,res,next) => {

    const post = await Post.findById(req.params.id);

    if(!post)
    {
      return next(new ErrorResponse('No Such Post Exists', 404));
    }

    // Not Liked?
    if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0)
    {
        return next(new ErrorResponse('Post has not yet been liked', 400));
    }

    const removeIndex = post.likes.map(like => like.user.toString())
    .indexOf(req.user.id)

    post.likes.splice(removeIndex, 1);

    await post.save();

    return res.status(200).json({ success: true, data: post.likes, msg: 'Post Unliked' })

  }
)

// @route POST /api/posts/comment/:id
// @desc Add Comment
// @access Private
exports.addComment = asyncHandler(
  async (req,res,next) => {

    const user = await User.findById(req.user.id);
    const post = await Post.findById(req.params.id);

    req.body.user = user.id;
    req.body.name = user.name;
    req.body.avatar = user.avatar;

    post.comments.unshift(req.body);

    await post.save();

    return res.status(200).json({ success: true, data: post.comments, msg: 'Comment Added Successfuly' })
  }
)


// @route DELETE /api/posts/comment/:id/:comment_id
// @desc Delete Comment
// @access Private
exports.deleteComment = asyncHandler(
  async (req,res,next) => {

    const post = await Post.findById(req.params.id);

    const comment = post.comments.find(c => c.id === req.params.comment_id);

    if(!comment)
    {
      return next(new ErrorResponse('No Such Comment Exists', 404)); 
    }

    if(comment.user.toString() !== req.user.id)
    {
      return next(new ErrorResponse('Not Authorized', 401));
    }

    const removeIndex = post.comments.map(c => c.user.toString() === req.user.id).indexOf();

    post.comments.splice(removeIndex, 1);

    await post.save();

    return res.status(200).json({ success: true, data: post.comments, msg: 'Comment Deleted Successfuly' })
  }
)