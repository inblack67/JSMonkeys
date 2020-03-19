import React, { useState } from 'react';
import { connect } from 'react-redux'
import { login } from '../../../actions/auth'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

const Login = ({login, isAuthenticated}) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {

    e.preventDefault();
    login(formData);
  }

  const { password, email  } = formData;

  if(isAuthenticated)
  {
    return (
      <Redirect to="/dashboard"/>
    )
  }

  return (
    <div className="container">
      <p className="flow-text">Login</p>
      <form onSubmit={onSubmit}>


      <div className="input-field">
        <input type="email" className="validate" onChange={onChange} value={email} name="email" required/>
        <span className="helper-text" data-error="You must add your valid email">Email</span>
      </div>

      <div className="input-field">
        <input type="password" className="validate" onChange={onChange} value={password} name="password" required minLength="6"/>
        <span className="helper-text" data-error="You must add your password">Password</span>
      </div>

      <br/>
      <input type="submit" value="Login" className="btn red darken-4"/>

    </form>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.AuthState.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);
