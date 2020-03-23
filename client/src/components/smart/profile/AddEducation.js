import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../../actions/profile'
import { Redirect, withRouter } from 'react-router-dom'

const AddEducation = ({ addEducation, history }) => {

  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { school, degree, fieldofstudy, from, to, current, description } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
    e.preventDefault()
    addEducation(formData, history)
  }

  return (
    <div className="container">
      <p className="flow-text center">Add Education</p>
      <br/>

      <form onSubmit={onSubmit}>

        <div className="input-field">
          <input type="text" value={school} onChange={onChange} className='validate' name='school' required/>
          <label>School</label>
          <span className="helper-text" data-error='You must add your school'>School <span className="red-text"></span>
          
          </span>
        </div>

        <div className="input-field">
          <input type="text" value={degree} onChange={onChange} className='validate' name='degree' required/>
          <label>Degree</label>
          <span className="helper-text" data-error='You must add your degree'>Degree <span className="red-text"></span></span>
        </div>

        <div className="input-field">
          <input type="text" value={fieldofstudy} onChange={onChange} className='validate' name='fieldofstudy'/>
          <label>Field Of Study</label>
          <span className="helper-text">Field Of Study</span>
        </div>
        <br/>

        <div className="input-field">
          <input type="date" value={from} onChange={onChange} className='validate datepicker' name='from' required/>
          <label>From</label>
          <span className="helper-text" data-error='When did you start working for this school?'>From <span className="red-text"></span></span>
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(withRouter(AddEducation))
