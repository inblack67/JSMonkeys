import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Landing = ({isAuthenticated}) => {

  if(isAuthenticated) { return <Redirect to="/dashboard" /> }

  return (
    <div className="" style={{"color": "white"}}>

      <div className="container center" style={{"marginTop": "11rem"}}>  

      <Link to="/register" className="btn black waves-effect waves-light btn-large">Sign Up</Link>
      {'  '}
      <Link to="/login" className="btn red darken-4 waves-effect waves-light btn-large">Login</Link>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  isAuthenticated: state.AuthState.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
