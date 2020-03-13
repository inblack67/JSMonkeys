const ErrorResponse = require('../utils/errorResponse');
require('colors');

const errorHandler = (err, req, res, next) => {

  let error = {...err};
  error.message = err.message;
  console.log(`${error}`.red.bold);

  if(err.name === 'CastError')
  {
    const message = `Resource Not Found`;
    error = new ErrorResponse(message, 404);
  }

  if(err.code === 11000)
  {
    const message = `Resource Already Exists`;
    error = new ErrorResponse(message, 400);
  }

    // validation error
    if(err.name === 'ValidationError')
    {
      const message = Object.values(err.errors).map(value => value.message);
      error = new ErrorResponse(message,400);
    }

    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || 'Server Error'
    });
}
  
  module.exports = errorHandler;

