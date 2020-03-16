import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="" style={{"height": "100vh", "color": "white"}}>

      <div className="container center" style={{"marginTop": "11rem"}}>  

      <Link to="/register" className="btn black waves-effect waves-light btn-large">Sign Up</Link>
      {'  '}
      <Link to="/login" className="btn red darken-4 waves-effect waves-light btn-large">Login</Link>
      </div>
    </div>
  )
}

export default Landing
