import React, { useState } from 'react';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';

const Register = () => {

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
      const newUser = {name,email,password}

      try {

        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }

        const res = await axios.post('/api/users', newUser, config);

        console.log(res.data);

      } catch (err) {
        M.toast({ html: err.response.data.error });
      }

    }
  }

  const { name, email, password, password2 } = formData;

  return (
    <div className="container">
      <p className="flow-text">Sign Up</p>
      <form onSubmit={onSubmit}>

      <div className="input-field">
        <input type="text" className="validate" onChange={onChange} value={name} name="name" required/>
        <span className="helper-text" data-error="You must add your name">Name</span>
      </div>

      <div className="input-field">
        <input type="email" className="validate" onChange={onChange} value={email} name="email" required/>
        <span className="helper-text" data-error="You must add a valid email">Email</span>
      </div>

      <div className="input-field">
        <input type="password" className="validate" onChange={onChange} value={password} name="password" required minLength="6"/>
        <span className="helper-text" data-error="You must add a password">Password</span>
      </div>


      <div className="input-field">
        <input type="password" className="validate" onChange={onChange} value={password2} name="password2" required minLength="6"/>
        <span className="helper-text" data-error="Passwords must match">Confirm Password</span>
      </div>

      <br/>
      <input type="submit" value="Register" className="btn purple"/>

    </form>
    </div>
  )
}

export default Register
