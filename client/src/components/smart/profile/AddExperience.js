import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from '../../../actions/profile'
import { Redirect, withRouter } from 'react-router-dom'

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
    <div className="container" style={{'marginBottom': '200px'}}>
      <p className="flow-text center">Add Experience</p>
      <p className='center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, vel?</p>
      <br/>
      <span className="red-text"><strong>* is a required field</strong></span>

      <form onSubmit={onSubmit}>

        <div className="input-field">
          <input type="text" value={company} onChange={onChange} className='validate' name='company' required/>
          <span className="helper-text" data-error='You must add your company'>Company <span className="red-text">*</span></span>
        </div>

        <div className="input-field">
          <input type="text" value={title} onChange={onChange} className='validate' name='title' required/>
          <span className="helper-text" data-error='You must add your title'>Job Title <span className="red-text">*</span></span>
        </div>

        <div className="input-field">
          <input type="text" value={location} onChange={onChange} className='validate' name='location'/>
          <span className="helper-text">Location</span>
        </div>
        <br/>

        <div className="input-field">
          <input type="date" value={from} onChange={onChange} className='validate datepicker' name='from' required/>
          <span className="helper-text" data-error='When did you start working for this company?'>From <span className="red-text">*</span></span>
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
          <span className="helper-text">To</span>
        </div>

        <div className="input-field">
          <textarea  className="materialize-textarea" value={description} name='description' onChange={onChange}></textarea>
          <span className="helper-text">Description <span className="red-text">*</span></span>
        </div>

<br/>
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
