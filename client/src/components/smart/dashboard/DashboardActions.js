import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js';


const DashboardActions = () => {

  useEffect(() => {
    M.AutoInit();
  })

  return (
    <div className="container">
    <ul className="collapsible">
    <li>
      <div className="collapsible-header black"><i className="material-icons">edit</i>Edit</div>
      <div className="collapsible-body black white-text">
      <Link to='/edit-profile' className='btn blue'>Edit Profile</Link>
        </div>
    </li>
    <li>
      <div className="collapsible-header black"><i className="material-icons">add</i>Add</div>
      <div className="collapsible-body black white-text">
      <Link to='/add-experience' className='btn pink'>Add Experience</Link>
      {'  '}
      <Link to='/add-education' className='btn purple'>Add Education</Link>
      </div>
    </li>

  </ul>
    </div>
  )
}

export default DashboardActions

/*
      <Link to='/edit-profile' className='btn blue'>Edit Profile</Link>
      {' '}
      <Link to='/add-experience' className='btn green'>Add Experience</Link>
      {' '}
      <Link to='/add-education' className='btn purple'>Add Education</Link>
*/