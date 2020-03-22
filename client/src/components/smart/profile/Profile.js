import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfileById } from '../../../actions/profile'
import { Link } from 'react-router-dom'
import Preloader from '../../dumb/Preloader'
import ProfileGithub from './ProfileGithub'

const Profile = ({match, getProfileById, profile:{profile, loading}, auth}) => {

  useEffect(() => {
    getProfileById(match.params.id)
  },[])

  if(!profile || loading)
  {
    return <Preloader />
  }

  return (
    <div className='container'>
      <Link to='/profiles' className='btn black'>
      Back to profiles
      </Link>
      { !auth.loading && auth.isAuthenticated && auth.user._id === profile.user._id && <Fragment>
        <Link to='/edit-profile' className='btn blue'>
      Edit Profile
      </Link>
      </Fragment> }

      { profile.githubusername && <ProfileGithub username={profile.githubusername}/> }

    </div>
  )
}

Profile.propTypes = {

}

const mapStateToProps = state => ({
  profile: state.ProfileState,
  auth: state.AuthState
})

export default connect(mapStateToProps, { getProfileById })(Profile)
