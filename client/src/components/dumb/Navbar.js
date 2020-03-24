import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { logout } from '../../actions/auth'
import PropTypes from 'prop-types'
import Preloader from './Preloader'
import AutoInit from '../smart/AutoInit'


const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {

  const guestLinks = (
    <ul className="right hide-on-small-only">
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/register">Register</Link></li>
    <li><Link to="/profiles">Devs</Link></li>
    <li><Link to="/about">About</Link></li>
    </ul>
  )

  const authLinks = (
    <ul className="right hide-on-small-only">
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/profiles">Devs</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><a href="#!" onClick={logout}>Logout</a></li>
  </ul>
  )

  if(loading)
  {
    return <Preloader />
  }

  return (
    <Fragment>
      <AutoInit />
    <nav className="transparent">
      <div className="nav-wrapper">
        <a href="#!" className='left sidenav-trigger' data-target='mobile-nav'><i className="material-icons">menu</i></a>
        <Link to="/" className="brand-logo center"><span className="red-text"><i className='fa fa-github prefix fa-2x'></i><strong className=''>JSMonkeys</strong></span></Link>
        {!loading && <Fragment>
        {
          isAuthenticated ? authLinks : guestLinks
        }</Fragment>}
      </div>
    </nav>

      <ul id="mobile-nav" className="sidenav">
        <li><a href="#!"><i className="fa fa-github fa-3x red-text"></i></a></li>
        <li><div className="divider"></div></li>
        <li><a href='#!' className="subheader">Where'd you wanna go?</a></li>
        { isAuthenticated ? <Fragment>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/profiles">Devs</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#!" onClick={logout}>Logout</a></li>
        </Fragment> : 
        <Fragment>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/profiles">Devs</Link></li>
        <li><Link to="/about">About</Link></li>
        </Fragment> }
      </ul>


</Fragment>
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
