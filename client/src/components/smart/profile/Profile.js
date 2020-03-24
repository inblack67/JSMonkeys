import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfileById } from '../../../actions/profile'
import { Link } from 'react-router-dom'
import Preloader from '../../dumb/Preloader'
import ProfileGithub from './ProfileGithub'
import M from 'materialize-css/dist/js/materialize.min.js';
import ExperienceItem from './ExperienceItem'
import EducationItem from './EducationItem'

const Profile = ({match, getProfileById, profile:{profile, loading}, auth}) => {

  useEffect(() => {
    M.AutoInit()
  })
  

  useEffect(() => {
    getProfileById(match.params.id)
    // eslint-disable-next-line
  },[])

  while(loading)
  {
    return <Preloader />
  }

  if(!profile)
  {
    return <Preloader />
  }

  return (
<div className='container'>

      <div className="card black">
        <div className="card-content white-text">
          <span className="card-title">{profile.user.name}</span>
          <br/>

    <ul className="collapsible">

    <li>
      <div className="collapsible-header black white-text"><i className='material-icons'>work</i>Experience</div>
      <div className="collapsible-body">
        { profile.experience.length > 0 ? profile.experience.map(ex => (
          <ExperienceItem experience={ex} key={ex._id}/>
        )) : 'No Experience Listed' }
      </div>
    </li>


    <li>
      <div className="collapsible-header black white-text"><i className="fa fa-graduation-cap"></i>Education</div>
      <div className="collapsible-body">
        { profile.education.length > 0 ? profile.education.map(ed => (
          <EducationItem education={ed} key={ed._id}/>
        )) : 'No Education Listed' }
      </div>
    </li>

    <li>
      <div className="collapsible-header black white-text"><i className="fa fa-github"></i>Github Repos</div>
      <div className="collapsible-body">

      { profile.githubusername ? <ProfileGithub username={profile.githubusername}/> : 'User\'s Github Not Connected' }
      </div>
    </li>

    { !auth.loading && auth.isAuthenticated && auth.user._id === profile.user._id && <Fragment>
    <li>
      <div className="collapsible-header black white-text"><i className="material-icons">edit</i>Edit</div>
      <div className="collapsible-body">
      <Link to='/edit-profile' className='btn red'>Edit Profile</Link>
      </div>
    </li>
      </Fragment>}
   
    <li>
      <div className="collapsible-header black white-text"><i className="material-icons">whatshot</i>Links</div>
      <div className="collapsible-body">
      <Link to='/profiles' className='btn red'>
    Back to profiles
    </Link>
        </div>
    </li>
  </ul>


        </div>
        { profile.social && <Fragment>
                  
        <div className="card-action center">
          <a target='_blank' rel='noopener noreferrer' href={profile.social.github}><i className="fa fa-github medium"></i></a>

          <a target='_blank' rel='noopener noreferrer' href={profile.social.linkedin}><i className="fa fa-linkedin medium"></i></a>

          <a target='_blank' rel='noopener noreferrer' href={profile.website}><i className="fa fa-globe medium"></i></a>

          <a target='_blank' rel='noopener noreferrer' href={profile.social.twitter}><i className="fa fa-twitter medium"></i></a>

          <a target='_blank' rel='noopener noreferrer' href={profile.social.facebook}><i className="fa fa-facebook medium"></i></a>

          <a target='_blank' rel='noopener noreferrer' href={profile.social.instagram}><i className="fa fa-instagram medium"></i></a>

          <a target='_blank' rel='noopener noreferrer' href={profile.social.youtube}><i className="fa fa-youtube medium"></i></a>
        </div>  
        </Fragment> }

  </div>

  </div>
  )
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.ProfileState,
  auth: state.AuthState
})

export default connect(mapStateToProps, { getProfileById })(Profile)
