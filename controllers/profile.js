const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse');
const Profile = require('../models/Profile');
const User = require('../models/User');

// @route GET /api/profile/me
// @desc Get Logged (Current) In User's Profile
// @access Private
exports.getMyProfile = asyncHandler(
 async (req, res, next) => {

  const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

  if(!profile)
  {
    return next(new ErrorResponse('No Profile Exists', 404));
  }

  return res.status(200).json({ success: true, profile })
}
);



// @route POST /api/profile
// @desc Create Or Update Profile
// @access Private
exports.createProfile = asyncHandler(

  async (req, res) => {

    const {skills,youtube,facebook,twitter,instagram,linkedin} = req.body;

    req.body.user = req.user.id;

    if(skills) 
    { req.body.skills = skills.split(',').map(skill => skill.trim()) }

    let socialFields = {}

    if(youtube)
    {
      socialFields.youtube = youtube
      req.body.social = socialFields
    }

    if(twitter)
    {
      socialFields.twitter = twitter
      req.body.social = socialFields
    }

    if(linkedin)
    {
      socialFields.linkedin = linkedin
      req.body.social = socialFields
    }

    if(instagram)
    {
      socialFields.instagram = instagram
      req.body.social = socialFields
    }

    if(facebook)
    {
      socialFields.facebook = facebook
      req.body.social = socialFields
    }

    // Update Profile

    let profile = await Profile.findOne({ user: req.user.id });

    if(profile)
    {
      profile = await Profile.findOneAndUpdate({ user: req.user.id }, req.body, { new: true });
      return res.status(200).json({ success: true, data: profile, msg: 'Profile Updated Successfuly' });
    }

    // New Profile
    profile = await Profile.create(req.body);

    return res.status(201).json({ success: true, data: profile, msg: 'Profile Created Successfuly' });
    
  }
)

 
// @route GET /api/profile
// @desc Get All Profiles
// @access Public
exports.getAllProfiles = asyncHandler(
  async (req,res,next) => {

    const profiles = 
    await Profile.find().populate('user', ['name', 'avatar']);

    return res.status(200).json({ success: true, data: profiles });

  }
)


// @route GET /api/profile/user/:id
// @desc Get Profile Of A User
// @access Public
exports.getProfileByUserId = asyncHandler(
  async (req,res,next) => {

    const profile = 
    await Profile.findOne({ user: req.params.id }).populate('user', ['name', 'avatar']);

    if(!profile)
    {
      return next(new ErrorResponse('Profile Not Found', 404));
    }

    return res.status(200).json({ success: true, data: profile });
  }
)


// @route DELETE /api/profile
// @desc Delete Profile, User, and its Posts
// @access Private
exports.deleteProfile = asyncHandler(
  async (req,res,next) => {

    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });

    return res.status(200).json({ success: true, msg: 'Profile Deleted Successfully' });
  }
)


// @route PUT /api/profile/experience
// @desc Add Profile Experience
// @access Private
exports.addExperience = asyncHandler(
  async (req,res,next) => {

    // const { title,company,location,from,to,current,description } = req.body

    // let experienceFields = {

    // };

    const profile = await Profile.findOne({ user: req.user.id });

    console.log(profile);

    if(!profile)
    {
      return next(new ErrorResponse('Profile Not Found', 404));
    }

    profile.experience = req.body;

    await profile.save();

    return res.status(200).json({ success: true, data: profile,  msg: 'Experience Added Successfully' });
  }
)