import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMyProfile } from '../../../actions/profile'
import Preloader from '../../dumb/Preloader'

const Dashboard = ({ getMyProfile, profile: {loading, profile}, auth: { user }}) => {

  useEffect(() => {
    getMyProfile();
    // eslint-disable-next-line
  },[])

  if(loading && !profile)
  {
    return <Preloader />
  }

  return (
  <Fragment>
    <p className="flow-text">Welcome { user && user.name }</p>
    { !profile ? <Fragment><p className="flow-text">You must create your profile</p>
    <Link to='/create-profile' className='btn red waves-effect waves-light'>Create Profile</Link>
    </Fragment> : <Fragment>Your profile awaits...</Fragment> }
  </Fragment>
  )
}

Dashboard.propTypes = {
  getMyProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.ProfileState,
  auth: state.AuthState
})

export default connect(mapStateToProps, { getMyProfile })(Dashboard)
