import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AutoInit from '../AutoInit'

const ProfileItem = ({ profile: { company, githubusername, location, skills, status, user: { _id, name, avatar } } }) => {

  return (

    <Fragment>

      <AutoInit />

    <ul className="collapsible">
    <li>
      <div className="collapsible-header black white-text"><i className="fa fa-github"></i>{name}</div>
      <div className="collapsible-body">
      <p><i className="material-icons left">border_color</i>{status}</p>
      <p><i className="material-icons left">work</i>{company}</p>
      <p><i className="material-icons left">place</i>{location}</p>
      <strong><Link to={`/profile/${_id}`} className='red-text'><i className="material-icons left">launch</i>Take A Visit</Link></strong>
      </div>
    </li>
    </ul>
    </Fragment>

  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem



/* 
     <div>
      <div className="card black">
        <div className="card-content white-text">
          <span className="card-title">{name}</span>
          <br/>
          <i className="material-icons left">border_color</i><p>{status}</p>
            <br/>
            <i className="material-icons left">work</i><p>{company}</p>
            <br/>
            <i className="material-icons left">place</i><p>{location}</p>
        </div>
        <div className="card-action">
          <Link to={`/profile/${_id}`}>See Profile</Link>
        </div>
      </div>
    </div>
*/