import React from 'react'
import { Link } from 'react-router-dom'

const DashboardActions = () => {
  return (
    <div className="container">
      <Link to='/edit-profile' className='btn blue'>Edit Profile</Link>
      <Link to='/add-experience' className='btn green'>Add Experience</Link>
      <Link to='/add-education' className='btn purple'>Add Education</Link>
    </div>
  )
}

export default DashboardActions
