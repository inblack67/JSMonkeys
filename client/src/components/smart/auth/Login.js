import React, { useState } from 'react';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {

    e.preventDefault();

      try {

        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }

        const res = await axios.post('/api/auth', formData, config);

        console.log(res.data);

      } catch (err) {
        M.toast({ html: err.response.data.error });
      }

  }

  const { password, email  } = formData;

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

export default Login
