import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import {register} from '../../../actions/auth'

import M from 'materialize-css/dist/js/materialize.min.js';

const Register = ({ register, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {

    e.preventDefault();

    if(password !== password2)
    {
      M.toast({ html: 'Passwords must match' });
    }
    else
    {
      register(formData);
    }
  }

  const { name, email, password, password2 } = formData;

  if(isAuthenticated)
  {
    return (
      <Redirect to="/dashboard"/>
    )
  }

  return (
    <div className="container">
      <p className="flow-text">Sign Up</p>
      <form onSubmit={onSubmit}>

      <div className="input-field">
        <input type="text" className="validate" onChange={onChange} value={name} name="name" required/>
        <label htmlFor="name">Name</label>
        <span className="helper-text" data-error="You must add your name">Name</span>
      </div>

      <div className="input-field">
        <input type="email" className="validate" onChange={onChange} value={email} name="email" required/>
        <label htmlFor="email">Email</label>
        <span className="helper-text" data-error="You must add a valid email">Email</span>
      </div>

      <div className="input-field">
        <input type="password" className="validate" onChange={onChange} value={password} name="password" required minLength="6"/>
        <label htmlFor="password">Password</label>
        <span className="helper-text" data-error="You must add a password">Password</span>
      </div>


      <div className="input-field">
        <input type="password" className="validate" onChange={onChange} value={password2} name="password2" required minLength="6"/>
        <label htmlFor="password2">Confirm Password</label>
        <span className="helper-text" data-error="Passwords must match">Confirm Password</span>
      </div>

      <br/>
      <input type="submit" value="Register" className="btn red"/>

    </form>
    </div>
  )
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.AuthState.isAuthenticated
})

export default connect(mapStateToProps, {register})(Register);
