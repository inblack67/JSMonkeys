import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { logout } from '../../actions/auth'
import PropTypes from 'prop-types'


const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {

  const guestLinks = (
    <ul className="right hide-on-small-only">
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/register">Register</Link></li>
    </ul>
  )

  const authLinks = (
    <ul className="right hide-on-small-only">
      <a href="#1" onClick={logout}>Logout</a>
  </ul>
  )

  return (
    <nav className="deep-purple transparent">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo"><i className="fa fa-github"></i> JSMonkeys</Link>
        {!loading && <Fragment>
        {
          isAuthenticated ? authLinks : guestLinks
        }</Fragment>}
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.AuthState
}
)

export default connect(mapStateToProps, { logout })(Navbar)
