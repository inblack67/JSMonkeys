import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="deep-purple transparent">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo"><i className="fa fa-github"></i> JSMonkeys</Link>
        <ul className="right hide-on-small-only">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  )
}


export default Navbar
