import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMyProfile, createProfile } from '../../../actions/profile'

const EditProfile = ({ getMyProfile, history, createProfile, profile: { profile, loading } }) => {

  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    youtube: '',
    instagram: '',
    github: ''
  })


  useEffect(() => {

    getMyProfile()

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
      github: loading || !profile.social ? '' : profile.social.github
      

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loading])

  },[])

  const {company,website,location,status,skills,githubusername,bio,
facebook,linkedin,twitter,youtube,instagram, github} = formData

const onChange = e => {
  setFormData({ ...formData , [e.target.name]: e.target.value });
}

const onSubmit = e => {
  e.preventDefault();
  createProfile(formData, history, true)
}

  return (

    <div className="container">
      <p className="flow-text center">Edit Profile</p>
      <br/>
      <br/>
      <form onSubmit={onSubmit}>
        
        <div className="input-field">
          <input type="text" value={status} onChange={onChange} name='status' />
          <span className="helper-text red-text">Add Profession <span>
            
            </span></span>
        </div>

        <div className="input-field">
          <input type="text" name="company" value={company} className="validate" onChange={onChange}/>
          <span className="helper-text red-text">Company</span>
        </div>

        <div className="input-field">
          <input type="text" name="website" value={website} className="validate" onChange={onChange}/>
          <span className="helper-text red-text">Website</span>
        </div>

        <div className="input-field">
          <input type="text" name="location" value={location} className="validate" onChange={onChange}/>
          <span className="helper-text red-text">Location</span>
        </div>

        <div className="input-field">
          <input type="text" name="skills" value={skills} className="validate" required onChange={onChange}/>
          <span className="helper-text red-text">Skills <span className="red-text"></span></span>
        </div>

        <div className="input-field">
          <input type="text" name="githubusername" value={githubusername} className="validate" onChange={onChange}/>
          <span className="helper-text red-text">Github Username<span className="red-text"></span></span>
        </div>

        <div className="input-field">
        <textarea className="materialize-textarea" name='bio' value={bio} onChange={onChange} />
        <span className="helper-text red-text">Bio</span>
        </div>
<br/><br/>

<div className="input-field">
          <i className="fa fa-github prefix white-text"></i>
          <input type="text" name="github" value={github} className="validate" onChange={onChange}/>
      </div>

      <div className="input-field">
          <i className="fa fa-linkedin prefix blue-text darken-2"></i>
          <input type="text" name="linkedin" value={linkedin} className="validate" onChange={onChange}/>
        </div>

        <div className="input-field">
          <i className="fa fa-youtube prefix red-text"></i>
          <input type="text" name="youtube" value={youtube} className="validate" onChange={onChange}/>
        </div>


        <div className="input-field">
          <i className="fa fa-twitter prefix blue-text darken-2"></i>
          <input type="text" name="twitter" value={twitter} className="validate" onChange={onChange}/>
        </div>


        <div className="input-field">
          <i className="fa fa-instagram prefix pink-text"></i>
          <input type="text" name="instagram" value={instagram} className="validate" onChange={onChange}/>
        </div>

        <div className="input-field">
          <i className="fa fa-facebook prefix indigo-text darken-2"></i>
          <input type="text" name="facebook" value={facebook} className="validate" onChange={onChange}/>
        </div>


<br/><hr/>
    <div className="input-field">
    <input type="submit" value="Update" className='btn red'/>

<Link to='/dashboard' className='btn pink secondary-content'>Retreat</Link>
    </div>

      </form>

    </div>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getMyProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  profile: state.ProfileState
})

export default connect(mapStateToProps, {getMyProfile,  createProfile})(withRouter(EditProfile))
