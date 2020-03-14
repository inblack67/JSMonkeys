const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({

  name: {
    type: String,
    required: [true, 'You must add your name']
  },

  email: {
    type: String,
    required: [true, 'You must add your email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'You must add a valid email'
    ]
  },

  password: {
    type: String,
    required: [true, 'You must add your password'],
    minlength: 6,
    select: false
  },

  avatar: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash Password
UserSchema.pre('save', async function (next) {

  if(!this.isModified('password'))
  {
    // skip encrypting
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});


// Sign Token
UserSchema.methods.getSignedToken = function(){
  const payload = { id: this._id }
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })
}

// password compare
UserSchema.methods.isMatch = function(enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
}


module.exports = mongoose.model('User', UserSchema);