import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { createProfile } from '../../../actions/profile'

const CreateProfile = ({ createProfile, history }) => {

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

  const {company,website,location,status,skills,githubusername,bio,
facebook,linkedin,twitter,youtube,instagram, github} = formData

const onChange = e => {
  setFormData({ ...formData , [e.target.name]: e.target.value });
}

const onSubmit = e => {
  e.preventDefault();
  createProfile(formData, history)
}

  return (
    <div className="container">
      <p className="flow-text center">Profile Creation</p>
      <br/>
      <br/>
      <form onSubmit={onSubmit}>

      <div className="input-field">
          <input type="text" name="status" value={status} className="validate" onChange={onChange} required/>
          <label htmlFor="status">Profession</label>
          <span className="helper-text" data-error='You must add your profession'>Profession</span>
        </div>

        <div className="input-field">
          <input type="text" name="company" value={company} className="validate" onChange={onChange}/>
          <label htmlFor="company">Company</label>
          <span className="helper-text">Company</span>
        </div>

        <div className="input-field">
          <input type="text" name="website" value={website} className="validate" onChange={onChange}/>
          <label htmlFor="website">Website</label>
          <span className="helper-text">Website</span>
        </div>

        <div className="input-field">
          <input type="text" name="location" value={location} className="validate" onChange={onChange}/>
          <label htmlFor="location">Location</label>
          <span className="helper-text">Location</span>
        </div>

        <div className="input-field">
          <input type="text" name="skills" value={skills} className="validate" required onChange={onChange}/>
          <label htmlFor="skills">Skills</label>
          <span className="helper-text" data-error='You Must Add Your Skillset'>Skills <span className="red-text"></span>*</span>
        </div>

        <div className="input-field">
          <input type="text" name="githubusername" value={githubusername} className="validate" onChange={onChange}/>
          <label htmlFor="githubusername">Github Username</label>
          <span className="helper-text">Github Username</span>
        </div>
        

        <div className="input-field">
        <textarea className="materialize-textarea" name='bio' value={bio} onChange={onChange} />
        <label htmlFor="bio">Bio</label>
        <span className="helper-text">Bio</span>
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
    <input type="submit" value="Create" className='btn red'/>

<Link to='/dashboard' className='btn pink secondary-content'>Retreat</Link>
    </div>

      </form>

    </div>
  )
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
}


export default connect(null, {createProfile})(withRouter(CreateProfile))
