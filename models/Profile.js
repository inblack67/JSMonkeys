const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  
  company:{
    type: String
  },

  website:{
    type: String
  },

  location:{
    type: String
  },

  status:{      // junior dev?
    type: String,
    required: [true, 'You must add your status']
  },

  skills: {    
    type: [String],
    required: [true, 'You must add your skillset']
  },

  bio: {
    type: String
  },

  githubusername: {
    type: String
  },

  experience: [
    {
      title: {
        type: String,
        required: [true, 'You must add your title']
      },
      company: {
        type: String,
        required: [true, 'You must add your company']
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: [true, 'You must add your joining date at the company']
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: [true, 'You must add your school']
      },
      degree: {
        type: String,
        required: [true, 'You must add your degree']
      },
      fieldofstudy: {
        type: String,
        required: [true, 'You must add your field of study']
      },
      from: {
        type: Date,
        required: [true, 'You must add your joining date at school']
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});



module.exports = mongoose.model('Profile', ProfileSchema);