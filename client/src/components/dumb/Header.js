import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import Landing from './Landing'

import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar />
      <Route exact path="/" component={Landing} />
    </header>
  )
}

export default Header
