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
    instagram: ''
  })

  const {company,website,location,status,skills,githubusername,bio,
facebook,linkedin,twitter,youtube,instagram} = formData

const onChange = e => {
  setFormData({ ...formData , [e.target.name]: e.target.value });
}

const onSubmit = e => {
  e.preventDefault();
  createProfile(formData, history)
}

  return (
    <div className="container" style={{'marginBottom': '200px'}}>
      <p className="flow-text center">Profile Creation</p>
      <small className="red-text"><strong>* is a required field</strong></small>
      <br/>
      <br/>
      <form onSubmit={onSubmit}>

        <div className="input-field">
          <select required name="status" value={status} onChange={onChange}>
            <option value="0" disabled>Profession</option>
            <option value="MERN Stack Dev">MERN Stack Dev</option>
            <option value="MEVN Stack Dev">MEVN Stack Dev</option>
            <option value="MEAN Stack Dev">MEAN Stack Dev</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="profession">Add Profession <span className="red-text">*</span></label>
        </div>

        <div className="input-field">
          <input type="text" name="company" value={company} className="validate" onChange={onChange}/>
          <span className="helper-text">Company</span>
        </div>

        <div className="input-field">
          <input type="text" name="website" value={website} className="validate" onChange={onChange}/>
          <span className="helper-text">Website</span>
        </div>

        <div className="input-field">
          <input type="text" name="location" value={location} className="validate" onChange={onChange}/>
          <span className="helper-text">Location</span>
        </div>

        <div className="input-field">
          <input type="text" name="skills" value={skills} className="validate" required onChange={onChange}/>
          <span className="helper-text" data-error='You Must Add Your Skillset'>Skills <span className="red-text">*</span></span>
        </div>

        <div className="input-field">
        <textarea className="materialize-textarea" name='bio' value={bio} onChange={onChange} />
        <span className="helper-text">Bio</span>
        </div>
<br/><br/>

    <ul className="collapsible">

    <li>
      <div className="collapsible-header"><i className="material-icons">whatshot</i>Are you social?</div>

      <div className="collapsible-body">

      <div className="input-field">
          <i className="fa fa-github prefix black-text"></i>
          <input type="text" name="githubusername" value={githubusername} className="validate" onChange={onChange}/>
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

      </div>
    </li>
    </ul>

<br/><hr/>
    <div className="input-field">
    <input type="submit" value="Create" className='btn red'/>

<Link to='/dashboard' className='btn black secondary-content'>Retreat</Link>
    </div>

      </form>

    </div>
  )
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
}


export default connect(null, {createProfile})(withRouter(CreateProfile))
