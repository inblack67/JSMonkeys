const asyncHandler = require('../middlewares/async')
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

    const token = await user.getSignedToken()
    
    res.status(201).json({ success: true, token, msg: 'Registration Successful' });
  }
);
