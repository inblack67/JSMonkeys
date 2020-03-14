const User = require('../models/User');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');

exports.protect = asyncHandler( async (req,res,next) => {

  const token = req.header('x-auth-token');

  if(!token)
  {
    return next(new ErrorResponse('Not Authorized', 401));
  }

  try {
    
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = await User.findById(decoded.id);
  
    next();

  } catch (err) {
    return next(new ErrorResponse('Not Authorized', 401));
  }

}

);
