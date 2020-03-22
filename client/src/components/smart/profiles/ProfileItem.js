import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProfileItem = ({ profile: { company, githubusername, location, skills, status, user: { _id, name, avatar } } }) => {

  return (

    <div className='col s4' style={{'width': '300px', 'height': '400px'}}>
      <div className="card">
        <div className="card-image">
        <img src={avatar} alt='no-photo' className='activator'/>

        <Link to={`/profile/${_id}`} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">launch</i></Link>


        </div>
        <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{status}</p>
        </div>

        <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>
      
  <p>{company}</p>
  <p>{location}</p>
  <ul className="collection">
  { skills.map(s => (
      <li className='collection-item'>
        {s}
      </li>
    )) }
  </ul>

    </div>

      </div>
    </div>
  )
}

ProfileItem.propTypes = {

}

export default ProfileItem
