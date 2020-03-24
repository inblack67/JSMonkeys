import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from '../../../actions/profile'
import { withRouter } from 'react-router-dom'

const AddExperience = ({ addExperience, history }) => {

  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { company, title, location, from, to, current, description } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
    e.preventDefault()
    addExperience(formData, history)
  }

  return (
    <div className="container">
      <p className="flow-text center">Add Experience</p>
      <br/>

      <form onSubmit={onSubmit}>

        <div className="input-field">
          <input type="text" value={company} onChange={onChange} className='validate' name='company' required/>
          <label>Company</label>
          <span className="helper-text" data-error='You must add your company'>Company <span className="red-text"></span>
          
          </span>
        </div>

        <div className="input-field">
          <input type="text" value={title} onChange={onChange} className='validate' name='title' required/>
          <label>Job Title</label>
          <span className="helper-text" data-error='You must add your title'>Job Title <span className="red-text"></span></span>
        </div>

        <div className="input-field">
          <input type="text" value={location} onChange={onChange} className='validate' name='location'/>
          <label>Location</label>
          <span className="helper-text">Location</span>
        </div>
        <br/>

        <div className="input-field">
          <input type="date" value={from} onChange={onChange} className='validate datepicker' name='from' required/>
          <label>From</label>
          <span className="helper-text" data-error='When did you start working for this company?'>From <span className="red-text"></span></span>
        </div>


        <div className="input-field">
        <label>
        <input type="checkbox" value={current} name='current' onChange= { e => setFormData({ ...formData, current: !current })} checked={current} />
        <span>Current</span>
        </label>
        </div>

        <br/><br />

        <div className="input-field">
          <input type="date" value={to} onChange={onChange} className='validate datepicker' name='to' disabled={!current ? '' : 'disabled'}/>
          <label>To</label>
          <span className="helper-text">To</span>
        </div>

        <div className="input-field">
          <textarea  className="materialize-textarea" value={description} name='description' onChange={onChange}></textarea>
          <label>Description</label>
          <span className="helper-text">Description <span className="red-text"></span></span>
        </div>
        <div className="input-field">
          <input type="submit" value="Add" className='btn red'/>
        </div>
      </form>

    </div>
  )
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addExperience })(withRouter(AddExperience))
