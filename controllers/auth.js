const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse');
const gravatar = require('gravatar');
const User = require('../models/User');



// @route POST /api/auth
// @desc Login User
// @access Private
exports.login = asyncHandler(
  async (req,res,next) => {

    const user = await User.findOne({ email: req.body.email }).select('+password')

    if(!user)
    {
      return next(new ErrorResponse('Invalid Credentials', 401));
    }

    const isMatch = await user.isMatch(req.body.password)

    if(!isMatch)
    {
      return next(new ErrorResponse('Invalid Credentials', 401));
    }

    const token = await user.getSignedToken();

    return res.status(200).json({ success: true, token })
  }
)




// @route GET /api/auth
// @desc Get Logged In User
// @access Private
exports.getMe = asyncHandler(
  async (req,res,next) => {
    const user = await User.findById(req.user.id);
    return res.status(200).json({ success: true, data: user });
  }
)