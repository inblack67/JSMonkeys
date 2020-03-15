const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },

  text: {
    type: String,
    required: [true, 'You must add some text']
  },

  // If user gone, his post shall remain
  name: {
    type: String
  },

  avatar: {
    type: String
  },

  likes: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    }
  ],

  comments: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      },

      text: {
        type: String,
        required: [true, 'You must add a comment']
      },

      name: {
        type: String
      },

      avatar: {
        type: String
      },

      createdAt: {
        type: Date,
        default: Date.now
      }

    }
  ],

  createdAt: {
    type: Date,
    default: Date.now
  }

});


module.exports = mongoose.model('Post', PostSchema);