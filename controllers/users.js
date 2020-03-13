const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../middlewares/error');
const gravatar = require('gravatar');
const User = require('../models/User');


// @route POST /api/users
// @desc Register User
// @access Public
exports.register = asyncHandler(
 async (req, res, next) => {

    const avatar = gravatar.url(req.body.email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    });

    req.body.avatar = avatar;

    const user = await User.create(req.body);
    
    res.status(201).json({ success: true, data: user, msg: 'Registration Successful' });
  }
);