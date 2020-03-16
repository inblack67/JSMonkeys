import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="grey" style={{"height": "100vh"}}>
      <Link to="/register" className="btn red">Sign Up</Link>
      <Link to="/login" className="btn green">Login</Link>
    </div>
  )
}

export default Landing
