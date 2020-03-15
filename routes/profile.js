const express = require('express');
const router = express.Router();
const { getMyProfile, createProfile, getAllProfiles, getProfileByUserId, deleteProfile, addExperience, deleteExperience, addEducation, deleteEducation, getRepos } = require('../controllers/profile');
const { protect } = require('../middlewares/auth');
const { validationResult, check }= require('express-validator'); 


router
.get('/me', protect, getMyProfile)
.get('/', getAllProfiles)
.get('/user/:id', getProfileByUserId)
.delete('/', protect, deleteProfile)
.put('/experience', protect, addExperience)
.delete('/experience/:id', protect, deleteExperience)
.put('/education', protect, addEducation)
.delete('/education/:id', protect, deleteEducation)
.get('/github/:username', getRepos)

.post('/', [
  protect, [
  check('status', 'You must add your status').not().isEmpty(),
  check('skills', 'You must add your skillset').not().isEmpty()
]
], async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty())
  {
    return res.status(400).json({ success: false, errors: errors.array() })
  }

  else
  {
    createProfile(req,res);
  }
});




module.exports = router;