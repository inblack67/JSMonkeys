import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ auth: { isAuthenticated, loading } , component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => !isAuthenticated && !loading ? <Redirect to="/login"/> : <Component {...props}/>}/> 
  )
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.AuthState
})

export default connect(mapStateToProps)(PrivateRoute)
